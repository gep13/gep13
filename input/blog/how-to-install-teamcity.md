---
Title: How to install TeamCity
Published: 4/1/2013
Tags:
- chocolatey
- teamcity
RedirectFrom: blog/how-to-install-teamcity/index.html
---

# What is TeamCity?

Just in case you didn't know...

> TeamCity is a user-friendly continuous integration (CI) server for professional developers and build engineers, like ourselves. It is trivial to setup and absolutely free for small teams.

If you want to find out more information about TeamCity, you can find it [here](http://www.jetbrains.com/teamcity/index.html).

The following blog post walks through the steps to get TeamCity installed., however, at the end of this blog post there will still be other items that need to be configured, but these issues will be the topics of other blog posts.

Although out of the box TeamCity uses an internal database based on the HSQLDB database engine, if you are planning on using a TeamCity instance for Production purposes, it is [strongly recommended](http://confluence.jetbrains.net/display/TCD7/Setting+up+an+External+Database) that you set up an external database connection for it to use.  To that end, this blog post uses a MySQL Database as the external connection for TeamCity.

# Installation Steps

**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.

These instructions are specific to version 7.1.3 of TeamCity, however, later versions will likely follow very similar steps.  In addition, these installation instructions will install both the TeamCity Server and Build Agent onto the same machine.  Ideally, you would want to have a separate Build Agent Machine.

You can see screenshots of each of these steps in the galley at the bottom of this blog post.

1. Assumption is that you already have [MySQL Community Server](http://gep13.me/S91bws) installed
1. Assumption is that you already have [MySQL Workbench](http://gep13.me/WiiHcN) installed
1. Assumption is that you already have configured a [Profile Instance, with a database and user](http://gep13.me/Z3jaBI) that can be used by the TeamCity Server
1. Download the [latest version of TeamCity from the JetBrains website](http://www.jetbrains.com/teamcity/download/index.html) then double-click the .exe and click Run
1. At the first step in the installation wizard simply click Next
1. Read the License Agreement and assuming you are happy with it, click "I Agree"
1. In the "Choose Install Location" window, assuming you are happy with the default installation folder, simply click Next, otherwise change it first
1. In the "Choose Components" window choose the components that you want to install.  As already mentioned, we will be installing both the Server and Build Agent on one server.  Click Next
1. In the "Specify server configuration directory" window assuming you are happy with the default location click Next, other change it first
1. The main portion of the installation will start now
1. In the "Installation Complete" windows, specify the port that you want TeamCity to run under.  I have other services running on this server, so I have chosen to use port 8080.  Choose something that won't conflict, and then click Next
1. The "Configure Build Agent Properties" window will then open, giving you the opportunity to add/edit build agent properties.  For now, you can leave this as the default.  If needed, this can be changed later.  Click Save.
1. Simply click OK on the "TeamCity Build Agent Properties" pop-up
1. In the "Select Service Account for Server" window decide what user account you want to run the TeamCity Server, I chose to use the SYSTEM account.  Click Next
1. In the "Select Service Account for Agent" window decide what user account you want to run the TeamCity Build Agent, I chose to use the SYSTEM account.  Click Next
1. In the "Services" window, choose to start both the Server and Build Agent Services, and click Next
1. In the final screen, ensure that the option to open TeamCity Website after exit is checked and click Finish.
1. You will then be taken to the default start screen, which as mentioned will create the internal database that TeamCity would normally use by default.  Go ahead and click Proceed, we will then begin editing the configuration to use a MySQL Server Database.
1. A web page will open saying "TeamCity is starting"
1. Once this page reloads, and show the license agreement page, open windows explorer and navigate to the configuration directory, the default is C:\ProgramData\JetBrains\TeamCity
1. Open the services snap-in and stop both the TeamCity Build Agent and TeamCity Server services
1. Hit the Start button
1. Type "services.msc" and press Enter
1. Find each named service and click stop
1. Back to Windows Explorer, navigate into the configuration folder.  Find the database.mysql.properties.dist file.  Copy and paste this file, and rename the newly created file as database.properties (NOTE: This name is very important.  Compare to the screenshot below to ensure it is correct.
1. Open the database.properties file and notice the section that you have to update
1. Make the necessary changes and save the file (NOTE: I have added an extra configuration line to use UTF-8 character encoding, which if you followed the [Profile Instance, with a database and user](http://gep13.me/Z3jaBI) is what your database will use
1. Open an internet browser and download the latest JDBC driver for MySQL.  The main download site can be found [here](http://dev.mysql.com/downloads/connector/j/).
1. Browse to where you downloaded the driver and extract the contents of the download.  Find the .jar file and copy this into the lib folder within the TeamCity configuration directory.  Typically C:\ProgramData\JetBrains\TeamCity\lib\jdbc
1. Open the services snap-in and start both the TeamCity Server, and TeamCity Build Agent services
1. Hit the Start button
1. Type "services.msc" and press Enter
1. Find each named service and click start
1. Open an internet browser and open the TeamCity home page.  As per these installation instructions, that would be http://localhost:8080, but the port may be different depending on what you selected.  You will get a warning about the Database being empty.  That is to be expected, as we have only just set this up, and it doesn't contain anything
1. Click the link entitled "I'm a server administrator, show me the details".  We need to locate the authentication token, before TeamCity will let us continue with the setup.  To do this, we have to open the log file for the TeamCity instance
1. Open windows explorer, and navigate to the TeamCity installation folder, typically this is C:\TeamCity and find the logs folder, and in that folder, the teamcity-server.log.  Open this file.
1. Scroll to the end of this log file, and the last line in the log file should contain the authentication token.  Copy this token to your clipboard
1. Go back to the internet browser, and paste the token and click Confirm.  This will take you to the "TeamCity Database Creation" window.  Confirm that the details are correct, and click Proceed
1. TeamCity will then create the database and finish configuration setup
1. If you are interested, you can open MySQL Workbench and look at all the tables that have just been created
1. Back in the internet browser, you should be presented with the TeamCity license agreement again.  Read through this, and when happy click the "Accept license agreement" check box, and then click Continue
1. Enter the details for an administrator account that you will use to administer this TeamCity instance and click Create Account
1. Job done!

You can see screenshots of each of these steps in the galley at the bottom of this blog post.

There are still steps remaining in terms of setting up projects, build configurations, and other TeamCity settings, but these will be topics for other blog posts.

# Installation Screenshots

<div id="flickrembed"></div><small style="display: block; text-align: center; margin: 0 auto;">Powered by <a href="https://flickrembed.com">flickr embed</a>.</small>

<script src="https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=72157674079120783&sort=0&by=album&theme=default&scale=fit&skin=default&id=5850544461b40"></script>