---
Title: Getting started with GitHub Actions
Published: 14/12/2018
Tags:
- github
- actions
- cake
- automation
---

On Wednesday evening, I got a very pleasant email from GitHub, telling me that I had been given access to the GitHub Actions Beta.  This is something that I have been looking forward to for a while now, ever since I signed up for it.  I am a big user of Continuous Integration Systems for building the various Open Source projects that I work on, but I really like the idea of doing smaller, precise actions, as a result of other "things" happening on a repository.

I was even more impatient to get started with the Beta when I saw [Brandon Olin](https://twitter.com/devblackops) tweet this:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Getting my feet wet with GitHub Actions and having some fun with psake.<br><br>Check out my generic psake task runner here: <a href="https://t.co/lNvKwmDasE">https://t.co/lNvKwmDasE</a><br><br>Still WIP but making progress. <a href="https://t.co/8tPnxxWmtR">pic.twitter.com/8tPnxxWmtR</a></p>&mdash; Brandon Olin (@devblackops) <a href="https://twitter.com/devblackops/status/1072036355855671297?ref_src=twsrc%5Etfw">December 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

As I wanted to do the same thing for [Cake](https://cakebuild.net/).

:::{.alert .alert-info}
**NOTE:**

I have to give a huge thanks to Brandon for the work that he did in creating the psake GitHub Action, as I was able to use this as the starting point for Cake GitHub Action.
:::

## Getting Started

There is some fairly comprehensive documentation on getting started with GitHub Actions on [the site](https://developer.github.com/actions), so I am not going to repeat that here, but rather focus on what was necessary to specifically get a Cake script executing as a result of a GitHub Action.

:::{.alert .alert-info}
**NOTE:**

In addition to the above documentation site, you can also find the source code for the out of the box actions on [GitHub](https://github.com/actions).
:::

## Docker FTW!

The starting point for any new GitHub Action is a Dockerfile.  This is what is going to be used to actually execute the action.  In the case of the psake GitHub Action, it uses [Microsoft's PowerShell Docker Image](https://hub.docker.com/r/microsoft/powershell/) as it already has PowerShell installed, so all that is left is to install and execute psake.  In the case of Cake, there is already an image on the Docker Hub that has [Cake](https://hub.docker.com/r/cakebuild/cake) installed, and ready to be used.  As a result the [Dockerfile](https://github.com/gep13/cake-actions/blob/master/task/Dockerfile) for the Cake GitHub Action is relatively straight forward:

:::{.alert .alert-info}
**NOTE:**

The following is likely to change.  What is shown here is from the initial proof of concept action, just to see how things work
:::

```shell
FROM cakebuild/cake:v0.30.0-2.1-sdk as base

FROM base as cake-build
LABEL "com.github.actions.name"         = "Cake task"
LABEL "com.github.actions.description"  = "Run Cake task"
LABEL "com.github.actions.icon"         = "box"
LABEL "com.github.actions.color"        = "yellow"

LABEL "repository" = "https://github.com/gep13/cake-actions"
LABEL "homepage"   = "https://github.com/cake-build/cake"
LABEL "maintainer" = "Gary Ewan Park <gep13@gep13.co.uk>"

ADD entrypoint.sh  /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
```

All that is really being done here is specifying the base image to use, and then configuring the information about the image, and then adding the entry point for when the container is executed.

## Entry Point

With the Dockerfile defined, I then moved onto the entry point script for when the container is executed.  This ended up looking like the following:

```shell
#!/bin/sh

set -eu

cake --version

cake $CAKE_SCRIPT --target=$*

exit $?
```

Now, this really needs some work in terms of error handling, etc, but again, just a proof of concept to show how things work.

Since Cake is already available on the Docker image, it can be invoked directly.  So the first thing that is being done in this shell script is to run `cake --version` so that information about what version of Cake is being used is output to the log.  After that, cake is being executed against a named script (which will be read from an Environment Variable `CAKE_SCRIPT`), and then a specific target (which will come from an argument specified in the workflow).

With both of those things created, the Cake GitHub Action is complete, and ready to be tested.  You can see the complete action [here](https://github.com/gep13/cake-actions/tree/master/task).

## Creating the workflow

During the beta, GitHub Actions are only available on private repositories, so I can't link to the example repository that I am using, but I will walk you through what I did.

* Open the GitHub repository, and click on the new Actions tab.
* Click the `Create a new workflow` button.  This will create a file called `main.workflow` in the `.github` folder
* Since we will be using a custom GitHub Action, switch away from the visual editor by clicking on `Edit new file`
* Enter the following

```shell
workflow "New workflow" {
  on = "push"
  resolves = ["cake test"]
}


action "cake test" {
    uses = "gep13/cake-actions/task@master"

    env = {
        CAKE_SCRIPT = "./build.cake"
    }

    args =["Default"]
}
```

* This defines a new `cake test` action, which is triggered when a push happens on the repository
* This action uses the custom action located at `gep13/cake-actions/task@master` **NOTE:** here master indicates that the contents of the current master branch should be used.  Once running properly, you are probably going to want to use a named tag, to pin to a specific version of the action, so that you know that is won't change over time.  For example, `gep13/cake-actions/task@0.1.0`
* Then a new environment variable is defined called `CAKE_SCRIPT` with a value of `./build.cake`.  This correlates to a file called build.cake which needs to be located in the root of the repository where the action is being used
* Finally, the arguments to pass into Cake are defined.  Here, we are setting this to Default.  When passed into Cake, this will be changed to `--target=Default`  **NOTE:** This part of the entrypoint.sh really needs some work, again, just a proof of concept
* Save and commit the changes to the main.workflow
* Now that these parts are in place, we need a build.cake file.  A simple one would be the following, which writes out Hello World! to the console output:

```shell
var target = Argument("target", "Default");

Task("Default")
  .Does(() =>
{
  Information("Hello World!");
});

RunTarget(target);
```

* Switch back to the Visual Editor, and you should see something that looks like the following:

![Workflow in Visual Editor](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/14/workflow-in-visual-editor.png)

* Make another change to the repository, and push the changes.  This will then trigger the workflow, and as a result, execute the action

![Workflow execution state](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/14/workflow-execution-start.png)

![Workflow execution end](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/14/workflow-execution-end.png)

* The action starts by downloading the Docker image that is required for it to execute the action, and then it executes the two Cake commands that are defined in the action.  i.e. `cake --version` followed by `cake ./build.cake --target=Default`
* We can then see the `Hello World!` being output within the Default task.

## Chaining Actions

As shown in Brandon's image above, it would be possible to chain multiple cake actions together to form the entire workflow, with each one executing a particular task within the Cake script.  However, it is more likely that I would put this orchestration into the Cake script itself.  However, both options are definitely possible, so the choice is up to the end user.

## Going forward

As mentioned, some work is required to move this from a proof of concept to a hardened, re-usable, GitHub Action.  This will happen in due course, and the `cake-actions` repository will likely move under the cake-build Organisation on GitHub.

I really like the idea of defining my "work" in a Cake script, and then being able to re-use them in various repositories, triggered off of a number of different triggers.  There are currently [28 different events](https://developer.github.com/actions/creating-workflows/workflow-configuration-options/#events-supported-in-workflow-files) that your workflow can trigger off.

![Workflow Event Triggers](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/14/workflow-triggers.png)

## Overall Impression

Overall, I have to say that I am very impressed with GitHub Actions.  Things "just" worked, which is exactly what you want.  I can totally see how these small, precise actions, can be applied to the events being triggered on my repositories.  Right now, there are a number of manual steps for the Cake release process, and I can see a huge percentage of these being replaced with GitHub Actions.  I am very much looking forward to GitHub Actions coming out of beta.
