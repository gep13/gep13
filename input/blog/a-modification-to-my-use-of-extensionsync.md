---
Title: A modification to my use of ExtensionSync
Published: 15/7/2011
Tags:
- extensions
- extensionSync
---

In an earlier [blog post](http://www.gep13.co.uk/blog/a-tool-to-synchronise-visual-studio-2010-extensions) I mentioned how I am now using a very clever Visual Studio 2010 extension called [ExtensionSync](http://visualstudiogallery.msdn.microsoft.com/dbaf0ac9-fb7b-4fb3-b34d-ea2269276d3c) (a complete list of all the Visual Studio 2010 extensions that I am currently using can be found [here](http://www.gep13.co.uk/blog/visual-studio-2010-extensions)).

In that blog post I explained that I am using a mapped drive in order in “share” the ExtensionSync settings file between different developers in the team. Initially, this worked well, but there were a few problems with this, and this was actually noted by the author of the tool in a Twitter conversation.

Basically, when you make a change, i.e. you add another extension, it saves the changes to the shared settings file it will work great until another developer who perhaps already had Visual Studio 2010 open, closes his Visual Studio. When this happens, his current extensions will be persisted to the shared ExtensionSync settings file, removing the extension that you just added. Not good!

After giving it some thought, it occurred to me that this file was actually living in the wrong place. This file should really be treated as an _artefact_ of the project, and as such, should live in our source control repository.

The way our source control is configured, we have a folder called SharedSource. In here we keep things like, code analysis dictionaries, shared strong key files, shared code snippets, etc, so this seemed like a perfect place to put the ExtensionSync settings file.

With that checked in, it was a quick change to the ExtensionSync settings to point it at the new settings file location and everything was set up.

The benefit of using this approach is that unless “checked out” the settings file is read only, so that even if it wanted to, ExtensionSync can’t make changes to the file (I was worried that this would cause ExtensionSync to complain, but so far I haven’t seen this).

It also has the benefit of applying some process to making changes to the extensions that are used. A developer now have to go through the process of checking out the settings file, installing the extension, and then checking back in. This formality means that a little more thought is given to the addition of an extension, and should prevent ad-hoc extensions appearing that are of little or no use.

It strikes me as well that there is a logical extension (no pun intended) to this approach. For instance, depending on the project that you are working on, you may want/need different extensions installed. If you are working on a SharePoint development project then you would want all the SharePoint helper extensions installed. However, there is absolutely no need have these installed if you are working on an ASP.Net MVC project. As a result, you might have an ExtensionSync settings file per project, which you could switch to as and when required. If this could be made to do this automatically based on the currently loaded project this would be great, but I don’t know what sort of overhead this would involve in terms of installing/uninstalling extensions. Perhaps a feature request though...
