---
Title: Introducing the Cake.VsCode.Recipe Package
Published: 17/02/2019
Tags:
- Cake
- VsCode
- Scripts
- Automation
---

This post is about the newly released [Cake.VsCode.Recipe](https://www.nuget.org/packages/Cake.VsCode.Recipe/) package.

## What is it?

Cake.VsCode.Recipe, whose source code can be found [here](https://github.com/cake-contrib/Cake.VsCode.Recipe) is an opinionated set of scripts for [Cake](https://cakebuild.net/), specifically around the creation and publishing of an extension to the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/vscode).  As most of you will be aware, I am a maintainer of the Cake project, and I have a growing [collection of extensions](https://marketplace.visualstudio.com/publishers/gep13) for Visual Studio Code, so it should come as no real surprise to you that I wanted a way to reliably, and consistently, build and publish these extensions.

## Why is this needed?

Across the Visual Studio Code extensions that I have created, and work on, I found myself writing the same build steps over and over again for building and publishing them.  In each of these projects, I was writing almost EXACTLY the same code, but with simply a few changes here and there for project specific configuration.  After a few rounds of making a modification to one projects build scripts, only to have to duplicate that work in the other projects, I decided it was time to centralize these scripts into one location.  And that is where the Cake.VsCode.Recipe package comes in.

## What does it do?

In addition to wrapping the calls to build a Visual Studio Code extension, Cake.VsCode.Recipe encompasses the complete process of publishing the extension.  In my case, this includes the creation of a Chocolatey package, which makes it incredible simple to get the extension installed on a new machine in an automated way.  The tasks that are executed by Cake.VsCode.Recipe are:

* Print-AppVeyor-Environment-Variables
  * Really a helper task.  When running on AppVeyor, it will print out all the Environment Variables used by AppVeyor.  These can be useful when debugging issues with the build process.
* Export-Release-Notes
  * Can be used to export the set of generated release notes for the project, and include in the released artifacts.  This isn't enabled by default.
* Clear-AppVeyor-Cache
  * Another helper method.  In order to speed up build times, AppVeyor allows heavy caching of files.  From time to time, it is helpful to bust this cache, again for the purposes of debugging.
* Show-Info
  * Similar to Print-AppVeyor-Environment-Variables, this task prints out information about the current configuration of Cake.VsCode.Recipe itself
* Clean
  * Tidies up the generated artifacts, ready for re-building it
* Update-Project-Json-Version
  * This uses the output from GitVersion, to update the projects Json file with the asserted version number.  This is ultimately used to version the generated vsix and nupkg file.
* Npm-Install
  * Based on the contents of the package.json file, run `npm install` to install all required dependencies.
* Install-TypeScript
  * In order to successfully build the Visual Studio Code extension, it is necessary to have the tsc tool installed.  This task uses npm to install this tool globally.
* Install-Vsce
  * vsce is the tool that is used to actually publish an extension to the Visual Studio Code Marketplace.  Again, use npm to install this globally.
* Package-Extension
  * This task builds and packages the Visual Studio Code extension.
* Create-Chocolatey-Package
  * Once the vsix file is generated, create an embedded Chocolatey Package, with the vsix file contained within it, making it very simple to install it on a new machine.
* Upload-AppVeyor-Artifacts
  * All artifacts from the build, i.e. the vsix and nupkg files, are uploaded to AppVeyor for later usage.
* Publish-GitHub-Release
  * When a release of the extension is made, upload assets to the created GitHub release, again, for later usage.
* Publish-Extension
  * When a release of the extension is made, publish the generated vsix file to the Visual Studio Code Marketplace.
* Publish-Chocolatey-Package
  * When a release of the extension is made, publish the genereated nupkg file to Chocolatey.
* Clean-Documentation
  * Clean any/all documentation for the project
* Deploy-Graph-Documentation
  * Scan the Cake dependency graph and generate some documentation around what tasks are included in the Recipe.
* Publish-Documentation
  * Takes the generated documentation, and publishes it to GitHub Pages.  This will use KuduSync to verify that there are actually differences in the newly generated files, compared to what is already published, and will only publish if there are differences
* Preview-Documentation
  * When running locally, Wyam has the ability to serve the content from a webserver, which can then be viewed.  In addition, when changes are made to the documentation, it will immediately re-build and show the changes.  This is very useful when iterating over a change

With all of these top level tasks taken care of, it is just a case of installing Cake.VsCode.Recipe into my build process for the project I am working on, and configuring the project specific details

## Installation

Installing Cake.VsCode.Recipe into a build is done using Cake's `load` pre-processor directive.  It is as simple as this:

```
#load nuget:https://www.nuget.org/api/v2?package=Cake.VsCode.Recipe&version=0.1.0
```

Here, I am telling Cake to go to NuGet and find version 0.1.0 of Cake.VsCode.Recipe, and load the scripts that it contains.  Cake will download the nupkg, extract the files into the tools folder, and then iterate through all of the `.cake` files contained within it, into the current build.  This saves a lot of time and effort by not having to do this manually.  Then, when a new version of Cake.VsCode.Recipe is released, all that has to be done is to change the version number, and a project has the latest and greatest scripts available.

## Usage

With that done, all that is required is to configure the project specific details.  For example:

```
Environment.SetVariableNames();

BuildParameters.SetParameters(context: Context,
                            buildSystem: BuildSystem,
                            title: "CI-CD-assets-vscode",
                            repositoryOwner: "gep13",
                            repositoryName: "CI-CD-assets-vscode",
                            appVeyorAccountName: "GaryEwanPark",
                            shouldRunGitVersion: true);

BuildParameters.PrintParameters(Context);

Build.Run();
```

A lot of things in Cake.VsCode.Recipe are done via Environment Variables.  For example, storing the credentials that are used to commit and push changes to GitHub Pages, publishing to Chocolatey and Visual Studio Code Marketplace, etc.  Out of the box, Cake.VsCode.Recipe expects these variables to be a certain name, but it is possible to override these to your own preferences.  In the script above, calling `Environment.SetVariableNames();` simply sets these to the default values.

With that done, calling `SetParameters` allows setting up specific information, such as the name of the project, etc.

Then it is simply a case of printing the parameters (purely optional), and then running the build, and job done.

So, when testing locally, all that is required is to execute either:

```
./build.ps1
```

or

```
./build.sh
```

Doing either of these will cause the default Package-Extension task to be executed, and on completion, you will have a generated vsix file, that can be loaded into Visual Studio Code for testing.

In a CI context, you would do something like:

```
.\build.ps1 -Target "AppVeyor"
```

Which would execute a different path which would cause the Publish Tasks to be called, which would, assuming it is a tagged release, result in publishing to both Chocolatey and Visual Studio Code Marketplace.

## Documentation

You can find additional documentation for this package here:

https://cake-contrib.github.io/Cake.VsCode.Recipe/

## Source Code

The source code for this Extension can be found here:

https://github.com/cake-contrib/Cake.VsCode.Recipe

## Chat Room

If you have any questions about this package, then please feel to drop into the Gitter Chat room:

[![Join the chat at https://gitter.im/cake-contrib/Lobby](https://badges.gitter.im/cake-contrib/Lobby.svg)](https://gitter.im/cake-contrib/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
