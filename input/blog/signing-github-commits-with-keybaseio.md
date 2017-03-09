---
Title: Signing GitHub Commits with Keybase.io
Published: 9/3/2017
Tags:
- Keybase
- GitHub
- Signing
- Commits
---

# Tell us how to do it already!

Yesterday, for the second time I had to sit down and figure out how to set up signing on my GitHub commits using the GPG Key which is provided by [keybase.io](https://keybase.io/), so it is time to write it down so that I don't forget how to do it again.

# Standing on the shoulders of giants...

Almost all the steps that I follow are taken from this [blog post](https://www.herebedragons.io/sign-commits-keybase) from Jan De Dobbeleer, so kudos to him for writing it up in the first place.

# The steps

I already have a keybase.io account, and therefore the steps involved in setting that up are not covered here, but in truth, it is very simple.  Head on over to their site and walk through the process.

1. Install keybase.io CLI Tool
1. Install gpg4win-vanilla:  
    `choco install gpg4win-vanilla`
1. Add keybase folder to path:  
    `C:\Users\gary.park\AppData\Local\Keybase;`
1. Export keybase keys and import into gpg4win:  
    `keybase pgp export | gpg --import`
1. Import private key:  
    `keybase pgp export --secret | gpg --allow-secret-key-import --import`
1. Find the ID for your key by using this command:  
    `gpg --list-secret-keys`
1. Using that ID, edit the key to make it trusted:  
    `gpg --edit-key F6993303`  
    `trust`  
    `5`  
    `y`  

With these steps done, I am ready to continue with setting up git to use the new gpg key.  This is due to the fact that I have already imported the public key into GitHub.  If you haven't done that part yet, then I would encourage you to follow the steps on the linked blog post.

Rather than having to remember the various git configurations that I use, I have a chocolatey package that I use to set everything up.  As a result, I can simply run the following command:

`choco install gep13.gitConfig --source "'https://www.myget.org/F/gep13/api/v2;https://chocolatey.org/api/v2/'"`

and all my git configuration will be applied, including setting up signing on commits, and my default merge/diff tools, etc.  If you are interested in the commands that I execute, you can find them all [here](https://github.com/gep13/ChocolateyPackages/blob/master/gep13.gitConfig/tools/ChocolateyInstall.ps1).

And with all of that in place, the next time you do a commit on GitHub, you should see the following:

![Verified GitHub Commit](https://gep13wpstorage.blob.core.windows.net/gep13/2017/03/09/verified-github-commit.png)

which, if you then drill into, will show additional information:

![Additional Verification Information](https://gep13wpstorage.blob.core.windows.net/gep13/2017/03/09/additional-verification-information.png)