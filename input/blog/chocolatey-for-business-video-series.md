---
Title: Chocolatey in the Organisation Video Series
Published: 24/8/2020
Tags:
- chocolatey
- organisation
- c4b
- choco
- video
- youtube
---

## Video Series

I quite often get asked questions around how to set up Chocolatey in the context of an Organisation, i.e. How do I create my own repository?  How can I internalize packages into my own feed?  How can I install Chocolatey offline?  And various others over the years.  A lot of this is already documented on the Chocolatey website, however, it can't always be the easiest to find, something that we are working on.

To help alleviate some of this, I decided to create a series of videos, where I would start with literally nothing installed, only the base operating system, and from there, start to create a collection of servers, all with the aim of setting up a best practices deployment of Chocolatey within an Organisation.

This series of videos now exists as a [public playlist on YouTube](https://www.youtube.com/playlist?list=PL84yg23i9GBjc1UBm8llOk_miWVqWk7kl) and I have also captured the details of the series in the remainder of this blog post.

Please reach out if you have any questions, or if there are areas that haven't been covered in the series.

### Overview

This is the first in a series of videos which is going to walk through setting up Chocolatey for usage within an Organisation.  This is based on the [documentation]https://chocolatey.org/docs/how-to-setup-offline-installation) on chocolatey.org.

This introductory video talks through what we are going to be doing in this series, and setting the scene for how things are going to work.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YDmMB83qV5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Prepare for internal use

In this video, we look at the initial setup/download of all the components necessary to get Chocolatey up and running.

The details of what was carried out in this video can be found in the [documentation](https://chocolatey.org/docs/how-to-setup-offline-installation#exercise-0-prepare-for-internal-use) on chocolatey.org.

To summarise, we installed Chocolatey on our workstation machine, and used Chocolatey Package Internalizer to download and internalize some packages that we will use in later parts of the Organisational setup.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zh_0eNSNBd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Internalize and install bginfo

In this video, we look at internalizing and installing the bginfo utility.

But, as this video series expands and has multiple machines being used, being able to quickly identify which machine is which, based on the information displayed on the desktop will be useful.  To get this internalized, after a small hiccup, we used the Chocolatey for Business feature called Package Internalizer, which gave us a package that can be installed completely offline, without the need to reach out to the internet.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2CA6HCmEPRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Install Chocolatey without network access

In this video, we look at how you can install Chocolatey on a machine that doesn't have an internet connection.

This process is [documented](https://chocolatey.org/docs/how-to-setup-offline-installation#exercise-1-optional-set-up-chocolatey-installation-on-a-machine-without-network-access) on chocolatey.org.

The machine in question is the one which is going to be our Nexus Repository Server.  We start by copying the setup files from our workstation machine, and then edit the offline installation script to perform the installation fully offline.  We ensure that this is the case by disabling the network card on the machine.

<iframe width="560" height="315" src="https://www.youtube.com/embed/r4EgGsLvFog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Install and configure Nexus

In this video, we look at installing and configuring a Nexus Repository.

We start by downloading the nexus-repository package, and performing the installation.  Once that is done, we set up two nuget feeds (test-repository and prod-repository) which will be used later within our other configuration.  We also set up the NuGet Authentication Realm, and add the sources to our Chocolatey configuration, to make sure that everything is working as expected.

In this video, I mention [another video](https://www.youtube.com/watch?v=UehkG1VHtz0) where I set up Nexus as a caching repository (using a proxy feed) for chocolatey.org.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7RX3r3dvz8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Push packages to Nexus Repository

In this video, we looked at moving all the nupkg's which we had in a local source (i.e. c:/choco-setup/packages) into our newly created Nexus Repository.

This required a little bit of setup in terms of opening the required firewall port, and also setting up our API Key within Chocolatey, but with that done, we were able to push all packages to both the Test, and Production Repositories within Nexus.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1tyD6Kgh6VQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Create a package for Chocolatey license

In this video, we look at creating a Chocolatey Package for the Chocolatey License file.

In previous videos, we used the local Chocolatey installation script to copy the Chocolatey License file to the correct location.  By using a Chocolatey package to do this work it makes it very easy to install the license on client machines, and also makes it very easy to upgrade when a new license is required.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hl6q3ke3CX0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Install Chocolatey on client machines

In this video, we look at what is necessary to complete the installation of Chocolatey onto a client machine, using all of the new infrastructure (Nexus, Jenkins, etc) that we now have in place.  This takes the form of a ClientSetup.ps1 file, which can be executed on any machine, which will:

- Install Chocolatey
- Configure Chocolatey with sources, etc
- Install required packages

The content of this video covers the [documentation](https://chocolatey.org/docs/how-to-setup-offline-installation#exercise-6-installing-chocolatey-on-client-machines) that is on the Chocolatey website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jiv34nkh5pg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Install Jenkins

In this video, which is part of a series of videos focusing on using Chocolatey within an Organisation, we look at what is required to download and install Jenkins, a CI/CD platform, which will allow us to automate the usage of Chocolatey Package Internalizer.

The content of this video covers the [documentation](https://chocolatey.org/docs/how-to-setup-internal-package-repository) that is on the Chocolatey website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TCdZFKk128k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Configuring Jenkins Part 1

In this video, we look at configuring our new installation of Jenkins.  This will include the setup of three jobs within Jenkins which will perform the work of syncing between our internal repository and the Chocolatey Community Repository, as well as allowing the internalization of new packages into our internal repository.

This process is broken into two videos, since it takes a little while to setup, and we also ran into a small issue with the documentation (which has since been rectified) which meant things took a little longer than expected.

The content of this video covers the [documentation](https://chocolatey.org/docs/how-to-setup-internal-package-repository) on the Chocolatey Website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XiyzBIofDiE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Configuring Jenkins Part 2

In this video, we look at configuring our new installation of Jenkins.  This will include the setup of three jobs within Jenkins which will perform the work of syncing between our internal repository and the Chocolatey Community Repository, as well as allowing the internalization of new packages into our internal repository.

This process is broken into two videos, since it takes a little while to setup, and we also ran into a small issue with the documentation (which has since been rectified) which meant things took a little longer than expected.

The content of this video covers the [documentation](https://chocolatey.org/docs/how-to-setup-internal-package-repository) on the Chocolatey Website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/erF1Er7p12E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### CCM Overview

In this video, we have a quick recap of what we have completed so far in this series, and then look ahead at what still needs to be done to setup and install Chocolatey Central Management.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rn5RrMkYEtQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Set up CCM Database

In this video, we perform the steps that are necessary to install the Chocolatey Central Management Database.  Using SQL Server Management Studio, we verify that the schema and seed data is correctly deployed.  Installing the database is the first of three components that need to be installed in order to get started with CCM.

The content of this video covers what is [documented](https://chocolatey.org/docs/central-management-setup-database) on the Chocolatey website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/U39o6qzyigQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Set up CCM Service

In this video, we perform the steps necessary to install the Chocolatey Central Management Service.  This is the second CCM component, and after getting the CCM Database installed, we can move onto installing the Windows Service.

The content of this video covers what is [documented](https://chocolatey.org/docs/central-management-setup-service) on the Chocolatey website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/066fhfDNMpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Set up CCM Web

In this video, we perform the steps required to install the Chocolatey Central Management Website.  This is the last component in the set of three that is required to run CCM.  We finish the video by logging into the website and changing the default password, and make sure that sending of email is working (for this we make use of the papercut application).

The contents of this video cover what is [documented](https://chocolatey.org/docs/central-management-setup-web) on the Chocolatey website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vxhi0EJ5ZSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Set up client for CCM

In this video, we look at enrolling a client machine in our environment into both Chocolatey Central Management Reporting and Deployments.

This is as simple as running three Chocolatey commands, and once completed, and ensured that this is working, we add these commands into our ClientSetup.ps1 file, so that future client installations will automatically be added into Chocolatey Central Management.

The content of this video covers what is [documented](https://chocolatey.org/docs/central-management-setup-client) on the Chocolatey website.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XrdaqSUgUgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Creating CCM Deployments

In this video, we look at creating some CCM Deployments.

This uses the new Deployments functionality in Chocolatey Central Management 0.3.0.  We create two different deployments.  The first it to remediate some issues which we have found across the 7 machines within our environment, namely that the Chocolatey GUI package is outdated on one machine, and is also installed on a machine that it shouldn't be.  These issues are both fixed in the same deployment.  The second deployment is to installed the Notepad++ package on all the machines in the environment.

In both of these deployments we are able to watch in real time as the different steps are executed, and to see the logs from the installations.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jpdz0SDvD4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>