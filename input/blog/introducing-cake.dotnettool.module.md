---
Title: Introducing the Cake.DotNetTool.Module
Published: 12/10/2018
Tags:
- cake
- cake-contrib
- dotNet
- modules
- automation
- build
---

# What is it?

Back in version [0.13.0](https://github.com/cake-build/cake/releases/tag/v0.13.0) of Cake a feature known as [Module Support](https://github.com/cake-build/cake/issues/646) was released.  This provided the ability to both extend and replace some of the built in functionality of Cake.

One of these extension points is the registration of [IPackageInstaller](http://cakebuild.net/api/Cake.Core.Packaging/IPackageInstaller/)'s, which deal with installing tools and addins during the Cake Script execution.  The DotNet Tool Module utilizes this extension point to allow tools to be resolved using the [DotNet CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-tool-install), specifically, the `dotnet tool` command.

**NOTE:** The `dotnet tool` command deals with the installation of tools.  As a result, it only makes sense for this module to deal with tools, and not addins.

# Why is this needed?

Out of the box, Cake has the ability to install tools and addins from any NuGet source.  This is documented on the [Cake Website](http://cakebuild.net/docs/fundamentals/preprocessor-directives).  Recently, [Larz White](https://github.com/larzw) [showed](http://cakebuild.net/blog/2017/01/cake-paket) how it was possible to use an alternative package manager, namely [Paket](https://fsprojects.github.io/Paket/) to install those tools and addins.

However, there are a growing number of tools that can be installed as Global DotNet Tools (there is a list of these compiled [here](https://github.com/natemcmaster/dotnet-tools) by Nate McMaster).  Cake itself, is actually published as a DotNet Global Tool.  As part of your build process, you might want to have these tools installed, ready to be used.  However, what I want to be able to do is to define the installation of these tools in the same way as I do my other tools and addins, so that everything is in the same place.  For example, I want to put them right here:

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
#tool dotnet:?package=Octopus.DotNet.Cli&version=4.41.0
```

Which would install version 4.41.0 of the [Octopus.DotNet.Cli package](https://www.nuget.org/packages/Octopus.DotNet.Cli/4.41.0).

**NOTE:** What is different here is that `dotnet` is being used, rather than `nuget`.  This is what causes Cake to defer to the DotNet Tool Module, rather than using NuGet to resolve the tool installation.

# Installation

Due to the fact that Cake Modules are extending and altering the internals of the Cake, the Module Assembly needs to be loaded prior to the main Cake execution.  As documented in the [Module section of this page](https://cakebuild.net/docs/fundamentals/preprocessor-directives), you simply have to do the following:

```
./build.sh --bootstrap
./build.sh
```

This means that the first execution of Cake will inspect your Cake script for any module inclusions in your script, and if there are any, download and install them.  And the second execution will then be able to use those modules, and complete the usage of the module.

An example of a Cake script which both includes the module definition for the DotNet Tool Module, and which also uses it, is shown below:

```
#module nuget:?package=Cake.DotNetTool.Module&version=0.1.0
#tool "dotnet:?package=Octopus.DotNet.Cli&version=4.41.0"
```

# Usage

As mentioned above, installing a tool using the DotNet Tool Module is as simple as:

```
#tool dotnet:?package=Octopus.DotNet.Cli&version=4.41.0
```

If the tool in question comes from a different source, you can change that as follows:

```
#tool dotnet:https://www.myget.org/F/gep13/api/v2?package=Octopus.DotNet.Cli&version=4.41.0
```

By default, the DotNet Tool Module will install a tool to the location of the defined Cake Tools folder (this is normally simply a `tools` folder located beside the Cake Script that is being executed).  It is possible to control the location of this tools folder in the [normal way](https://cakebuild.net/docs/fundamentals/default-configuration-values), and additionally, you can opt to install the DotNet Tool globally using:

```
#tool dotnet:?package=Octopus.DotNet.Cli&version=4.41.0&global
```

Additional parameters that can be passed to the pre-processor directive include:

* configfile
  * Specifies which NuGet config file should be used during the execution
* framework
  * Specifies the [target framework](https://docs.microsoft.com/en-us/dotnet/standard/frameworks) to install the tool for. By default, the .NET Core SDK tries to choose the most appropriate target framework.

Finally, you can control the logging verbosity of the underlying `dotnet tool` command by altering the overall verbosity of the Cake Script execution.  i.e. running:

```
./build.sh --verbosity=diagnostic
```

will cause the `dotnet tool` command to be ran with diagnostic verbosity as well.

The parameters that can be used in this pre-processor directive come from the documentation which is available [here](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-tool-install).

# Documentation

You can find additional documentation for this module here:

https://cake-contrib.github.io/Cake.DotNetTool.Module/

# Source Code

The source code for this Module can be found here:

https://github.com/cake-contrib/Cake.DotNetTool.Module

## Chat Room

If you have any questions about this Module, then please feel to drop into the Gitter Chat room for all the addins and modules which exist in the [cake-contrib organisation](https://github.com/cake-contrib) on GitHub:

[![Join the chat at https://gitter.im/cake-contrib/Lobby](https://badges.gitter.im/cake-contrib/Lobby.svg)](https://gitter.im/cake-contrib/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Other Cake Modules

There are a number of other Cake Modules that perform similar functionality for other Package Managers, for example:

* [Cake.Paket.Module](https://www.nuget.org/packages/Cake.Paket.Module/)
* [Cake.Chocolatey.Module](https://www.nuget.org/packages/Cake.Chocolatey.Module/)
* [Cake.DNF.Module](https://www.nuget.org/packages/Cake.DNF.Module/)
* [Cake.APT.Module](https://www.nuget.org/packages/Cake.APT.Module/)
* [Cake.Npm.Module](https://www.nuget.org/packages/Cake.Npm.Module/0.1.0-unstable0014)
