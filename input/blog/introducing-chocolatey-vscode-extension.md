---
Title: Introducing the Chocolatey VS Code Extension
Published: 25/11/2018
Tags:
- Chocolatey
- VS Code
- Extension
- Automation
- Windows
---

This announcement blog post is a "little" late.  The first version of this [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-vscode) was created back in January 2016, however, it is only recently that it has been given a new lease of life, with some additional functionality around executing Chocolatey commands from within VS Code.  As a result, I thought this was a good time to introduce it properly.

# What is it?

The [Chocolatey Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-vscode) brings with it a number of commands and snippets to help with the creation and packaging of Chocolatey packages.  There are plans for adding more commands into the extension as time permits, and if you are interested in helping out with adding more functionality, please feel free to get in touch.

# Why is this needed?

When getting started with Chocolatey, it can be a little daunting to get up to speed with the various commands that are required to create, pack and push, Chocolatey packages.  While there is extensive documentation to guide you through this process, it can be a little overwhelming.  This extension is an attempt to help with some of these tasks, to help guide you through this process, via the use of snippets, and most recently, commands.

# Installation

Installing the [Chocolatey Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=gep13.chocolatey-vscode) is simple, it installs in the same way as any other extension.  Open Extensions from the left hand side section of VS Code, or select View | Extensions.  Then do a search for "chocolatey" and the extension with an author of "Gary Ewan Park" should be returned.  Go ahead and install the extension:

![Chocolatey Extension Install](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Extension-Install.png)

When prompted, click the Reload button.

![Chocolatey Extension Reload](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Extension-Reload.png)

# Usage

## Snippets

While you are editing your Chocolatey Packaging scripts, you can begin typing the word `choco` and it will bring up some snippets to help with the creation of some of the Chocolatey Helper methods, as shown here:

![Chocolatey Snippets](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Snippets.png)

After selecting one, you will then have the option of pressing the tab key on your keyboard, to start stepping through the various parameters, filling in the ones that are required.

![Chocolatey Snippet Output](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Snippet-Output.png)

The snippets that are generated are based on the Chocolatey Best Practices from the output of the default template from the `choco new` command.

## Commands

If you open the command palette for VS Code, and type `choco`, you will be met with two commands:

* Create new Chocolatey Package
* Pack Chocolatey Package(s)

![Chocolatey Commands](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Commands.png)

The first will take as an input the name of the Chocolatey Package that you want to create, and it will then execute the `choco new` command, placing the output into the root of the current workspace which is open in VS Code.  You can see the output here:

![Chocolatey New Output](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-New-Output.png)

The second command will look through the current workspace, and find any `*.nuspec` files that are contained with it.  Then, you can either select an individual nuspec file, or all of them, to then execute the `choco pack` command on them.  You will be prompted for any additional arguments that you would like to pass into this command.  For example, you might want to pass something like the following:

```sh
--output-directory="'c:/temp'"
```

To have the generated `*.nupkg` files placed into a different directory, rather than being generated next to the nuspec file.

# Notes

While you can install this extension in VS Code running on other operating systems, it will only work in its entirity on a Windows Machine.  Attempting to run the commands on another operating system, will result in the following:

![Chocolatey Not Installed](https://gep13wpstorage.blob.core.windows.net/gep13/2018/11/25/Chocolatey-Not-Installed.png)

# Documentation

You can find additional documentation for this extension here:

https://gep13.github.io/chocolatey-vscode/

**NOTE**:  At the time of writing this blog post, there is little to no documentation, but the scaffolding is there to get some added, so if you are interested, please feel free to jump in and help.

# Resources

If you are interested in hear about new functions that are being added into the Extension, I have a YouTube Playlist [here](https://www.youtube.com/playlist?list=PL84yg23i9GBhIhNG4LaeXNHwxZYJaSqgj), where I will push short videos of the new functionality as each version is released.

# Source Code

The source code for this Extension can be found here:

https://github.com/gep13/chocolatey-vscode

# Chat Room

If you have any questions about this Extension, then please feel to drop into the Gitter Chat room:

[![Join the chat at https://gitter.im/gep13/chocolatey-vscode](https://badges.gitter.im/gep13/chocolatey-vscode.svg)](https://gitter.im/gep13/chocolatey-vscode?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Thanks

The execution of the Chocolatey commands in this extension would not have been possible without the amazing work of the [Ember CLI VS Code extension](https://github.com/felixrieseberg/vsc-ember-cli), as this was used as the basis for creating this feature in this extension. Huge thanks to [Felix Rieseberg](Fhttps://github.com/felixrieseber).
