---
Title: Introducing the CI/CD Assets Repository and VS Code Extension
Published: 28/12/2018
Tags:
- CI
- CD
- GitHub
- VS Code
- Extension
---

This is an announcement blog post for the [repository](https://github.com/gep13/CI-CD-assets) and [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.ci-cd-assets-vscode) that I created yesterday.

# What is it?

Every time I setup a new repository, I have to try to remember what steps I took to get everything up and running last time I created a project.  This includes setting up Continuous Integration, Documentation, Releases, etc.  All the things that we don't want to think about when we are actually writing code, and excited about getting something shipped.  Normally, what I do is look at the last project that I created, and copy pretty much everything from there.  This is "ok", but not ideal.  After giving it some thought, I decided to create a [repository](https://github.com/gep13/CI-CD-assets), which will house all the assets that I typically include in a new project.  That way, as things change over time, I can keep them updated in one place, ready for starting a new project.  With that done, I decided that I needed an "easy" way to get these into my new project.  I have seen people use things like yeoman to do this sort of thing, but I wanted something that wasn't quite as involved, and simply let's me grab the things that I need (as these may change on a per project basis).  What I settled on was a [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.ci-cd-assets-vscode), that can provide some commands that can download these assets into the current working directory.

# Installation

Installing the [CI/CD Assets Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=gep13.ci-cd-assets-vscode) is simple, it installs in the same way as any other extension.  Open Extensions from the left hand side section of VS Code, or select View | Extensions.  Then do a search for "CI/CD" and the extension with an author of "Gary Ewan Park" should be returned.  Go ahead and install the extension:

![CI/CD Assets Extension Install](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/28/CI-CD-Assets-Extension-Install.png)

When prompted, click the Reload button.

![CI/CD Assets Extension Reload](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/28/CI-CD-Assets-Extension-Reload.png)

# Usage

## Commands

In this initial release, there are 10 commands available:

![CI/CD Assets Extension Commands](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/28/CI-CD-Assets-Extension-Commands.png)

* CICD: Download .editorconfig file
* CICD: Download .appveyor.yml file
* CICD: Download .gitattributes file
* CICD: Download .gitignore file
* CICD: Download .mergify.yml file
* CICD: Download .travis.yml file
* CICD: Download GitReleaseManager.yaml file
* CICD: Download config.wyam file
* CICD: Download .github files
* CICD: Download all files

Each one of these commands (with the exception of the final two), download a single file on the root of the current workspace.  For example, executing the `CICD: Download .appveyor.yml file` command results in the file at this [URL](https://github.com/gep13/CI-CD-assets/blob/master/.appveyor.yml) being downloaded into the current workspace.  If a file with that name already exists in the current workspace, you will be prompted whether it should be overwritten or not:

![CI/CD Assets Extension Overwrite](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/28/CI-CD-Assets-Extension-Overwrite.png)

At this point, you can choose to cancel the operation by clicking the small cross at the top of the pop-up, or you can continue the operation by clicking the Overwrite button.  If you choose to proceed, you should see the following when completed:

![CI/CD Assets Extension Download Complete](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/28/CI-CD-Assets-Extension-Download-Complete.png)

The final two commands are slightly different.  `CICD: Download .github files` will download all the files in the .github folder [here](https://github.com/gep13/CI-CD-assets/tree/master/.github) and also create the .github folder if it doesn't exist, and the final command downloads all the files from the repository.  This latter command is useful if you want to grab everything and get started.

# Settings

Now, the files that I have placed into the CI/CD Assets are very much configured to the way that I operate, and they are unlikely to fit exactly what "you" want.  I will happily accept PR's to the files if they fit with how I want to operate, but more likely, you are going to want to use your own files.  This is possible via the settings for this VS Code Extension.  By default, each of the commands use the URL's which are pointed at the CI/CD Assets Repository:

![CI/CD Assets Extension Settings](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/28/CI-CD-Assets-Extension-Settings.png)

However, you can override these download URL's with your own, and continue to use the Commands that are included within this extension.

# Documentation

You can find additional documentation for this extension here:

https://gep13.github.io/ci-cd-assets-vscode/

**NOTE**:  At the time of writing this blog post, there is little to no documentation, but the scaffolding is there to get some added, so if you are interested, please feel free to jump in and help.

# Resources

If you are interested in hearing about new functions that are being added into the Extension, I will have a YouTube Playlist setup shortly, where I will push short videos of the new functionality as each version is released.

# Source Code

The source code for CI/CD Assets can be found here:

https://github.com/gep13/CI-CD-assets

This houses all the assets that are intended to be consumed when starting a new project.  The source code for the CI/CD Assets VS Code Extension can be found here:

https://github.com/gep13/CI-CD-assets-vscode

# Chat Room

If you have any questions about this Extension (or any of the other OSS work that I do), then please feel to drop into the Gitter Chat room:

[![Join the chat at https://gitter.im/gep13-oss/community](https://badges.gitter.im/gep13-oss/community.svg)](https://gitter.im/gep13-oss/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
