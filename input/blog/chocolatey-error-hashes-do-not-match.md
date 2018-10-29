---
Title: Chocolatey Package Error - Checksums do not match
Published: 29/10/2018
Tags:
- Chocolatey
- Install
- Error
- Checksums
---

Earlier today on Twitter, I was asked this question:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/gep13?ref_src=twsrc%5Etfw">@gep13</a> I tried installing <a href="https://twitter.com/JuliaLanguage?ref_src=twsrc%5Etfw">@JuliaLanguage</a> but I get this error: <a href="https://t.co/QEvqqayjSU">https://t.co/QEvqqayjSU</a><br>I would appreciate if you could help</p>&mdash; Foad Sojoodi Farimani (@fsfarimani) <a href="https://twitter.com/fsfarimani/status/1056873572344356864?ref_src=twsrc%5Etfw">October 29, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


I started to write a response, but I realised that it was going to take more than 240 characters to explain, so I thought I would write a blog post about it instead.

# The Error

The error that is being reported by Chocolatey is this:

![Checksums do not match](https://gep13wpstorage.blob.core.windows.net/gep13/2018/10/29/checksums-do-not-match.png)

I verified that I was getting the same error message by testing the installation on the local Chocolatey Testing Environment.

# What does this mean?

That's great, but what does that actually mean?  Let's break this log down a little bit...

>Progress: 100% - Completed download of C:\Users\Administrator\AppData\Local\Temp\chocolatey\Julia\1.0.0\julia-1.0.0-win64.exe
(52.83 MB).

This tells us that Chocolatey successfully went into the chocolateyInstall.ps1 file and found the download URL that the package maintainer put in there.  Notice that it has downloaded the 64-bit version of this installer, since I ran it on a 64-bit operating system.

>Download of julia-1.0.0-win64.exe (52.83 MB) completed.

This tells us that Chocolatey was successfully able to download a file from the specified URL.

>Error - hashes do not match. Actual value was '001874185A26F598ABE2E7FC287CACF66387C68CAA3251F5AA6EF97FB22020DD'.

This is where things start to go wrong.  When the download of a file has been completed, Chocolatey will take a checksum (i.e. a hash) of the file.  This can then be compared to the checksum (if provided) by the package maintainer.  In this case, the package maintainer expected the checksum of the file to be `3bf5572cbcbc7848b235dcf21caf24ce26b9fb3839eb13db1a7170d20cdf834d` but it was actually `001874185A26F598ABE2E7FC287CACF66387C68CAA3251F5AA6EF97FB22020DD`.  Since Chocolatey is secure by default, the installation of the package immediately exits, and an error is thrown:

>ERROR: Checksum for 'C:\Users\Administrator\AppData\Local\Temp\chocolatey\Julia\1.0.0\julia-1.0.0-win64.exe' did not meet '3b
f5572cbcbc7848b235dcf21caf24ce26b9fb3839eb13db1a7170d20cdf834d' for checksum type 'sha256'.

# Why do we need checksums?

Chocolatey introduced the concept of checksums for package installation to provide some assurance to the end users of Chocolatey that the application installers that are being downloaded are correct/valid.  At the time of creating a package, we ask package maintainers to include the checksum for the files that are being downloaded, so that at installation time, this checksum can be asserted to ensure that what is being installed is what is expected.  This protects the user from any malicious tampering of the application installer.  When creating the package, the maintainer can sometimes find the published checksum of the files on the vendor website, or they can calculate the checksum of the file(s) themselves once they have tested to make sure that it is installed correctly.

# So why did this go wrong?

Now, all of this makes perfect sense, and will work flawlessly, until one of two common things happen.

Firstly, some packages (like Google Chrome) don't included versioned URL's for their application installer.  As a result, you can only ever download the Chrome installer from one location, namely `https://dl.google.com/tag/s/dl/chrome/install/googlechromestandaloneenterprise64.msi`.  As a result, whenever Google push out a new version of Chrome, which happens quite frequently, the most recent package version of Chrome on Chocolatey.org is immediately broken.  This is due to the fact that the checksum within the Chocolatey package is still the checksum for the old installer available at that URL, which has now been replaced with the new one.  In the case of the Google Chrome package, it is part of the [Core Team Packages](https://github.com/chocolatey/chocolatey-coreteampackages) which checks for new package versions every 6 hours, and automatically pushes out a new package when detected.  As a result of this, the Google Chrome package is normally only "broken" for a short period of time.

The second way that checksums will break is if vendor "change" the application installer once it has been published, without changing the version number.  Unfortunately, this happens more often than you would think.  Let's walk this through...

* A vendor creates a new version of their application, let's call it 1.0.0, and publishes it to their website.
* A Chocolatey Package maintainer spots that there is a new version pf the application, and sets about creating the Chocolatey package.  They download the installer, test that it is all working, and then calculate the checksum, update their packaging scripts, run `choco pack` and push the package version to Chocolatey.org
* The automated checks on Chocolatey.org then kick in to make sure that the package does indeed download and install correctly, including verifying that the hashes match.
* The package is then moved to human moderation, and the package is ultimately approved.
* Some time later, the vendor then notices that there is a problem with the installer, and rather than increment the version number, they simply re-build the installer, and replace it on their website.
* To anyone installing the application directly from the website, there are no problems.  However, to anyone installing the Chocolatey package, there will be error, as the checksum on the file which is downloaded, compared to the checksum in the Chocolatey package, will no longer match.

Since we know that the package in question completed the automated installation test, we know that at one point the checksum on the installer did match what is in the package, however, this installer no longer has this checksum.

# What can I do about it?

The best way to fix this problem would be to reach out to the maintainers of the package and ask them to push a new package version that includes the correct checksum.  In the case of this package, there is actually a new version of the application available, so this package is due to be updated.  If there wasn't a new version available, then the maintainer could push a new package version using what is known as the [package fix notation](https://chocolatey.org/docs/create-packages#package-fix-version-notation).

If this isn't an option, or you need the installation "right" now, you have two options, both of which are mentioned in the error message above.  The first would be to run this command:

```powershell
choco install julia --checksum64 001874185A26F598ABE2E7FC287CACF66387C68CAA3251F5AA6EF97FB22020DD
```

The checksum in question is actually reported from Chocolatey, so what you need to ascertain is whether you trust that checksum.  To be safe, you would probably want to go to the vendor download page and verify this yourself.

The final option would be to run the command:

```powershell
choco install julia --ignore-checksums
```

This is by far the least secure method, and it isn't one that I recommend.

# Summary

Due to the fact that Chocolatey is secure by default, there are situations like this that do occur.  However, please bear in mind that Chocolatey is trying to protect you from what could be a malicious installer.
