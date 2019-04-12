---
Title: Where did the assemblies from my Global Assembly Cache (GAC) go?
Published: 24/11/2010
Tags:
- development
- error
- gac
- sharepoint
---

I have recently been working on a SharePoint Web Part, and while trying to retract the solution from SharePoint, I got an error message, shown here:

![SharePoint Error Message](https://gep13wpstorage.blob.core.windows.net/gep13/2010/11/24/5e76c325-aa54-4408-9fe5-ca32dc405398.png)

Now, in all honesty, I didn’t think much of this error, because when I checked the files associated with each of the features for the solution they were all gone, and when I tried to open the home page of my SharePoint server, it worked, and everything looked to be ok. However, an additional step after retracting the solution was to remove a couple files from the GAC (yes, I know I need to alter my WSP project to do this for me, but...), on opening the GAC, I was greeted with this:

![Empty GAC in Windows Explorer](https://gep13wpstorage.blob.core.windows.net/gep13/2010/11/24/ee75f8ab-79d9-4c07-b512-09fab0b6cdc0.png)

Where have all my assemblies gone?!? My machine is still running, and there haven’t been any error messages pop up, so I know the files in the GAC must be there, but for whatever reason, they are not being displayed. So, what do you do in situations like this? I don’t know about you, but I always turn to the person next to me to make sure that they are seeing the same thing as me. So I did, I pulled over one of my colleagues, and asked him to look at my GAC and ask if he had seen this before. However, when I did this, and I opened the GAC again, all the files were there!! So I took some stick about being an idiot, and I went on with my day.

Later on though, the same thing happened. I pulled my colleague over again, and proved that I wasn’t dreaming. He agreed that he was seeing the same thing as I was (no need to call the men in white coats yet), but didn’t have a clue what was going on.

So, what do you do when all other avenues have been exhausted? That’s right, you Google it. I found various references to the problem, but nothing concrete, until I found this:

[http://kwizcom.blogspot.com/2009/01/global-assembly-cache-gac-folder.html](http://kwizcom.blogspot.com/2009/01/global-assembly-cache-gac-folder.html)

My initial reaction was, no, that can’t be right. But to my surprise, disabling the “Indexing Service” does appear to have done the trick. I have had the retraction error a few more times since I disabled the service (I really need to look into why that is happening), and each time the GAC has remained in tact.

No idea what was causing this to happen, but seems like this is the solution.
