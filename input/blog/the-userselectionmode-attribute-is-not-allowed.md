Title: The UserSelectionMode attribute is not allowed
Published: 20/7/2010
Tags:
- Installation
- MOSS
- SharePoint
- WSS
---

Yesterday, when trying to deploy a SharePoint Solution onto a server, I was created with an interesting error message:

“The 'UserSelectionMode' attribute is not allowed.”

Now, bear in mind, I had just installed this solution onto my own internal server, and it had gone off without a hitch, so something very strange was going on.

Did some digging, and sure enough, within one of the Features being installed, was installing a set of Site Columns, and one of the fields of that column was using the UserSelectionMode attribute (described [here](http://msdn.microsoft.com/en-us/library/ms437580.aspx)). Very strange, me thinks!!

Some more googling (or in my case binging) turned up the following MSDN support article:

[http://support.microsoft.com/kb/934613](http://support.microsoft.com/kb/934613)

Wow, that sounds exactly like the error that I am currently seeing, but that HotFix was released in 2007, surely that is installed on the server. Long story short, turns out that it wasn’t! 

On checking the server, Service Pack 2 for Microsoft Windows SharePoint Services was not installed, which as described [here](http://support.microsoft.com/kb/953338) rolls up all the updates (including the HotFix that was required) up to February 2009.

**Note to self: **Always check that the server you are installing onto has everything that is required before scratching your head for 2 hours wondering why your package isn’t installing.
