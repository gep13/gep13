---
Title: An interesting Windows Phone 7 build error
Published: 12/10/2012
Tags:
- appmanifestinvalidauthor
- build error
- character limit
- wmappmanifest
RedirectFrom: blog/an-interesting-windows-phone-7-build-error/index.html
---

While creating the sample demos for my Windows Phone 7 presentation at DDDNorth, I ran into an interesting error:

![Error List](https://gep13wpstorage.blob.core.windows.net/gep13/2012/10/12/2012-10-09_1936.png)

> “Manifest validation failed: AppManifestInvalidAuthor”

To put it into perspective, this was a brand new Windows Phone 7 application, fresh out of the box, with no changes made by me.  I had decided to build the project (as I periodically do) just to make sure that everything was fine before continuing, and I was welcomed with the above.

Based on the description, I had a look in the WMAppManifest file, but I couldn't find anything obviously wrong:

![WMAppManifest.xml file](https://gep13wpstorage.blob.core.windows.net/gep13/2012/10/12/2012-10-09_1937.png)

A quick Google later, and I had stumbled upon this [blog post](http://digitaltransfusion.net/2010/09/21/wp7-manifest-validation-fails/) by [@ryanplemons](http://twitter.com/ryanplemons) which answered the question.  Turns out there is a limit on the number of characters that you can have in the Publisher, Author and Title attributes of the App node:

- Publisher = 50 Characters
- Author = 50 Characters
- Title = 80 Characters

The naming convention that I had adopted for the Demo Applications that I was creating was pushing me over this limit for this application.  A quick change to these attributes and the build error was gone.

In all the Windows Phone 7 applications that I have created to date, this was the first time that I had seen this error.  Hopefully this will help someone in the same situation, thanks Ryan!
