---
Title: How to upgrade TeamCity
Published: 7/2/2013
Tags:
- TeamCity
- Upgrade
---

# It's a snap!

If you have decided to [install your own instance of TeamCity](http://gep13.me/VAeRiX), then it is your responsibility to ensure that it is kept up to date.  [JetBrains](http://www.jetbrains.com/) have a fairly aggressive [release cadence](http://confluence.jetbrains.com/display/TW/Previous+Releases+Downloads), with updates coming out every couple of months.  This is great, as you get a host of new features and bug fixes on a regular basis.

When performing an upgrade, the most important thing to do is to back up the database and configuration settings.  Luckily, this is a built-in process within the administration section of TeamCity.

This blog post steps through the full upgrade process.

# Installation Steps

**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.

These instructions are specific to version 7.1.3 of TeamCity, however, later versions will likely follow very similar steps.  In addition, these installation instructions will install both the TeamCity Server and Build Agent onto the same machine.  Ideally, you would want to have a separate Build Agent Machine.

You can see screenshots of each of these steps in the galley at the bottom of this blog post.

1. Assumption is that you already have [TeamCity](http://gep13.me/VAeRiX) installed (otherwise, why would you be looking to upgrade it :-)
1. Assumption is that you have already [downloaded the new version of TeamCity](http://www.jetbrains.com/teamcity/download/index.html), in this case 7.1.4.
1. Log into TeamCity using an account that has Administrator privileges
1. Click on the Backup link near the bottom left hand corner
1. When the Run Backup Tab opens, click on "Start Backup"
1. The backup should complete successfully
1. Double Click the installation *.exe which was downloaded in Step 2 above
1. At the first step in the installation wizard simply click Next
1. Read the License Agreement and assuming you are happy with it, click “I Agree”
1. In the “Choose Install Location” window, assuming you are happy with the default installation folder, simply click Next, otherwise change it first
1. In order to install the latest version of TeamCity, you have to first uninstall the current version.  Click "Next"
1. On this screen simply click Next once the current installation has been located
1. Typically, since you are doing an upgrade, you want to keep both the build configuration and working directory, but the log files can be removed.  Click Uninstall
1. The un-installation will continue
1. After a short period, the un-installation will complete
1. In the “Choose Components” window choose the components that you want to install.  As already mentioned, we will be installing both the Server and Build Agent on one server.  Click Next
1. In the “Specify server configuration directory” window assuming you are happy with the default location click Next, otherwise change it first
1. The main portion of the installation will start now
1. The “Configure Build Agent Properties” window will then open, giving you the opportunity to add/edit build agent properties.  For now, you can leave this as the default.  If needed, this can be changed later.  Click Save.
1. Simply click OK on the “TeamCity Build Agent Properties” pop-up
1. In the “Select Service Account for Server” window decide what user account you want to run the TeamCity Server, I chose to use the SYSTEM account.  Click Next
1. In the “Select Service Account for Agent” window decide what user account you want to run the TeamCity Build Agent, I chose to use the SYSTEM account.  Click Next
1. In the “Services” window, choose to start both the Server and Build Agent Services, and click Next
1. In the final screen, ensure that the option to open TeamCity Website after exit is checked and click Finish.
1. A web page will open saying “TeamCity is starting”
1. The login screen will then be presented
1. On logging in, you will see the latest version number displayed

# Installation Screenshots


<div id="flickrembed"></div><small style="display: block; text-align: center; margin: 0 auto;">Powered by <a href="https://flickrembed.com">flickr embed</a>.</small>

<script src="https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=72157676537769180&sort=0&by=album&theme=default&scale=fit&skin=default&id=5850544461b40"></script>