---
Title: New Chocolatey GitHub Organisations
Published: 17/4/2019
Tags:
- chocolatey
- github
- organisations
- community
- archive
---

I have been thinking a LOT about GitHub Organisations lately.  These thought processes are related to the sustainability and maintainability of GitHub repositories/projects.

The most recent thing that spurred this was detailed in a Twitter thread that I created here:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Thread on OSS... A couple weeks ago, I was contacted about a couple <a href="https://twitter.com/cakebuildnet?ref_src=twsrc%5Etfw">@cakebuildnet</a> addins, which appeared to have stopped being maintained.  It was suggested that we could fork the addin&#39;s into the <a href="https://twitter.com/cakecontrib?ref_src=twsrc%5Etfw">@cakecontrib</a> Organisation and continue development there.  I was hesitant to... 1/n</p>&mdash; Gary Ewan Park (@gep13) <a href="https://twitter.com/gep13/status/1115340392197709824?ref_src=twsrc%5Etfw">April 8, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The upshot of this was a successful outcome, where the repository in question was transferred into a GitHub Organisation, which is maintained by multiple people, meaning that more people can help out with ongoing changes to these repositories.

This got me thinking about my own GitHub profile, as I have a growing number of my own repositories that are starting to get more and more contributions from other people.  I have added these contributors as collaborators on the repository, but they don't have full access to the repositories.  The ability to add this access, to the best of my knowledge, only comes with adding the contributors to an organisation.

## What does this have to do with Chocolatey?

Some of the most recent repositories that I have been working on are focused on Chocolatey, specifically:

* [chocolatey-vs](https://github.com/gep13/chocolatey-vs)
* [chocolatey-vscode](https://github.com/gep13/chocolatey-vscode)
* [chocolatey-azuredevops](https://github.com/gep13/chocolatey-azuredevops)

While these started out as my own "pet" projects, they are starting to gain more traction and contributions, and it makes sense to move them into the correct Organisation.  This will likely ultimately be the [chocolatey](https://github/chocolatey) Organisation on GitHub, but it started a discussion between myself and Chocolatey Founder, [Rob Reynolds](https://twitter.com/ferventcoder).

The repositories in the chocolatey GitHub Organisation fall into three distinct categories:

* repositories that are actively being worked on by the core Chocolatey Contributors
* repositories that are actively being worked on by the wider Chocolatey Community
* repositories that are no longer being worked on

Having identified these distinctions, the following changes are going to happen...

## New GitHub Organisations

Two new GitHub Organisations have been created:

* [chocolatey-archive](https://github.com/chocolatey-archive)
  * This is going to house all Chocolatey repositories that are no longer being worked on, but which are being kept around for reference purposes
* [chocolatey-community](https://github.com/chocolatey-community)
  * This is going to house all Chocolatey repositories that are being worked on by the wider Chocolatey Community

The existing [chocolatey](https://github.com/chocolatey) Organisation will remain, and will house all the repositories that are actively being developed by the core Chocolatey Contributors.

## What is going to happen now?

I have already moved all the required repositories into the [chocolatey-archive](https://github.com/chocolatey-archive) Organisation.

Over the next week or so, I will begin moving repositories into the new [chocolatey-community](https://github.com/chocolatey-community) Organisation.  To facilitate this, I will also be sending out invitations to Chocolatey Community members to join the new Organisation, and assigning them into teams in the new organisation.  If you are already a member of the chocolatey Organisation, you will likely be invited to the new Organisation as well.  If I can ask you to keep an eye out for this invitation so that I can assign members into the various teams I will create, I would appreciate it.

We hope that this re-organisation of the repositories associated with Chocolatey will help to explain what they are for, and who is actively working on the various projects.

For more information about the Chocolatey repositories that exist, you can read an earlier [blog post](https://www.gep13.co.uk/blog/what-are-all-the-chocolatey-repositories-for) that I wrote on this subject.

Please feel free to reach out if you have any questions about any of these changes.
