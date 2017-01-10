---
Title: How to skip AppVeyor builds
Published: 10/01/2017
Tags:
- appveyor
- continuous integration
- how to
---

# Why skip builds?

9 times out of 10, there is actually no need to skip a build that is triggered on AppVeyor, or any Continuous Integration server.  The whole point is that you *want* to trigger a build on every commit, so that you can see when things stopped working.  There are however those times when the change that you are making doesn't justify, or require a build.

For me, this is normally when I am making a small change, for example:

- correcting whitespace in a file
- adding/correcting documentation
- fixing a coding/style convention

In these situations, running a build simply isn't needed, as it is highly unlikely that these changes will result in a failed build.  

Now, purists out there will be saying that your Continuous Integration builds shouldn't take a long to run, therefore, you should simply run every build.  While I don't disagree that your Continuous Integration builds should be quick to run, I still think there is a need to control if/when a build executes.

# Why not simply stop the build?

Some people out there might be asking why not simply stop the build if not required.  There is nothing wrong with that approach, but for me, it would break me out of the coding workflow.  I would need to jump to the Continuous Integration server in order to stop the build, taking me away from what I was doing.  This for me is a show stopper, so there has to be another way.

# AppVeyor has you covered!

For the Open Source Projects that I work on, I use [AppVeyor](https://www.appveyor.com/) as my default Continuous Integration system.  It is incredibly easy to setup and use, and it is completely free for Open Source projects.

Once you have configured AppVeyor to work with your source control repository, any time you create a commit into the repository, a build will be triggered on AppVeyor.

:::{.alert .alert-info}
**NOTE**

Depending on your AppVeyor configuration, this might not be exactly correct.  For example, you might have corrected AppVeyor to only trigger on certain branches.  However, for the purposes of this blog post, let's assume that the above it correct.
:::

Out of the box, a series of commits into your repository:

![Series of commits into Source Control](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/10/appveyor-github-commits.png)

results in the following builds being triggered on AppVeyor:

![Resulting Builds on AppVeyor](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/10/appveyor-builds.png)

## Skip commits using direct commits messages

Let's imaginge the situation that I was away to make a commit into source control, if I add either `[skip ci]` or `[ci skip]` to the end of the commit message, then AppVeyor will ignore the commit, and *NOT* run a build.

To show this, have a look at this series of commits:

![Series of commits into Source Control with skip commit message](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/10/appveyor-github-commits-with-skip.png)

and the resulting builds on AppVeyor:

![Resulting Builds on AppVeyor with skip commit](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/10/appveyor-appveyor-builds-with-skip.png)

Notice that there was not a build for the commit message of `Fourth commit [skip ci]`.

## It's good, but not quite good enough

The above strategy works really well, however, it does rely on the end user, i.e. me, remembering to add the nomenclature at the end of the commit message.  Unfortunately, this is not something that is likely to happen, and would therefore invalidate the premise of this blog post.

In order to help with this, AppVeyor also helps by allowing the configuration of a regular expression, which examines the commit message, and based on finding a match, will skip the build.

The is ideal for the way that I work.  I use commit messages like the following:

`(GH-123) Added foo to bar`

where the GitHub issue associated with the commit is housed within a set of parenthesis.

When I do a commit that is purely related to say documentation, then I use a commit message similar to the following:

`(doc) Corrected typo in bar class`

If I can configure a regular expression that can match on this convention, then I can use my existing workflow, whilst also skipping builds that are not required.

The AppVeyor configurtion that I use to make this happen is the following:

```yaml
#---------------------------------#
#  Skip builds for doc changes    #
#---------------------------------#
skip_commits:
  # Regex for matching commit message
  message: /\(doc\).*/
```

So, if I have a commit into source control like the following:

![Series of commits into Source Control with doc commit message](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/10/appveyor-github-commits-with-doc.png)

then AppVeyor simply skips the build:

![Resulting Builds on AppVeyor with doc commit message](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/10/appveyor-builds-with-doc.png)

# Additional options

The above configuration works perfectly for me, however, AppVeyor includes a number of other [configuration options](https://www.appveyor.com/docs/how-to/filtering-commits/) to skip builds.  This includes:

- skipping and including commits based on author of commit
- skipping and including commits based on file name

I personally haven't had a need for this type of configuration, but I would encourage you to look at them, if they suit your particular workflow.