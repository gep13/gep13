---
Title: How to create gh-pages branch 
Published: 27/1/2017
Tags:
- how to
- github
- git
---

# Let the branching commence!

This is the third time that I have had to look this up, and tailor to my needs, so it's time to write it down, so that I don't forget again!

With the aid of [Cake](http://cakebuild.net/) and [Wyam](https://wyam.io/), I am now generating documentation for some of the projects that I work on.  This is done by generating the documentation, and then pushing the result into a `gh-pages` branch on the GitHub Repository where the source code is hosted.  This process is actually really simple, and it will be the topic of another blog post, but in order for it to work, we first need to create the gh-pages branch in the first place.

In order for this to work, we need to create an `orphan` branch.  More details on what this is, and why we need it, can be found [here](https://help.github.com/articles/creating-project-pages-using-the-command-line/).  In fact, everything that you need to complete this process is in that article, it just isnt' specific to my needs.  So this is what I need...

```
git checkout --orphan gh-pages
git rm -rf .
echo "My Page" > index.html
git add index.html
git commit -a -m "First pages commit"
git push --set-upstream origin gh-pages
```

If all of that worked, you should now have something that looks like this:

![First gh-pages branch](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/27/first-gh-pages-branch.png)

By default, a new gh-pages branch, created on a repository is going to be accessible via:

```
https://<organisation-name>.github.io/<repository-name>/
```

i.e here: https://cake-contrib.github.io/Cake.Ember/

This can be configured in the Settings for your repository:

![gh-pages configuration](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/27/gh-pages-configuration.png)

For example, you can configure a custom domain name for accessing the website that is hosted on GitHub.  For my purposes though, the default settings and configuration are all that I need.