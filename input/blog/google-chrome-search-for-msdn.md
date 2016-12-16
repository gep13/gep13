---
Title: Google Chrome Search for MSDN
Published: 24/1/2011
Tags:
- Google
- Google Chrome
- MSDN
- Search
---

Like most developers, on a day to day basis I consult the online MSDN library in order to look at a class that I need to find out more information about. Whether it is a Property that I need to find out about, or an Event that is raised by the Class, or a Method that I need to call on the class.

In order to optimise the time that it takes to do that search, like many others, I use Google. This is made even easier with Google Chrome, and the introduction of its OmniBox. However, searching simply on the class name, such as “HttpContext” or “String” doesn’t always cut it, as you will get a wealth of other results returned. What you need to do is to add additional information to refine that search, such as “HttpContext Class MSDN”. In doing this, you (normally) always get the result as the first result. However, what do you need to do after that? You need to click on the link. How tedious is that?

The solution?

Combine the power of Google Chrome with the power of the Google Search Engine and it’s “I’m Feeling Lucky” search. Here are the steps:
  
1. Open Google Chrome 
1. Click the Options spanner at the top right, and select “Options”        

    ![Options Menu](https://gep13wpstorage.blob.core.windows.net/gep13/2011/1/24/image.png)

1. Select the “Basics” tab, and click the “Manage” button        

    ![Manage Default Search](https://gep13wpstorage.blob.core.windows.net/gep13/2011/1/24/image1.png)

1. Click the “Add” button        
       
    ![Add Search Option](https://gep13wpstorage.blob.core.windows.net/gep13/2011/1/24/image2.png)

1. In the dialog box that opens, enter the following values:        
       
    - MSDN Search         
    - msdn         
    - [http://www.google.co.uk/search?btnI=I'm+Feeling+Lucky&q=%s+Class+MSDN](http://www.google.co.uk/search?btnI=I'm+Feeling+Lucky&q=%s+Class+MSDN)         
    ![Edit Search Engine](https://gep13wpstorage.blob.core.windows.net/gep13/2011/1/24/image3.png)    
       
    All that is being done here is using the search string that was used early, i.e. HttpContext Class MSDN (you can replace this with anything that you find more appropriate, but this works for me), and using a %s instead of HttpContext to allow the replacement of it with a Class name that we are actually interested in.         

1. Click Ok 
1. Click Close 
1. Click Close 
1. Go into the OmniBox, and type msdn, followed by the tab key (this will initiate the custom msdn search that we just created, then simply type the class name that you are interested in, i.e. HttpContext        
       
    ![New Search in action](https://gep13wpstorage.blob.core.windows.net/gep13/2011/1/24/image4.png)

1. Hit enter, the HttpContext Class on the MSDN Library page opens up. 
 **_Suggested Alternatives_**  If you are always interested in the Properties for a class, you could modify the search string to be “HttpContext Properties MSDN”. This should then take you straight to the Properties page for that class. The same is true if you want the Events, Methods, or the Constructor.  The trick is making the search string unique enough to return the entry that you are after as the first result (which isn’t all that difficult. This technique means that you don’t then have to enter that search string each time.      