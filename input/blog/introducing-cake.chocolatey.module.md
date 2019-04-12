---
Title: Introducing Cake.Chocolatey.Module
Published: 18/3/2017
Tags:
- cake
- cake-contrib
- chocolatey
- modules
- automation
- build
---

# Or as I like to call it...

The Chocolatey Cake Module!

# What is it?

Back in version [0.13.0](https://github.com/cake-build/cake/releases/tag/v0.13.0) of Cake a feature known as [Module Support](https://github.com/cake-build/cake/issues/646) was released.  This provided the ability to both extend and replace some of the built in functionality of Cake.

One of these extension points is the registration of [IPackageInstaller](http://cakebuild.net/api/Cake.Core.Packaging/IPackageInstaller/)'s, which deal with installing tools and addins during the Cake Script execution.  The Chocolatey Cake Module provide the extension point to allow tools to be resolved using Chocolatey.

**NOTE:** Chocolatey deals with the installation of applications.  As a result, it only makes sense for this module to deal with tools, and not addins.

# Why is this needed?

Out of the box, Cake has the ability to install tools and addins from any NuGet source.  This is documented on the [Cake Website](http://cakebuild.net/docs/fundamentals/preprocessor-directives).  Recently, [Larz White](https://github.com/larzw) [showed](http://cakebuild.net/blog/2017/01/cake-paket) how it was possible to use an alternative package manager, namely [Paket](https://fsprojects.github.io/Paket/) to install those tools and addins.

However, not all tools that you require for your build may be available as NuGet Packages.  This leaves you with two options (there are likely more, but for the purposes of this discussion, let's stick to two), you could either pre-install the required tools onto the build machine that you are using, or look to install those tools through a custom script, perhaps through something like [Chocolatey](https://chocolatey.org/).

When I joined the Cake Team, one of the first things that I did was to add [Chocolatey Aliases](http://cakebuild.net/dsl/chocolatey/) to Cake, so you have always been able to install Chocolatey packages as part of your build process, using something like this:

```
ChocolateyInstall("MyChocolateyPackage");
```

For me, that removes an element of clarity over what tooling is required for the build.  I would much rather see all of the dependencies in one place, i.e. here:

```
///////////////////////////////////////////////////////////////////////////////
// TOOLS
///////////////////////////////////////////////////////////////////////////////

#tool nuget:?package=coveralls.io&version=1.3.4
#tool nuget:?package=gitreleasemanager&version=0.5.0
#tool nuget:?package=GitVersion.CommandLine&version=3.6.2
#tool nuget:?package=JetBrains.ReSharper.CommandLineTools&version=2016.3.20161223.160402
#tool nuget:?package=ReSharperReports&version=0.2.0
#tool nuget:?package=KuduSync.NET&version=1.3.1
#tool nuget:?package=Wyam&version=0.16.1
#tool nuget:?package=gitlink&version=2.4.1
#tool nuget:?package=MSBuild.Extension.Pack&version=1.9.0
```

Along with all the other tools that I use in my build.

And that is what this Cake Module allows you to do.  You can now add the following:

```
#tool choco:?package=nodejs.install&version=7.7.3
```

Which would install version 7.7.3 of the [node.install package from chocolatey.org](https://chocolatey.org/packages/nodejs.install).

# Installation

Due to the fact that Cake Modules are extending and altering the internals of the Cake, the Module Assembly needs to be loaded prior to the main Cake execution.  As a result, the only place that this can really happen is during the bootstrapping phase.  If you use the [latest version of the default bootstrapper](https://github.com/cake-build/resources/commit/3d112812353d714dad142c41f170b949f4a2eb2f) this process is made very easy.  All you need to do is the following.

1. Add a modules folder into your tools folder
2. Add a packages.config file into the newly created modules folder
3. Add the name and version of the Module that you want to use.  **NOTE:** At this point, the assumption is that you are hosting the Module on NuGet.org.  If this is not the case, then additional steps would be required.
4. An example packages.config file is shown below:

```
<?xml version="1.0" encoding="utf-8"?>
<packages>
	<package id="Cake.Chocolatey.Module" version="0.1.0" />
</packages>
```

5. Run the build as normal.  During the Cake Execution, it will recognise the Module Assembly which as been restored into the `tools/modules` folder, and load it.

**NOTE:** Similar to the recommendation [here](http://cakebuild.net/docs/tutorials/getting-started) regarding only checking in your packages.config and not the entire contents of the Cake tools folder, the same recommendation is applied here.  Only check-in the packages.config file in the modules folder, and not the entire contents.

# Usage

As mentioned above, installing a tool using the Chocolatey Cake Module is as simple as:

```
#tool choco:?package=nodejs.install&version=7.7.3
```

If the tool in question comes from a different source, you can change that as follows:

```
#tool choco:https://www.myget.org/F/gep13/api/v2?package=gep13.gitConfig&version=1.0.6
```

In this version 0.1.0 release of the Chocolatey Cake Module you can also specify whether the package in question is a pre-release or not:

```
#tool choco:?package=packageA&prerelease
```

Future versions of the Chocolatey Cake Module will include additional options for installing the package, including things like `--forcex86`, `--install-arguments`, `--package-parameters`, etc.  This initial release includes just the very basic of installation functionality.

# Documentation

You can find additional documentation for this module here:

https://cake-contrib.github.io/Cake.Chocolatey.Module/

# Source Code

The source code for this Module can be found here:

https://github.com/cake-contrib/Cake.Chocolatey.Module

## Chat Room

If you have any questions about this Module, then please feel to drop into the Gitter Chat room for all the addins and modules which exist in the [cake-contrib organisation](https://github.com/cake-contrib) on GitHub:

[![Join the chat at https://gitter.im/cake-contrib/Lobby](https://badges.gitter.im/cake-contrib/Lobby.svg)](https://gitter.im/cake-contrib/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
