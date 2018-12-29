---
Title: Introducing the Cake.Recipe VS Code Extension
Published: 29/12/2018
Tags:
- Cake.Recipe
- Cake
- GitHub
- VS Code
- Extension
---

This is an announcement blog post for the [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.cakerecipe-vscode) that I created recently.

# What is it?

Every time I setup a new repository, I have to try to remember what steps I took to get everything up and running last time I created a project.  This includes setting up Continuous Integration, Documentation, Releases, etc.  All the things that we don't want to think about when we are actually writing code, and excited about getting something shipped.  Normally, what I do is look at the last project that I created, and copy pretty much everything from there.  This is "ok", but not ideal.  After giving it some thought, I decided to create a [repository](https://github.com/gep13/CI-CD-assets), which will house all the assets that I typically include in a new project.  That way, as things change over time, I can keep them updated in one place, ready for starting a new project.  With that done, I decided that I needed an "easy" way to get these into my new project.  I have seen people use things like yeoman to do this sort of thing, but I wanted something that wasn't quite as involved, and simply let's me grab the things that I need (as these may change on a per project basis).  What I settled on was a [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.ci-cd-assets-vscode), that can provide some commands that can download these assets into the current working directory.

# Installation

Installing the [Cake.Recipe Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=gep13.cakerecipe-vscode) is simple, it installs in the same way as any other extension.  Open Extensions from the left hand side section of VS Code, or select View | Extensions.  Then do a search for "Cake.Recipe" and the extension with an author of "Gary Ewan Park" should be returned.  Go ahead and install the extension:

![Cake.Recipe Extension Install](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Extension-Install.png)

When prompted, click the Reload button.

![Cake.Recipe Extension Reload](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Extension-Reload.png)

# Usage

## Commands

In this initial release, there is only 1 command available:

![Cake.Recipe Extension Commands](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Extension-Commands.png)

* Cake.Recipe: Add default recipe.cake file

# Documentation

You can find additional documentation for this extension here:

https://gep13.github.io/cakerecipe-vscode/

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
