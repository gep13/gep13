Title: Essential Visual Studio Addin - StyleCop
Published: 18/7/2010
Tags:
- Addin
- Series
- Visual Studio 2008
---

This blog post is one of a series of blogs on Visual Studio Addins that I use. To go back to the series index page, click [here](http://www.gep13.co.uk/essential-visual-studio-2008-addin-series).   

# StyleCop

When it comes to making sure that all developers in your team adhere to the same coding standards, Microsoft’s Code Analysis is an essential tool. However, there is nothing to stop developers on the same team using a completely different style.

Enter Microsoft’s StyleCop, available here:

[http://code.msdn.microsoft.com/sourceanalysis](http://code.msdn.microsoft.com/sourceanalysis)

This covers everything from the number of spaces at the start of a comment, to the need for all XML comment to contain a correct list of parameters for a method.

Out of the box, there are a few rules that just don’t make sense, but you have full control over which rules are enabled, and which ones aren’t. The recommendation would be to sit down with your team, and go through each rule one by one, to figure out which ones make sense for you, and them roll out the Settings.StyleCop file to all your team members.
