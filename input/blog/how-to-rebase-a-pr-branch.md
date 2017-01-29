---
Title: How to rebase a PR branch
Published: 29/1/2017
Tags:
- how to
- github
- pr
- branch
- rebase
---

# Why on earth would you do this?!?

Back in September 2016, GitHub announced a very interesting feature, namely, the ability for a maintainer of a repository to push changes back to a remote repository (i.e. fork) from where a PR had been submitted.

You can find out more information about this [here](https://github.com/blog/2247-improving-collaboration-with-forks).

This is particularly interesting for two reasons.

Firstly, during a PR review, the code that is being submitted might be almost exactly correct, and ready for inclusion in the repository, and there is only one tiny thing not quite right.  You, as the maintainer, could spend some time explaining what is required, or, with this new feature you can simply make the change yourself, push it back to the source branch, and then accept the PR.  Using this approach has a number of benefits.

* All the changes associated with the PR are contained within the PR for later review
* Any Continuous Integration checks performed on the PR can be run again with these changes in place
* It is sometimes quicker to simply make the change, rather than trying to explain it
 
Secondly, the very nature of Open Source contributions means that there might be some time between when the PR was submitted, and when it is reviewed and ultimately merged.  On the projects that I work on, when this happens, there is a preference to have the changes in the PR branch rebased with the upstream branch, therefore bringing it up to date.  However, asking a contributor to an open source project to rebase a branch can sometimes be quite daunting.  I remember the first time that I was [asked to do this](https://github.com/chocolatey/chocolatey/pull/238) on a PR into the Chocolatey Repository, and I literally had NO clue what I was doing.  Thankfully I had a lot of guidance from [rismoney](https://github.com/rismoney) to help with this.  But again, rebasing can be quite daunting.  Being able to do this on behalf of the contributor opens up the potentially for a much quicker turn around on merging a PR.

**NOTE:** Performing a rebase on someone else's fork is really only something that should be done if you intend to merge the PR straight away, once any CI builds have passed.  Doing anything else would leave their branch in a state that differs from their local copy of the truth, and quite simply, it would be bad form to leave it in this state, so don't do it!

# The contributor has to allow the branch to be updated

As mentioned in the linked article, allow a PR branch to be updated is something that the contributor can choose not to allow, but it is enabled by default:

![Allow Edits from Maintainers](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/29/allow-edit-from-maintainers.png)

I would encourage any contributor to leave this checkbox ticked when submitting a PR, as it does open up much more flexibility on the part of the maintainers of the project.

# Let's see this in action

As an example of where this can be used, let's use this [PR](https://github.com/cake-build/cake/pull/1360).  Having reviewed the changes in this PR, I can say that it is good to go, however, this is the current state:

![This branch is out of date with the base branch](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/29/this-branch-is-out-of-date-with-the-base-branch.png)

All the CI builds associated with the PR have passed, but it is now out of date with the base branch, meaning that it needs to be rebased.

If you look closely at the above screen shot, you will see the following text:

> Add more commits by pushing to the wixheat-pog-fix branch on jnm2/cake

This tells the maintainer of the project that when this PR was created, the box was checked to allow changes from the maintainer.  So, let's go ahead and rebase the PR branch with the latest from upstream, and push the changes back.  Then, once all the CI builds pass, we can get the PR merged in.

These are the steps that I follow:

```
mkdir jnm2
cd jnm2
git clone https://github.com/jnm2/cake.git
cd cake
git checkout wixheat-pog-fix
git remote add upstream https://github.com/cake-build/cake.git
git fetch upstream develop
git rebase upstream/develop
git push -f
```

Doing this last step causes the following to happen:

![git push force](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/29/git-push-force.png)

i.e. all the CI builds for this PR are triggered again, but this time, the branch is up to date with the base branch.

Now, all you have to do is wait for these builds to finish, and assuming everything went well, you will see the following:

![All ready to be merged](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/29/all-ready-to-be-merged.png)

At which point, you can merge the PR.  Job done!

Well, almost...

One of the most important things in Open Source is to be kind and courteous.  Someone has went out of their way to make a contribution into your project, so make sure that you say thank you!

![Say thank you](https://gep13wpstorage.blob.core.windows.net/gep13/2017/01/29/say-thank-you.png)

# Thanks to Mattias

Huge thanks have to go to Mattias (a.k.a [devlead](https://twitter.com/devlead)) for showing me that this was possible.