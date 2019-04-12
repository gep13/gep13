---
Title: How to use AppVeyor Build Cache
Published: 23/7/2017
Tags:
- how to
- appveyor
- build cache
---

Another important feature offered by AppVeyor is it's [Build Cache](https://www.appveyor.com/docs/build-cache/).  Due to the fact that every AppVeyor build uses a fresh copy of the Build Agent Virtual Machine, any files and folders that were created as part of the build are not persisted between project builds.

So for example, if as part of your build you restore lots of NuGet packages, or you install packages from Chocolatey, then these things will have to happen on every build.  This is problematic for two reasons.

1. It means that your builds are going to be slightly slower than they could be as they are having to restore these dependencies on every build
2. The success of your build is dependent on 3rd party websites being available.  So for example, if NuGet.org isn't working properly, your build is going to fail as those required packages can't be downloaded.

Making use of the AppVeyor Build Cache fixes both of these problems.

To set up the Build Cache is really simple:

    cache:
      - tools -> build.cake, tools/packages.config

With this entry in your `.appveyor.yml` file, at the end of the build all files and folders within the `tools` folder will be added to the Build Cache, and restored on the next build.  Additionally, if either of the `build.cake` or `tools/packages.config` file change between Project Builds, then the tools folder in the Build Cache will be invalidated and re-created during the build.

This configuration gives us full flexibility and control over the Build Cache, which results in a more resilient and re-producible build.

I have created a short video with walks through this entire process, and shows the Build Cache in action, in the context of a build which uses the [Cake Build Automation tool](http://cakebuild.net/).

<iframe width="853" height="480" src="https://www.youtube.com/embed/ELb8l9nvWok" frameborder="0" allowfullscreen></iframe>
