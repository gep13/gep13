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

This is an announcement blog post for the [Cake.Recipe VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.cakerecipe-vscode) that I created recently.

# What is it?

[Cake.Recipe](https://github.com/cake-contrib/Cake.Recipe) is a very opinionated set of [Cake](https://cakebuild.net/) scripts that are intended to be used across multiple projects.  Making use of a set of conventions, and project specific information, it is possible to run common build tasks over and over again, without the need to re-define them each time, for each project.  These scripts are housed within a NuGet package, that is restored into the local tools folder when Cake executes.

In order to make this happen, it is necessary to create a small entry script (I refer to it as the recipe.cake file), which defines the project specific information.  In the past, I have simply copied this file from a previous project, and changed it as necessary.  This new VS Code extension creates this file on the fly, after you have provided some information.

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

Executing this command will prompt you for some information.  Firstly, the name that you want to give to the script (which defaults to `recipe.cake`, but which can be anything):

![Cake.Recipe Command Build Script](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Command-Build-Script.png)

Then you will be asked for the name of the folder that contains the Source Code that is to be built with Cake.Recipe.  This is one of the conventions that Cake.Recipe is based off of.  This defaults to a folder called `Source` but again, it can be anything that you like:

![Cake.Recipe Command Source Folder](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Command-Source-Folder.png)

The third piece of information is the name of the GitHub Owner/Organisation that houses the repository that your project lives in.  Again, this is a convention, but it is assumed that you are using source control, and at the minute, Cake.Recipe has really only be tested against GitHub.  That is not to say that it wouldn't work, if you housed the code elsewhere, I just can't say that it will:

![Cake.Recipe Command GitHub Owner](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Command-GitHub-Owner.png)

The final piece of information is the name of the repository where the code is hosted on GitHub:

![Cake.Recipe Command GitHub Repository](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Command-GitHub-Repository.png)

With all of these pieces of information, the recipe.cake file is generated (here, I used a value of `cake-contrib` and `Cake.Twitter` and the GitHub information):

![Cake.Recipe Command Generated File](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/29/CakeRecipe-Command-Generated-File.png)

**NOTE:** The generated file, like Cake.Recipe itself, it quite opinionated, and it is how I normally build a project using Cake.Recipe.  There are likely things that you will need to change depending on how you need to execute the build, but this is intended as a place to start.

# Documentation

You can find additional documentation for this extension here:

https://gep13.github.io/cakerecipe-vscode/

**NOTE**:  At the time of writing this blog post, there is little to no documentation, but the scaffolding is there to get some added, so if you are interested, please feel free to jump in and help.

# Resources

If you are interested in hearing about new functions that are being added into the Extension, there is a YouTube [playlist](https://www.youtube.com/playlist?list=PL84yg23i9GBgVQXtp9G2BEkcR6v-nCsoH), where I will push short videos of the new functionality as each version is released.

The introductory video for this first release is here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/f7Ogy05im4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Source Code

The source code for the Cake.Recipe VS Code Extension can be found here:

https://github.com/gep13/cakerecipe-vscode

# Chat Room

If you have any questions about this Extension (or any of the other OSS work that I do), then please feel to drop into the Gitter Chat room:

[![Join the chat at https://gitter.im/gep13-oss/community](https://badges.gitter.im/gep13-oss/community.svg)](https://gitter.im/gep13-oss/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
