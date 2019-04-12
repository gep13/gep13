---
Title: Improve AppVeyor build times using build cache
Published: 20/10/2014
Tags:
- appveyor
- octopress
- build cache
---

## Take minutes off overall build time...

By making use of the [build cache](http://www.appveyor.com/docs/build-cache) within [AppVeyor](http://www.appveyor.com/).  For both this blog, and also the [Aberdeen Developers .Net User Group](http://www.aberdeendevelopers.co.uk/) blog, I was able to reduce the overall build time by over 3 minutes.  Find out how.

In a recent [blog post](http://www.gep13.co.uk/blog/setup-appveyor-to-deploy-octopress-site-to-github-pages), I described how I was able to use AppVeyor to generate and then deploy an Octopress site to GitHub Pages.  The process is very simple to setup, the only slight downside is the time that it takes to generate the site itself, which can take over 7 minutes.

In the grand scheme of things, this isn't a long time, but if you are pushing a quick change, and want to see whether it worked before moving onto something else, these 7 minutes can seem like an entirity.  Looking at the build log, it was clear that the thing that was taking the longest was this command:

```yaml
  - cmd: bundle install
```

The reason that this is required is due to the fact that each time a build on AppVeyor runs, it is using a brand new instance of the [Build Worker Image](http://www.appveyor.com/docs/installed-software).  This is both good and bad.  It means that you are always starting from a known point.  However, it also means that anything you installed to get your build to work, is no longer there the next time the build runs.

In my case, there are almost 50 rubygems that need to be installed in order for Octopress to work correctly.  This means that these gems have to be downloaded from the internet, installed and verified, and then used in the build process.

Thankfully, AppVeyor has the concept of using a build cache.  This basically means that, once setup, AppVeyor will first extract all the cached files back onto the Build Worker Image, and then start the build proper.  As a result, when I run:

```yaml
  - cmd: bundle install
```

The gems are already installed, and no longer need to be downloaded and installed.  Then, at the end of the build, the folders of interest are then re-cached, ready for extraction when the next build kicks off.

**NOTE:** There is a limit of 100MB applied to the build cache.  If you are trying to cache more files than this, you will have to get in contact with AppVeyor support to see if there is anything that can be done to increase this number.

## Enough already, show me the configuration

Setting this up is as simple as this:

```yaml
cache:
  - C:\Ruby193\lib\ruby\gems\1.9.1
  - C:\Ruby193\bin
```

I originally started out trying to cache only the ```gems``` folder, however, with the help of Feodor Fitsner over at the [AppVeyor Support](http://help.appveyor.com/discussions/questions/585-what-setup-for-build-cache-is-require-for-bundle-install) pages it became apparent that I would also need to include the ```bin``` folder, as during the installation of gems a number of them put their bash or CMD scripts into this folder so that they can make the tooling work correctly from the command line.

And there you have it!  With the build cache configured, I was able to reduce the build time for this blog from ```5 min  37``` to ```2 min 28 sec```.  Not a bad effort!

This same approach can be used for other artefacts of a build process, for instance, restoring nuget packages.
