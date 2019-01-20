---
Title: What are all the Chocolatey repositories for?
Published: 11/01/2019
Tags:
- Chocolatey
- GitHub
- Repositories
---

I recently received a Tweet:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I hope you don&#39;t mind me saying, but Chocolatey has a pretty confusing structure. one of the reasons I feel hesitant to report issues on github repos is that I&#39;m not sure were to put them. the one I have just opened is for example in the wrong place :(</p>&mdash; Foad Sojoodi Farimani (@fsfarimani) <a href="https://twitter.com/fsfarimani/status/1083460818929360896?ref_src=twsrc%5Etfw">January 10, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Which got me thinking... There are 35 repositories in the [GitHub Organisation for Chocolatey](https://github.com/chocolatey), and if you are new to Chocolatey, it can daunting to know which repository is for what.  So I thought I would go through each repository, providing a short description about what it is.  In the absence of anything better, I have ordered the list based on how many stars it has on GitHub.

Let's get started...

## [choco](https://github.com/chocolatey/choco)

This is the main GitHub Repository for Chocolatey.
It contains the source code for the Chocolatey CLI, which can be downloaded and installed using the [instructions on this page](https://chocolatey.org/install).
If you encounter any problems with Chocolatey, this is likely the first place to come to see if it is a known issue, or to create a new one.
If you are going to raise an issue, please ensure that you read the issue templates to see where the best place to get an answer to your question is.

## [chocolatey](https://github.com/chocolatey/chocolatey)

This is the original GitHub Repository for the Chocolatey project.
The first version of Chocolatey was written using PowerShell.
In 2014, Chocolatey was rewritten in C# and the decision was taken to create a new repository.
In all likelihood, you should never need to use this repository, and likely any issue that is created on this repository will need to be moved to the other repository mentioned above.
It has been left active/visible for reference only.

## [boxstarter](https://github.com/chocolatey/boxstarter)

This repository houses the source code for the Boxstarter project.
[Boxstarter](https://boxstarter.org/) is built on top of Chocolatey, and it brings with it repeatable, reboot resilient Windows environment installations.
This project was originally started in 2012 by [Matt Wrock](https://twitter.com/mwrockx), but in 2018 this project [moved](https://chocolatey.org/blog/boxstarter-moves-under-chocolatey-github-organization) under the Chocolatey GitHub Organisation.
You would use this repository for anything related to the Boxstarter project.

## [ChocolateyGUI](https://github.com/chocolatey/ChocolateyGUI)

This repository houses the source code for the Chocolatey GUI project.
Chocolatey GUI is a WPF application that works alongside Chocolatey, and provides a visual interface to interact with Chocolatey.
This includes the ability to list/install/upgrade/uninstall Chocolatey Packages.
As well as the ability to add/remove Chocolatey Sources, and enable/disable Chocolatey features.

![Chocolatey GUI](https://gep13wpstorage.blob.core.windows.net/gep13/2019/01/11/chocolatey-gui.png)

## [chocolatey.org](https://github.com/chocolatey/chocolatey.org)

This repository houses the source code for the Chocolatey Community Repository, i.e. [chocolatey.org](https://chocolatey.org/).
This is an ASP.NET MVC application, and you would use this repository to ask any questions about the website itself.
**NOTE:** You should not use this repository to report problems with a particular Chocolatey package.
That should be done by following up with the package maintainer directly.

## [chocolatey-coreteampackages](https://github.com/chocolatey/chocolatey-coreteampackages)

This repository houses the source code for all the packages on chocolatey.org that are maintained by the [chocolatey](https://chocolatey.org/profiles/chocolatey) user.
This repository is maintained by a dedicated set of volunteers.
It makes use of the [AU](https://github.com/majkinetor/au) updating system.
As a result, all packages in this repository are checked for new versions every 6 hours, meaning that hundreds of packages are constantly kept up to date.

## [chocolatey-cookbook](https://github.com/chocolatey/chocolatey-cookbook)

This repository houses the source code for the [Chef](https://www.chef.io/) Cookbook.
This allows the installation and maintenance of Chocolatey Packages using Chef.
You can find out more information about using this [here](https://docs.chef.io/resource_chocolatey_package.html).

## [cChoco](https://github.com/chocolatey/cChoco)

This repository houses the source code for the Chocolatey DSC Resource.
This allows you to easy install Chocolatey packages while making use of DSC.

## [puppet-chocolatey](https://github.com/chocolatey/puppet-chocolatey)

This repository used to house the official module for working with Chocolatey in Puppet, however, this has since been forked and is now maintained [here](https://github.com/puppetlabs/puppetlabs-chocolatey).
As a result, there should be no need to interact with this repository, and at some point, it will likely be archived.
This module allow the installation of Chocolatey, management of Chocolatey config and features, and also install/update of packages.

## [choco-wiki](https://github.com/chocolatey/choco-wiki)

This repository is a clone of the Wiki that is available [here](https://github.com/chocolatey/choco/wiki).
This allows us to accept contributions to the Wiki in a way that can be administrated.
The contents of this repository are ultimately rendered in the website [here](https://chocolatey.org/docs).
If you want/need to change any documentation in this section of the website, this is where a PR would be raised, or issue created.

## [chocolatey-test-environment](https://github.com/chocolatey/chocolatey-test-environment)

This repository houses the local Chocolatey Test Environment, which is essentially a vagrant setup which allows you to test your Chocolatey packages.
This is the same test environment that is used by the automated moderation process when you submit a package to chocolatey.org.
If you are running into any issues with packages failing when you push them to chocolatey.org, this is the recommended way to figure out what is going on.
For more information about the moderation process for chocolatey.org you can watch this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/35JiK0AdGqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [chocolatey-oneget](https://github.com/chocolatey/chocolatey-oneget)

This repository houses the source code for the OneGet (a.k.a Package Management) Provider for Chocolatey.
If you are interested in helping with this provider, this is where you would start, as we are looking for help with this provider.
Please take note of the warnings in the readme of this repository.

## [shimgen](https://github.com/chocolatey/shimgen)

One of the tools that ships with Chocolatey is called shimgen.
Shimgen is a tool that makes batch redirection not suck so much by generating shims that point to target executable files.
Shimgen is a commercial tool provided by RealDimensions Software, LLC (RDS) for free use with the Chocolatey client.
This repository serves as a location to raise any issues with the shimgen tool.
It does not house the source code for this tool.

## [chocolatey-package-requests](https://github.com/chocolatey/chocolatey-package-requests)

The is no source code in this repository.
Rather, this repository houses a list of issues for software applications that people would like to see added to chocolatey.org.
The idea is that anyone interested in helping with the creation of a Chocolatey package can select one from this list.

## [chocolateytemplates](https://github.com/chocolatey/chocolateytemplates)

The is an older repository that houses a set of warmup templates for creating Chocolatey packages.
As of today, creating a Chocolatey package is best done using the [choco new](https://chocolatey.org/docs/commands-new), so most likely you will not need to use it.

## [simple-server](https://github.com/chocolatey/simple-server)

This repository houses the source code for a website known as the Chocolatey Simple Server, which is also known as chocolatey.server.
This is an application that you can use to house Chocolatey packages locally in your environment, rather than using chocolatey.org.
This is similar to applications like Nexus, Artifactory or ProGet.
However, this is a very basic application, that doesn't have all the features of these other applications.

## [chocolatey-packages-template](https://github.com/chocolatey/chocolatey-packages-template)

If you are interested in maintaining your own Chocolatey Packages, this repository houses a sample for how to setup your own repository.
The idea would be that you fork this repository, and tailor it to your own needs.
This repository has the suggested setup for both ketarin and AU, both of which are described [here](https://chocolatey.org/docs/automatic-packages).
As of today, the main recommendation for automatic packaging is AU, as such, if you are starting your own repository, perhaps best to start with this [template](https://github.com/majkinetor/au-packages-template).

## [package-validator](https://github.com/chocolatey/package-validator)

This repository houses the source code for the package-validator windows service.
This is one of the automatic moderation processes that all packages submitted to chocolatey.org go through.
For more information on this, see the video further up in this blog post.
You would raise issues here if you find any problems with this service.

## [package-verifier](https://github.com/chocolatey/package-verifier)

This repository houses the source code for the package-verifier windows service.
This is one of the automatic moderation processes that all packages submitted to chocolatey.org go through.
For more information on this, see the video further up in this blog post.
You would raise issues here if you find any problems with this service.

## [nuget-chocolatey](https://github.com/chocolatey/nuget-chocolatey)

This repository houses a copy of the NuGet Source Code.
Chocolatey is built on top of the NuGet Client libraries, and as such, it maintains a copy of those libraries, as some changes had to be made to make it work for Chocolatey.
As changes are made in the upstream NuGet Source Code, the relevant changes will be pulled into this repository so that they can be used in Chocolatey.

## [puppet-chocolatey_server](https://github.com/chocolatey/puppet-chocolatey_server)

This repository houses the source code for a Puppet Module that can be used to automatically install/configure the chocolatey.server package.
This means, assuming you are using Puppet, you can very quickly get up and running with this application.

## [puppet-chocolatey-handsonlab](https://github.com/chocolatey/puppet-chocolatey-handsonlab)

This is the source code for a hands on lab that was hosted at PuppetConf 2013 regarding the chocolatey provider.

## [chocolatey-licensed-issues](https://github.com/chocolatey/chocolatey-licensed-issues)

There is no source code in this repository.
Instead, this houses a list of issues that have been raised against the licensed versions of Chocolatey.
This gives a means of allowing people interested in issues raised with the licensed versions to follow when these issues have been resolved.

## [chocobot-gitter](https://github.com/chocolatey/chocobot-gitter)

Within the various Gitter rooms that exist for Chocolatey, for example the [main one](https://gitter.im/chocolatey/choco), there is a Hubot instance running.
This is really just a little bit of fun, as the Hubot instance doesn't actually have any automation capabilities.
This repository contains the source code for the Hubot instance.

## [chocolatey-packages-recipes](https://github.com/chocolatey/chocolatey-package-recipes)

Have you ever had to deal with a really hard application to package as a Chocolatey Package?
Or, have you ever been very happy with the outcome of a package that you created?
If so, and you are willing to share that work with others, this repository is a place to show them off.
At the time of writing, this repository houses examples of house to package Office 365 and Visual Studio 2017.

## [package-cleanup](https://github.com/chocolatey/package-cleanup)

This repository houses the source code for the package-cleanup windows service.
This is one of the automatic moderation processes that all packages submitted to chocolatey.org go through.
For more information on this, see the video further up in this blog post.
You would raise issues here if you find any problems with this service.

## [chocolatey-package-updater](https://github.com/chocolatey/chocolatey-package-updater)

Similar to the shimgen repository, this repository houses an issues list for the chocolatey-package-updater tool.
This tool is closed source, but free to use for maintaining Chocolatey packages.
This is normally used when using the ketarin application to update packages.
**NOTE:** Currently, the recommended way to create automatically updating Chocolatey packages is to use [AU](https://github.com/majkinetor/au).
As a result, it is unlikely, unless you are already using ketarin, that you will need to use this repository.

## [chocolatey.github.com](https://github.com/chocolatey/chocolatey.github.com)

This is a deprecated repository, that no longer is used, and is kept around for reference only.
It used to house the source code for a documentation site for Chocolatey, however, this is replaced with the [docs site](https://chocolatey.org/docs).

## [chocolatey-book](https://github.com/chocolatey/chocolatey-book)

This repository hasn't really seen much traffic yet.
The idea was that this repository would house a walkthrough book on house to use Chocolatey.
If you are interested in helping with this effort, then definitely reach out.

## [chocolatey.web](https://github.com/chocolatey/chocolatey.web)

Prior to making the decision to fork the NuGet Gallery to create the Chocolatey Community Repository, this repository was going to hold the source code for it.
Originally, FubuMVC was being considered as the basis for the Chocolatey Community Repository.
As you can see, it doesn't house much and is probably something we should move into an archive.

## [chocolatey-environments](https://github.com/chocolatey/chocolatey-environments)

This is a reasonably new repository.
The intention is that this will house example vagrant environments that can be used to testing out the various parts of Chocolatey.
The first example environment in this repository shows how to setup a system for automated package internalization in your own environment.

## [NuGet.Server-chocolatey](https://github.com/chocolatey/NuGet.Server-chocolatey)

Simple Server actually needs this repository for building up the binaries that it uses.
This is a Chocolatey-specific fork to add enhancements to that repository so they can be used with Chocolatey Simple Server.

## [chocobot-slack](https://github.com/chocolatey/chocobot-slack)

This is similar to the chocobot-gitter repository.
The only difference being that this Hubot instance is for Slack, rather than Gitter.

## [cla-assistant](https://github.com/chocolatey/cla-assistant)

In order to ensure that everyone that contributes to Chocolatey has signed the CLA that we have in place, we run this CLA assistant.

## [chocolatey-webhooks](https://github.com/chocolatey/chocolatey-webhooks)

chocolatey-webhooks acts as a relay from GitHub and other services to Jira and Trello, so that events on a Github project automatically create and update Jira issues or Trello cards.
This is a work in progress repository, and isn't currently actively being used.
