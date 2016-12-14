---
Title: Use a Windows Azure Blob Storage account with your WordPress blog
Published: 8/2/2012
Tags:
- Azure
- Blob
- Storage Account
- WordPress
---

Hot on the heels of the [Windows Azure Bootcamp](http://www.gep13.co.uk/blog/windows-azure-bootcamp-uk-tech-days/) that I did this weekend, I decided that I wanted to do _something_ with Windows Azure, that way I could practice what I had learnt, and begin to increase my exposure to what Windows Azure brings to the table. I decided that I wanted to use the Windows Azure Blob Storage to host all of the static content of my WordPress Blog, thus, _hopefully, _increasing the performance of my blog. What follows is a list of instructions for setting up your WordPress Blog, as well as your Windows Azure account, and also your domain registrar (in order to apply a shortened domain name to your Blob Storage Account).

This article breaks down into three main parts:

1. Set up your Blob Storage Account in the Windows Azure Portal, along with DNS settings for your Domain Registrar
1. Configure your Blob Storage Account using CloudXplorer
1. Set up a WordPress plugin to communicate with your Blob Storage Account

So, let's get started!

# Setting up Windows Azure

1. The first thing that you are going to need is a Windows Azure Account. If you don’t already have one, there are a couple of ways that you can get one:
1. [Windows Azure 3 Month Free Trial](https://www.windowsazure.com/en-us/pricing/free-trial/)
1. [MSDN Subscribers can get Free Benefits](https://www.windowsazure.com/en-us/pricing/member-offers/msdn-benefits/)
1. [A number of different paid subscriptions](https://www.windowsazure.com/en-us/pricing/purchase-options/)
1. Once you have logged into your Windows Azure account, you will be presented with a huge selection of options, the scope of which are far out with the intention of this blog post, as a result, only the specific options to enable Blob Storage will be discussed here. Using the picture to the below as a guide, first select _Hosted Services, Storage Accounts & CDN, Storage Accounts, _then _New Storage Account._  
[![Create_New_Storage_Account](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Create_New_Storage_Account_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Create_New_Storage_Account.png)
1. This will open the _Create a New Storage Account_dialog, where you will need to provide the details for the Storage Account that you would like to create.
[![Create_a_Storage_Account](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Create_a_Storage_Account_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Create_a_Storage_Account.png)The first of which is the URL that you would like to use. This needs to be unique across the entire Windows Azure infrastructure so you may need to get a little creative with your choice of name. You will be prompted with an error message if you enter something that isn’t allowed.  
[![Error_-_don't_use_capitals](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Error_-_dont_use_capitals_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Error_-_dont_use_capitals.png)
The next piece of information is the _region or affinity group_ that you want your Blob Storage Account to be located. Microsoft has several Data Centers located across the world, including Anywhere US, South Central US, Anywhere Europe, West Europe, Anywhere Asia, Southeast Asia, East Asia, North Central US, North Europe. Simply pick the region that makes most sense to your location.
Click OK.
1. Your Storage Account will now get created. There will be a slight delay as your Account is first “Creating…”[![Storage_Account_Creating](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Creating_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Creating.png)Then “Resolving DNS…”[![Storage_Account_Resolving_DNS](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Resolving_DNS_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Resolving_DNS.png)But the end result will be your Storage Account will be “Created”[![Storage_Account_Created](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Created_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Created.png)
1. If you select your new Storage Account, on the right hand side of the Windows Azure Portal you will see all of the properties for this new Storage Account:[![Storage_Account_Properties](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Properties_thumb.png)
](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Storage_Account_Properties.png)The main ones of interest are the “Keys”, which we will use later to connect to the Blob Storage Account from WordPress, and the Blob URL. The Blob URL is the publicly routable URL for accessing your Blob Storage account. Any files you upload to the Blob Storage Account will be accessible using this URL as a prefix. As you can see though, this URL is slightly long, and when used in the context of existing website, say gep13.co.uk, it bears no relation to it. However, this is something we can change by applying a Custom Domain to the Storage Account.
1. Select your Storage Account, and then press _Add Domain_, as shown below:[![Add_Custom_Domain](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Add_Custom_Domain_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Add_Custom_Domain.png)
1. In the _Add a Custom Domain _Dialog, enter the domain name that you would like to use for this Storage Account. In my case, I wanted to use cdn.gep13.co.uk:[![Add_Custom_Domain_Name](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Add_Custom_Domain_Name_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Add_Custom_Domain_Name.png)Press OK.
1. At this point, Windows Azure will begin to create the Custom Domain name:[![Custom_Domain_Name_being_created](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Custom_Domain_Name_being_created_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Custom_Domain_Name_being_created.png)
1. Once the initial process for the Custom Domain creation has completed, you will then have to validate that the domain name that you want to use actually belongs to you:[![Validate_Custom_Domain_Name](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Validate_Custom_Domain_Name_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Validate_Custom_Domain_Name.png)In order to do this, you will need to log into your Domain Registrar and alter the DNS Records for your domain to include a new CNAME record. The details for this record are provided for you, as per the above screenshot, so simply enter these details into your Domain Registrar site. As an example, this is what I had to do:[![Add_Verify_Domain_to_Registrar](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Add_Verify_Domain_to_Registrar_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Add_Verify_Domain_to_Registrar.png)Depending on how your Domain Registrar user interface works, remember to include the “.” at the end of the Canonical name, otherwise the DNS Record will not be accepted. Your new DNS record will take a while to propagate across the internet, so in the meantime, simply close the above _Validate Custom Domain_ window, and you will see that your Custom Domain creation is in a _Pending _state:[![Custom_Domain_Name_Pending](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Custom_Domain_Name_Pending_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Custom_Domain_Name_Pending.png)

At this point, you might want to jump to Step 11.

1. Once enough time has passed (I waited a couple of hours) return to the Windows Azure portal and select your domain and click Validate Domain:[![Validate_Custom_Domain_Name_001](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Validate_Custom_Domain_Name_001_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Validate_Custom_Domain_Name_001.png)If everything worked correctly you will see:[![Domain_validated](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Domain_validated_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Domain_validated.png)However, depending on how long you waited, you might see this:[![Validation_Failed](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Validation_Failed_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Validation_Failed.png)

If you do, don’t worry, this simply means that the DNS Settings haven’t finished propagating, so try again later.

1. The only other thing left to do on this side of things is to create another CNAME record which will do the work of redirecting any requests to your Custom Domain, to your Blob Storage Account. All this means is that you need a CNAME record that has something like the following:[![CNAME_for_redirect](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/CNAME_for_redirect_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/CNAME_for_redirect.png)This is a redirect from the Custom Domain Name that you created, to the Blob URL for your storage account that was highlighted in Step 5 above. In order to say time, you might want to think about creating this CNAME record at the same time as you create the verify CNAME, that way you won’t have to wait a second lot of propagation time.

# configure your Blob Storage Account

1. Now that the Blob Storage Account has been created, and Custom Domain established, we have a little bit of work to do in order to first configure the Blob Storage Account for use. It is easiest to do this using a 3rd Party Tool. There are a couple of main ones out there, the first being from [Redgate](http://cerebrata.com/) (who acquired Cerebrata) and you can get a trial version of their software, and also [CloudXplorer from ClumsyLeaf](http://clumsyleaf.com/products/cloudxplorer). For the purposes of this walk through, I will be using CloudXplorer, so go ahead and get that installed.
1. Open CloudXplorer and select File | Accounts and the _Manage accounts_window opens:[![Manage_Accounts](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Manage_Accounts_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Manage_Accounts.png)
1. Click the New… button and then select Windows Azure Account… and the _Windows Azure account _window will open:  
[![New_Windows_Azure_Account](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/New_Windows_Azure_Account_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/New_Windows_Azure_Account.png)
1. Using the information from step 5 above, enter the details of the Blob Storage Account that we created, where “Secret Key:” equates to the “Primary Access Key” (simply click View button to bring this up) and Name: is the Name of your Blob Storage Account, i.e. in my case gep13wpstorage.
[![Windows_Azure_Account_Window](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Windows_Azure_Account_Window_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Windows_Azure_Account_Window.png)
1. With the account in place, the first thing we need to do is to create a container within the Blob Storage Account. This will let us compartmentalise files into the correct location. Right click in the right hand window of CloudXplorer and select New | Container…[![CloudXplorer_Create_Container](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/CloudXplorer_Create_Container_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/CloudXplorer_Create_Container.png)
1. In the _Create directory/container _window, enter the name for your container. I went for “myuploads”.
[![Create_New_Container](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Create_New_Container_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Create_New_Container.png)
1. Now we need to set the properties of the container to allow public access. Right click on the container that you just created and select Properties.[![Container_Properties](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Container_Properties_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Container_Properties.png)
1. In the myloads Properties window, select the Policies tab and then select "_Full public read access_” in the Access control drop down list, then select ok.[![Container_Policies](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Container_Policies_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/Container_Policies.png)

# configure WordPress

At this point, you have a number of options to set up your WordPress site to use Windows Azure as it’s repository for static content. Microsoft have actually released their own WordPress plugin which does just that. If you are interested, you can find this [here](http://wordpress.org/extend/plugins/windows-azure-storage/). I ended up not using this particular plugin. As far as I could see, the onus was on you to manually move the files into your Azure container. Now, this isn’t hard to do, using the CloudXplorer I showed earlier, files can easily be copied into the container, but I wanted something a little more integrated.

I ended up using the excellent W3 Total Cache plugin which you can find [here](http://wordpress.org/extend/plugins/w3-total-cache/). Again, the complete setup and configuration of this plugin is out with the scope of this particular blog post (I might write another one on this), however, the main thing to know is that there are a number of potential endpoints for this plugin including:

[![W3TC_CDN_Options](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/W3TC_CDN_Options_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/W3TC_CDN_Options.png)

As you will see, I have chosen Microsoft Azure Storage. From there, you can then specify the options for connecting to Windows Azure:

[![CDN_Settings](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/CDN_Settings_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/CDN_Settings.png)

Including the Custom Domain name which we set up earlier (if you can remember that far back).

With that in place, you can then use the W3 Total Cache plugin to move all the necessary files into your Blob Storage Account. You can simply click on each of the required buttons:

[![General_Settings](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/General_Settings_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/02/General_Settings.png)

Then, with all the files uploaded, and W3 Total Cache activated, it will rewrite all of the URL’s for all of your static content to come from your Blob Storage Account. Feel free to take a look and see this in action by right clicking on the view source of this page, and searching for cdn.gep13.co.uk.

And that, as they say, is that! If you have any questions, please feel free to get in touch.
