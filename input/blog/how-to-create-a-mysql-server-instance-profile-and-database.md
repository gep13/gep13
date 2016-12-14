Title: How to create a MySQL Server Instance Profile and Database
Published: 4/1/2013
Tags:
- chocolatey
- configuration
- database
- mysql
- permissions
- schema
- Series
- user
---

# Creating a MySQL Server Instance Profile with a Database and User

Assuming that you have a MySQL Server installation on your machine, it is normally necessary to configure both a Server Instance Profile, and at least one database to be used within that Instance Profile.  The following steps walk through the necessary steps to do this, using an example of creating a Database that could be used for a TeamCity installation.  Some of the steps are specific to this end goal, however, the steps should be generic enough that they can be tailored to your needs.

# Configuration Steps

**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.

1. Assumption is that you already have [MySQL Community Server](http://gep13.me/S91bws) installed
1. Assumption is that you already have [MySQL Workbench](http://gep13.me/WiiHcN) installed
1. Open MySQL Workbench
1. Click on the "New Server Instance" link
1. In the "Specify Host Machine" Window leave as default and click Next
1. In the "Database Connection" Window leave as default and click Next
1. On the "Test DB Connection" Window ensure that all tested passed and click Next
1. Before the next step, we need a Configuration File that MySQL Server can use to instantiate the Server Instance.  The default MySQL Server installation comes with pre-configured configuration files, located at C:\Program Files\MySQL\MySQL Server 5.5 (where 5.5. is the version number of MySQL Server you have installed)
1. Copy the sample Configuration File that you want to have (I chose my-small) to another location on your hard drive.  For simplicity I chose the root of the C:\ drive, and I renamed the file to my.ini.
1. In the "Windows Management" window browse to the location that you copied the configuration file and select it. Press Next.
1. In the "Test Settings" window ensure that all test passed and click Next
1. Click "Continue" when the "Review Settings" pop-up appears
1. In the "Complete Setup" window click Finish
1. Once back at the home page of MySQL Workbench, double-click on the instance that you have just created
1. In the Admin tab, select "Users and Privileges" and click "Add Account"
1. Enter the details for the user that you want to create, in this case I have chosen "teamcity" as the username and entered a password for this user.  Once completed, click Apply.
1. Go back to the home page of MySQL Workbench by clicking the Home tab
1. Double click onto the localhost connection
1. Click the Create Schema button, and provide a name for the schema, I have chosen teamcity, and then click Apply
1. On the "Review SQL Script" window click Apply
1. On the "Apply SQL Script" window click Finish
1. The [recommended Collation and Charset for using TeamCity](http://confluence.jetbrains.net/display/TCD7/Configuring+UTF8+Character+Set+for+MySQL) (the application that is going to be using this database is utf8 - utf8_bin, if you require this, select this in the drop down list and click Apply
1. On the "Review SQL Script" window click Apply
1. On the "Apply SQL Script" window click Finish
1. Return to the Admin screen by clicking on that tab
1. Select "Users and Privileges" and click on the "Schema Privileges" tab and select the User that you want to create a permission for, and then click Add Entry
1. In the "New Schema Privilege Definition" window select which hosts you want this user to be able to access the schema from (I have chosen to limit this to localhost, which is the most secure.  Also, map the user to the schema that you want them to access.  Again in this case, I have chosen the teamcity schema, so there is a mapping between the teamcity user and schema.  Once completed, click OK
1. Once back at the main window, click "Select "ALL" to give this user all database permissions (you may want to only select certain options, depending on what you require).  Once you are happy, click "Save Changes"

You can see screenshots of each of these steps in the galley at the bottom of this blog post.

# Configuration Screenshots

[gallery ids="1772,1773,1774,1775,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797"]
