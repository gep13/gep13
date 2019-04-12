---
Title: Introducing the Chocolatey Azure DevOps Extension
Published: 25/11/2018
Tags:
- chocolatey
- azure devops
- pipelines
- extension
- automation
- windows
---

Unlike my last [blog post](https://www.gep13.co.uk/blog/introducing-chocolatey-vscode-extension), this announcement is up to date!  Yesterday, I released the [Chocolatey Extension for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-azuredevops) which helps to execute Chocolatey commands as part of your Azure DevOps Pipelines.

# What is it?

The [Chocolatey Extension for Azure DevOpsVS Code](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-azuredevops) helps with the execution of Chocolatey commands as part of your Azure DevOps Pipelines.  All of the main Chocolatey commands, including `pack`, `push`, `install`, `upgrade` are covered, and also the ability to run any custom Chocolatey commands.

# Why is this needed?

## Isn't there already some Chocolatey Azure DevOps Extensions?

Yes, this is absolutely correct, there are.  Unfortunately, one of them doesn't currently work correctly and doesn't seem to be being maintained, and the other focuses on only a couple Chocolatey commands.  As a result, I decided that I would create another Chocolatey Extension, modelled on the existing NuGet Extension, which allows the execution of any Chocolatey Command.  In addition, creating a Azure DevOps extension for Chocolatey was one of those itches that had to be scratched, and I hope it is useful for you.  I also feel that this is a good compliment for the [Chocolatey VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-vscode) which I have also created.

## Isn't Chocolatey already installed on the Azure Build Agents?

Yes, this is also absolutely true.  As a result, it is possible to use a normal PowerShell Task to execute Chocolatey.  This Extension simply makes that process a little easier, by showing you the expected inputs to each command.

# Installation

Installing the [Chocolatey Extension for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-azuredevops) is simple.  Go to the [extension page](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-azuredevops) in the marketplace and click the `Get it free` button:

![Chocolatey Get It Free](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Get-It-Free.png)

You will then be prompted which Organisation you would like to install the Extension into.

# Usage

Once installed, create a Pipeline (if you don't already have one), and choose the option to add a new Task.  You will find the Chocolatey Task under the Build section, or you can use the search.  Once found, select the option to add the task:

![Chocolatey Add New Task](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Add-New-Task.png)

With that done, drill into the options for the task, and select what command you want to use:

![Chocolatey Task](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Task.png)

You have the option to pick from the following commands:

* apikey
* config
* custom
* feature
* install
* pack
* push
* source
* upgrade

All required arguments for each command are marked as required, and the Azure DevOps Task will illustrate this in the usual way.

# Notes

Currently, this extension assumes that Chocolatey is already installed on the Build Agent executing this build.  The Task will check to see if Chocolatey can be located before attempting to execute, however, if it is not there, it will throw an exception, which will fail the build.  There is an open issue [here](https://github.com/gep13/chocolatey-azuredevops/issues/13), for adding an additional task to install/upgrade Chocolatey, similar to the NuGet Tool Installer task.

# Documentation

You can find additional documentation for this extension here:

https://gep13.github.io/chocolatey-azuredevops/

**NOTE**:  At the time of writing this blog post, there is little to no documentation, but the scaffolding is there to get some added, so if you are interested, please feel free to jump in and help.

# Resources

If you are interested in hearing about new functions that are being added into the Extension, I have a YouTube Playlist [here](https://www.youtube.com/playlist?list=PL84yg23i9GBhGahFf5-41vOJhn3D-6EUU), where I will push short videos of the new functionality as each version is released.

# Source Code

The source code for this Extension can be found here:

https://github.com/gep13/chocolatey-azuredevops

# Chat Room

If you have any questions about this Extension, then please feel to drop into the Gitter Chat room:

[![Join the chat at https://gitter.im/gep13-oss/community](https://badges.gitter.im/gep13-oss/community.svg)](https://gitter.im/gep13-oss/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Thanks

Huge thank you to the following people who helped review early versions of this extension, and provided feedback on how it can be improved:

* [Mattias Karlsson](https://twitter.com/devlead)
* [Pascal Berger](https://twitter.com/hereispascal)
* [Oren Novotny](https://twitter.com/onovotny)

As well as the creators of the [NuGet Extension for Azure DevOps](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/NuGetCommandV2), which provided a very solid basis on which to develop the Chocolatey version.

A special thanks to [Cam Soper](https://twitter.com/camsoper) for helping out with some of the questions I had [regarding some specifics](https://twitter.com/camsoper/status/1061718818467274753) around Azure Devops Tasks.

In addition, I would like to thank the authors of the existing Chocolatey Extensions for Azure DevOps, which also helped in shaping this implementation.
