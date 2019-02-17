---
Title: Introducing the Cake.Wyam.Recipe Package
Published: 06/12/2018
Tags:
- Cake
- Wyam
- Scripts
- Automation
---

This is another of those announcement blog posts that is a little on the "late" side.  This post is about the [Cake.Wyam.Recipe](https://www.nuget.org/packages/Cake.Wyam.Recipe/) package, which was first released back in May 2017.  Now, in it's sixth release, I thought it was about time to tell people about it.  Better late than never...

## What is it?

Cake.Wyam.Recipe, whose source code can be found [here](https://github.com/cake-contrib/Cake.Wyam.Recipe) is an opinionated set of scripts for [Cake](https://cakebuild.net/), specifically around the automation, and usage of [Wyam](https://wyam.io/).  As most of you will be aware, I am a maintainer of the Cake project, and I have been a long time user of Wyam (in fact, Wyam is used to generate this blog), so it should come as no real surprise to you that I wanted a way to reliably, and consistently, generate documentation via Wyam.

## Why is this needed?

Across a number of projects that I work on, I found myself writing the same build steps over and over again for creating documentation for these projects.  This could be in the form of a blog where Wyam is being used to generate the content, or when documenting an API via the source code files for the project.  In each of these projects, I was writing almost EXACTLY the same code, but with simply a few changes here and there for project specific configuration.  After a few rounds of making a modification to one projects build scripts, only to have to duplicate that work in the other projects, I decided it was time to centralize these scripts into one location.  And that is where the Cake.Wyam.Recipe package comes in.

## What does it do?

In addition to wrapping the calls to Wyam to actually generate the documentation, Cake.Wyam.Recipe encompasses the complete process of publishing the documentation.  In my case, this is GitHub Pages (however, there would be nothing to stop it being extended to publish to something like Netlify, I simply haven't had the need).  The tasks that are executed by Cake.Wyam.Recipe are:

* Print-AppVeyor-Environment-Variables
  * Really a helper task.  When running on AppVeyor, it will print out all the Environment Variables used by AppVeyor.  These can be useful when debugging issues with the build process.
* Clear-AppVeyor-Cache
  * Another helper method.  In order to speed up build times, AppVeyor allows heavy caching of files.  From time to time, it is helpful to bust this cache, again for the purposes of debugging.
* Show-Info
  * Similar to Print-AppVeyor-Environment-Variables, this task prints out information about the current configuration of Cake.Wyam.Recipe itself
* Clean-Documentation
  * Tidies up the generated documentation folder, ready for re-building it
* Build-Documentation
  * Uses Wyam to build the documentation, based on the configuration that has been applied
* Publish-Documentation
  * Takes the generated documentation, and publishes it to GitHub Pages.  This will use KuduSync to verify that there are actually differences in the newly generated files, compared to what is already published, and will only publish if there are differences
* Purge-Cloudflare-Cache
  * I normally always use Cloudflare in front of my documentation sites, and after pushing out new documentation, it is sometimes necessary to purge the cache, so that this new documentation can be seen immediately
* Preview-Documentation
  * When running locally, Wyam has the ability to serve the content from a webserver, which can then be viewed.  In addition, when changes are made to the documentation, it will immediately re-build and show the changes.  This is very useful when iterating over a change

With all of these top level tasks taken care of, it is just a case of installing Cake.Wyam.Recipe into my build process for the project I am working on, and configuring the project specific details.

## Installation

Installing Cake.Wyam.Recipe into a build is done using Cake's `load` pre-processor directive.  It is as simple as this:

```
#load nuget:https://www.nuget.org/api/v2?package=Cake.Wyam.Recipe&version=0.6.0
```

Here, I am telling Cake to go to NuGet and find version 0.6.0 of Cake.Wyam.Recipe, and load the scripts that it contains.  Cake will download the nupkg, extract the files into the tools folder, and then iterate through all of the `.cake` files contained within it, into the current build.  This saves a lot of time and effort by not having to do this manually.  Then, when a new version of Cake.Wyam.Recipe is released, all that has to be done is to change the version number, and a project has the latest and greatest scripts available.


## Usage

With that done, all that is required is to configure the project specific details.  For example:

```
Environment.SetVariableNames();

BuildParameters.SetParameters(context: Context,
                            buildSystem: BuildSystem,
                            title: "gep13",
                            repositoryOwner: "gep13",
                            repositoryName: "gep13",
                            appVeyorAccountName: "GaryEwanPark",
                            webHost: "gep13.co.uk",
                            shouldPurgeCloudflareCache: true);

BuildParameters.PrintParameters(Context);

Build.Run();
```

A lot of things in Cake.Wyam.Recipe are done via Environment Variables.  For example, storing the credentials that are used to commit and push changes to GitHub Pages, purging Cloudflare cache, etc.  Out of the box, Cake.Wyam.Recipe expects these variables to be a certain name, but it is possible to override these to your own preferences.  In the script above, calling `Environment.SetVariableNames();` simply sets these to the default values.

With that done, calling `SetParameters` allows setting up specific information, such as the name of the project, etc.  It would also be possible to specify the Theme and Recipe to use within the Wyam execution, however, in my case, the default values of Blog and CleanBlog, are exactly what I need, so these values don't need to be changed.

Then it is simply a case of printing the parameters (purely optional), and then running the build, and job done.

So, when testing locally, all that is required is to execute either:

```
./build.ps1
```

or

```
./build.sh
```

Doing either of these will cause the default Preview-Documentation task to be executed, and on completion, you will have a webserver running to preview your changes.

In a CI context, you would do something like:

```
.\build.ps1 -Target "AppVeyor"
```

Which would execute a different path which would cause the Publish-Documentation Task to be called, rather than preview.

## Additional example

Another example of where Cake.Wyam.Recipe is used is on this website:

https://github.com/cake-contrib/Cake.Issues.Website/blob/develop/build.cake

Here, the Task Graph that is provided by Cake.Wyam.Recipe is extended to include some additional functionality, but the core components of it are still available.  They have simply been augmented to include additional tasks.

## Documentation

You can find additional documentation for this package here:

https://cake-contrib.github.io/Cake.Wyam.Recipe/

## Source Code

The source code for this Extension can be found here:

https://github.com/cake-contrib/Cake.Wyam.Recipe

## Chat Room

If you have any questions about this package, then please feel to drop into the Gitter Chat room:

[![Join the chat at https://gitter.im/cake-contrib/Lobby](https://badges.gitter.im/cake-contrib/Lobby.svg)](https://gitter.im/cake-contrib/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Thanks

I have to say a huge thank you to [Pascal Berger](https://twitter.com/hereispascal) who has helped out a LOT with the creation of this package.  Thank you!
