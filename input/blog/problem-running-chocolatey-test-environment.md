---
Title: Problem Running Chocolatey Test Environment
Published: 27/07/2018
Tags:
- chocolatey
- test environment
- vagrant
---

During a [Gitter discussion](https://gitter.im/chocolatey/choco?at=5b59cf471be9bb57bcc5a6e4) yesterday, an interesting
point of discussion came up, so I thought I would capture it here in a blog post.  The short version is that you
probably want to make sure that you are using the latest version of Vagrant when trying to use the Chocolatey Test
Environment, although bear in mind that this might not have been tested by anyone, and may have other problems :-).

## The Problem

When the Chocolatey Community member was trying to run the [Chocolatey Test Environment](https://github.com/chocolatey/chocolatey-test-environment)
on his Windows 10 machine, they were running into the following error:

~~~sh
Bringing machine 'default' up with 'virtualbox' provider...
 ==> default: Box 'ferventcoder/win2012r2-x64-nocm' could not be found. Attempting to find and install...
    default: Box Provider: virtualbox
    default: Box Version: >= 0
The box 'ferventcoder/win2012r2-x64-nocm' could not be found or
could not be accessed in the remote catalog. If this is a private
box on HashiCorp's Atlas, please verify you're logged in via
`vagrant login`. Also, please double-check the name. The expanded
URL and error message are shown below:

URL: ["https://atlas.hashicorp.com/ferventcoder/win2012r2-x64-nocm"]
Error: The requested URL returned error: 404 Not Found
~~~

Going to the URL shown in the output above, it did indeed result in a 404.  However, a quick
search of the Vagrant Cloud showed that the base box did in fact exist.  You can find it here:

https://app.vagrantup.com/ferventcoder/boxes/win2012r2-x64-nocm

A further test on my own machine, resulted in the following output:

~~~sh
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Box 'ferventcoder/win2012r2-x64-nocm' could not be found. Attempting to find and install...
default: Box Provider: virtualbox
default: Box Version: >= 0
==> default: Loading metadata for box 'ferventcoder/win2012r2-x64-nocm'
default: URL: https://vagrantcloud.com/ferventcoder/win2012r2-x64-nocm
==> default: Adding box 'ferventcoder/win2012r2-x64-nocm' (v1.0.0) for provider: virtualbox
default: Downloading: https://vagrantcloud.com/ferventcoder/boxes/win2012r2-x64-nocm/versions/1.0.0/providers/virtualbox.box
default: Progress: 1% (Rate: 2764k/s, Estimated time remaining: 0:30:03)
~~~

Which correctly worked.

**NOTE:** The difference in the download URL's.

https://atlas.hashicorp.com/ferventcoder/win2012r2-x64-nocm

compared to:

https://vagrantcloud.com/ferventcoder/win2012r2-x64-nocm

## The Solution

After a bit of digging, it turns out that the Chocolatey Community Member was following the
instructions in the README.md of the linked repository, which suggests using 1.8.1 of vagrant,
where as I was using version 2.0.1.  My guess was that there was "something" in the earlier
version of the vagrant client which no longer worked, i.e. a URL redirect was no longer in place.

Turns out that this "guess" was pretty much spot on.  Rob Reynolds was able to confirm this by
pointing out this Google Groups post:

https://groups.google.com/forum/#!msg/vagrant-up/H8C68UTkosU/qz4YUmAgBAAJ

So bascially, if you are wanting to run an earlier version of the Vagrant client, you are going
to need to set the following environment variable:

~~~sh
# macOS and Linux
export VAGRANT_SERVER_URL="https://vagrantcloud.com"

# Windows (CMD)
set VAGRANT_SERVER_URL="https://vagrantcloud.com"

# Windows (Powershell)
$env:VAGRANT_SERVER_URL="https://vagrantcloud.com"
~~~

Or, upgrade to a newer version of Vagrant.

## The Outcome

I am going to update the Chocolatey Test Environment repository to include some of this
information, so that other people don't also run into this problem.
