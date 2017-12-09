These are the things that I have done..

Install homebrew

This was simple, followed the steps on the website.

After getting that installed, I set about installing the following applications

These were installed using cask

* alfred
* iterm2
* sizeup
* visual-studio-code
* gitter
* kdiff3
* slack
* vmware-fusion
* google-chrome
* tuxera-ntfs
* filezilla
* whatsapp
* cheatsheet
* skype
* sourcetree
* keybase
* snagit

These were installed using brew:

* gpg

These were installed directly:

* Jabra Suite for Mac

These were installed through the App Store:

* Microsoft Remote Desktop

Couple of things that I ran into...

When trying to install gpg through brew, I ran into a weird error regarding permissions.  A quick google turned up a number of hits, but this one in particular helped:

https://stackoverflow.com/questions/46459152/cant-chown-usr-local-for-homebrew-in-osx-10-13-high-sierra

My understanding is that out of the box, High Sierra no longer allows access to some folders that brew uses, and it is necessary to explicitly add these permissions.  In addition to the folders listed in that SO answer, I also had to add `/usr/local/lib`

Another issue came up when trying to configure gpg signing of my commits using my key from keybase.io.  I initially followed the steps in this article:

https://github.com/pstadler/keybase-gpg-github

To get the necessary applications installed, but then I switched to this article:

https://iwader.co.uk/post/signing-git-commits-keybase-gpg-key

When it came to exporting and importing keys.

However, when it came to importing the secret key, I ran into this error:

`Inappropriate ioctl for device`

A quick google turned up a number of things, but this is the one that made most sense to me:

https://github.com/keybase/keybase-issues/issues/2798

After adding that to my `.profile` file (**NOTE**: I had to create this file first), the exporting and importing of the private key started working.
