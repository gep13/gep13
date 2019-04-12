---
Title: GitReleaseManager Release 0.8.0
Published: 30/12/2018
Tags:
- gittools
- gitreleasemanager
- global tool
- .net
---

I am very happy to announce the 0.8.0 Release of the [GitReleaseManager](https://github.com/GitTools/GitReleaseManager).  This is an important release as it brings with it a .Net Global Tool version of the tool.  Now, you can install it using:

```shell
dotnet tool install GitReleaseManager.Tool -g
```

# Installation

You can now install GitReleaseManager on Windows as follows:

![GitReleaseManager Windows Install](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/30/GitReleaseManager-Windows-Install.png)

And also on Mac as the following:

![GitReleaseManager Mac Install](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/30/GitReleaseManager-Mac-Install.png)

In addition, it is still possible to install GitReleaseManager using Chocolatey with the command:

```shell
choco install gitreleasemanager.portable
```

# Update Labels

In addition to the .Net Global Tool, another feature was added to GitReleaseManager.  It is now possible to update a GitHub Repository with a pre-defined set of labels.  In this release, that pre-defined list is hard-coded into GitReleaseManager, however, in a future release, it will be possible to provide a file with the labels to use.

## Why is this needed?

While a new GitHub repository comes with a set of existing labels:

![GitHub Default Labels](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/30/GitHub-Default-Labels.png)

These are not quite to my liking, and everytime I created a new Repository, I found I had to change them.  This ultimately resulted in a script which I would run to change them.  I then decided that this would make a sensible addition to GitReleaseManager.  As a result, you can now run the following command:

```shell
gitreleasemanager.exe label -o cake-contrib -r Cake.Twitter -u bob -p password
```

To update the set of labels on the repository to the following:

![GitReleaseManager Labels](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/30/GitReleaseManager-Labels.png)


**NOTE:** This is a destructive operation, in the sense that it will delete all the existing labels on your repository.

# Thanks

I have to say a huge thank you to Artur ([@arturcic](https://github.com/arturcic)) who worked on this release, and who was responsible for the creation of the .Net Global Tool.  Thank you!

# Release Information

Release notes for all GitReleaseManager releases can be found on the [GitHub Repository Release Page](https://github.com/GitTools/GitReleaseManager/releases) but the specific additions for the 0.8.0 release are shown below:

__Bugs__

- [__#120__](https://github.com/GitTools/GitReleaseManager/issues/120) URL parts incorrectly identifies the user and repository parts
- [__#119__](https://github.com/GitTools/GitReleaseManager/issues/119) Correct issue with casing of label name

__Features__

- [__#124__](https://github.com/GitTools/GitReleaseManager/issues/124) Add support for adding default labels to issues on a repository
- [__#117__](https://github.com/GitTools/GitReleaseManager/issues/117) Add Token option for CLI as alternative to user/password
- [__#116__](https://github.com/GitTools/GitReleaseManager/issues/116) Add GitReleaseManager as Global Tool

__Improvements__

- [__#121__](https://github.com/GitTools/GitReleaseManager/issues/121) Include link to closed issues in milestone link
- [__#115__](https://github.com/GitTools/GitReleaseManager/issues/115) Switch to new csproj format
- [__#110__](https://github.com/GitTools/GitReleaseManager/issues/110) Update project NuGet packages
