---
Title: Adding clickable links for headers
Published: 11/01/2017
Tags:
- wyam
- anchorjs
- how to
---

# Click, click, click!

After reading this [blog post](http://www.digitaltapestry.net/posts/markdig-cheat-sheet) from [William Kempf](https://github.com/wekempf), specifically this [section](http://www.digitaltapestry.net/posts/markdig-cheat-sheet#auto-identifiers), it got me thinking...

It's great that Markdig is automatically creating those anchor points in the HTML that is rendered, however, they are not exactly discoverable.  If you look at what happens on a [GitHub wiki](https://github.com/chocolatey/choco/wiki) that renders Markdown, you will see that it comes up with this really nice icon on hovering over the link:

![How headers are rendered on GitHub](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/11/github-wiki-rendering.png)

Clicking on this icon navigates directly to the header, and makes it really easy to share that link with other people.

# I want to do this do!

When I write a blog post, I typically break the post into a number of sections, and I wanted to be able to do the same thing here.  So, I asked the question in the [Wyam Gitter Room](https://gitter.im/Wyamio/Wyam?at=587544c9873d96e16d4f9b05) and almost immediately I got a response from [Dave Glick](https://github.com/daveaglick):

> There is - in fact strongly considering adding this and code block copy buttons to the themes (it's all frontend JS stuff) - here's the two libraries I like the best: https://github.com/bryanbraun/anchorjs (for anchor links) and https://github.com/zenorocha/clipboard.js (for clipboard copying)
Adding them to your own site would just be a matter of putting the appropriate JS in the _Scripts.cshtml file

# The implementation

With this information in hand, I set about adding it to my blog.  The only addition that was required was the following in my `input\_scripts.cshtml` file:

```html
<script type="text/javascript" src="/assets/js/anchor.min.js"></script>

<script type="text/javascript">
    anchors.options.placement = 'left';
    anchors.add();
</script>
```

:::{.alert .alert-info}
**NOTE**

In order to match what GitHub does, I have explicitly set the `placement` property to appear on the left of the header.  The default is to have it appear on the right of the header.
:::

The end result of this ~~hard work~~ can be seen here:

![AnchorJs in action](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/11/anchorjs-in-action.png)

an easily discoverable way to link to section headers.

# The future

Sounds like Dave is planning on adding this functionality to the default Blog Recipe for Wyam, so at some point it is likely that you will not need to do the above, it should just happen auto-magically, but for now, I am more than happy with the end result.