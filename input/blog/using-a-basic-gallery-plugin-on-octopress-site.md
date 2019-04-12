---
Title: Using a basic gallery plugin on Octopress Site
Published: 8/9/2014
Tags:
- octopress
- jekyll
- gallery
- imagemagick
- "mini-magick"
- appveyor
---

## I have a lot of photos, but where to put them?

Over the years, I have collected a number of photos from various trips that I have been on, and I share them in various places, i.e. Facebook, Twitter, Flickr, etc.  However, from time to time, I want to include them easily into blog posts as well.  This is something that "should" be easy, but my experience over the last few days is that it isn't as simple as it should be.  This is especially useful when doing a tutorial blog post, and you want to capture a number of screen-shots and show them in order in a gallery.

Having finally figured out how to get it working, I thought I would list the steps here for anyone else that might be running into the same problem.

## What do I want?

The requirements that I am looking for break down as follows:

- once set-up, I should be able to upload one or more images into a gallery folder and they should automatically added to associated blog post
- thumbnail images should be automatically generated for photos uploaded into gallery folder
- when clicked, thumbnail images should open a pop-up with a larger image
- images in the same gallery should allow browsing left and right when an image is in popup window
- should work in a range of devices, desktop, tablet, phone
- should work as part of my AppVeyor build

After hunting around, and trying various different options, I finally settled on using this [plugin](https://github.com/yortz/octopress_gallery).  From it's description, it should have been easy to get set up and running, but unfortunately, it took a bit of head scratching.

In the description for the plugin there is no mention of the dependency on an application called ```ImageMagick```.  Now, in hindsight, it is clear that this will be required, but when I was reading through the simple steps of setting this up, it never occurred to me.  So first up, let's get ```ImageMagick``` installed.  If you are using [Chocolatey](http://chocolatey.org/) then this is as simple as:

```choco install imagemagick.tool```

With that installed, step through the remaining instructions on the plugin page.

In addition to those steps, I also decided to add support for [Fancybox](http://fancybox.net/) to make the experience a little nicer.  This involved the following:

1. Make a slight modification to the ```gallery_tag.rb``` to work with Fancybox.  This basically involved adding a class definition to teh anchor tag, and also changing the rel attribute to be the gallery name, so that Fancybox groups the images in the gallery together.  The final version of the change can be seen [here](https://github.com/gep13/gep13.github.io/commit/8f597cd922ffc3556481e7148990bcaa675dcceb#diff-dc86fc94e212fa637e5f2689a8379e1fR10).
1. Download [Fancybox](http://fancyapps.com/fancybox/#license)
1. Unblock/extract the zip file
1. Add the contents of the source folder to ```source\fancybox``` as I have done [here](https://github.com/gep13/gep13.github.io/tree/source/source/fancybox)
1. Make the following additions to your ```source\_includes\custom\head.html``` file

```javascript
    <script src="ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript">
    jQuery.noConflict(); // ender.js conflicts with jQuery
    </script>

    <link rel="stylesheet" href="/fancybox/jquery.fancybox.css" />
    <script src="/fancybox/jquery.fancybox.pack.js" type="text/javascript"></script>

    <script language="Javascript" type="text/javascript">
    // ender.js gobbles jQuery's ready event: Use ender.js $ instead
    $(document).ready(function() {
        jQuery(".fancybox").fancybox();
    });
    </script>
```

1. Create your gallery folder, and add the necessary changes to your config.yml file.  You can see the sample changes that I made [here](https://github.com/gep13/gep13.github.io/commit/8f597cd922ffc3556481e7148990bcaa675dcceb).
1. Add the gallery tag to your blog post.  In my case, this was ```{% raw %}{{ 'gallery_1' | image_list }}{% endraw %}```
1. Then do a ```rake generate```
2. Assuming everything has worked, do a ```rake preview``` and view your hard work

## Issue when doing rake generate

When I first tried to do the above, the issue that I ran into looked like this:

> C:/projects/gep13-github-io/public/images/galleries/gallery_1/thumbs/6.jpg
149jekyll 2.3.0 | Error:  No such file or directory - identify -ping C:/Users/appveyor/AppData/Local/Temp/mini_magick20140907-3000-6k90ct.jpg

This translates as, you don't have ```ImageMagick``` installed, go and get it.  I tried a few different installations, and ran into other issues with having the right developer DLL's and includes.  The upshot was, I couldn't find a solution to using the installed version of ```ImageMagick```.  If however, I used the portable version, it works fine.  Go figure!

## Setting up AppVeyor

So, the final piece of the puzzle, at least for me, was to get the same process working on AppVeyor, so that as part of the build process the thumbnails etc are generated.  Turns out again, thanks to AppVeyor extensibilty system, this is remarkably easy.  In fact, the changes that I need to make are exactly what I did on my own machine, i.e. install ```ImageMagick``` using Chocolatey.  Now, unlike my machine, the AppVeyor build machines don't have Chocolatey already installed, so we need to get it onto them.  This can be done using the ```install``` steps, as documented [here](http://www.appveyor.com/docs/appveyor-yml).

The final result was the following:

```yaml
install:
  - ps: iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
  - ps: choco install imagemagick.tool
```

Two simple steps.  The first to install Chocolatey, and the second to install ```ImageMagick``` portable edition.  This will now happen each time my AppVeyor build runs, and it will generate the thumbnails for each of my galleries.

Job done!
