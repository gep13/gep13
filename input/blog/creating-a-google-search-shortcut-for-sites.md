---
Title: Creating a Google search shortcut for sites
Published: 31/1/2012
Tags:
- Custom Enginer
- Google
- Google Chrome
- Search
---

I have just read a very interesting blog post from Barry Mooring regarding using the [Web Applications website](http://webapps.stackexchange.com/) when you have questions about a particular application. In case you missed it, you can see the blog post [here](http://blog.codingbadger.com/blog/2012/january/web-applications-you-are-looking-in-the-wrong-place/).

Barry makes a really good point about tailoring the place that you are searching for an answer to your question, to the place that will most likely have the answer to your question, rather than simply a blanket Google search. This in itself is a great idea.

However, there is one thing that I think is missing from Barry’s post though (sorry Barry, in no way a criticism), and that is first of all going to the Web Applications website to then do your search. Personally, I would prefer to set up a Custom Search Engine within Google Chrome, rather than first navigating to the site. I do this all the time for things that I find myself doing over and over again. For instance, I have a Custom Google Search Engine for [finding information on MSDN](http://www.gep13.co.uk/blog/google-chrome-search-for-msdn/) (NOTE: This blog post needs updating to the latest version of Google Chrome, but you get the idea). And the same thing can be done for Web Applications:

![Custom Google Search](https://gep13wpstorage.blob.core.windows.net/gep13/2012/1/31/Custom_Google_Search.png)

Here I have added a Search Engine with the following settings:

  <table cellpadding="2" cellspacing="0" border="0" width="628" ><tbody >       <tr >         
<td width="200" valign="top" >Name:
</td>          
<td width="426" valign="top" >Web Applications
</td>       </tr>        <tr >         
<td width="200" valign="top" >Keyword:
</td>          
<td width="426" valign="top" >webapp
</td>       </tr>        <tr >         
<td width="200" valign="top" >URL:
</td>          
<td width="426" valign="top" >[http://webapps.stackexchange.com/search?q=%s](http://webapps.stackexchange.com/search?q=%s)
</td>       </tr>     </tbody></table>

This means that in the Google Chrome Omnibox I can simply type:

> webapp <then the tab key> "What you want to search for” <then press the enter key>

![Web Application Search](https://gep13wpstorage.blob.core.windows.net/gep13/2012/1/31/Web_Application_Search.png)

This has the benefit of doing the search, and the navigation to the website in one action, rather than two.

Personally, this is a much better flow for me, and one that I use on a daily basis. I highly recommend that you sit back and look at things you are doing over and over again, and look for ways that you can optimize this.

For sites that don’t have a their search page available on the query string, you can use Google’s built in function to limit the search to a specific domain. For instance, over at VBForums, I can use the following Custom Search Engine:

 <table cellpadding="2" cellspacing="0" border="0" width="817" ><tbody >     <tr >       
<td width="200" valign="top" >Name:
</td>        
<td width="615" valign="top" >VBForums
</td>     </tr>      <tr >       
<td width="200" valign="top" >Keyword:
</td>        
<td width="615" valign="top" >vbforums
</td>     </tr>      <tr >       
<td width="200" valign="top" >URL:
</td>        
<td width="615" valign="top" >[http://www.google.co.uk/search?q=site:vbforums.com+%s](http://www.google.co.uk/search?q=site:vbforums.com+%s)
</td>     </tr>   </tbody></table>  

Hope this helps!
