---
Title: Using Cake GitHub Action
Published: 15/12/2018
Tags:
- github
- actions
- cake
- automation
---

In [yesterdays blog post](https://www.gep13.co.uk/blog/getting-started-with-github-actions) I described how I had been able to create a custom GitHub Action to execute a target from a  [Cake](https://cakebuild.net/) script.  To follow up on that, I thought it would be good to show how you can actually make use of this custom action, to achieve something useful in terms of a GitHub Action.

## What are we going to do?

Almost exclusively on the Open Source projects that I work on, I use GitHub Milestones to collect the Issues/Pull Requests that are going to be included in any given release.  Once everything is ready, I release the "bits" of the project, and then I close the Milestone.  Wouldn't it be good if the act of closing a Milestone were to trigger a notification to Twitter, to let people know that the release is ready.  I think so...

## Milestone event

Of the [28 events](https://developer.github.com/actions/creating-workflows/workflow-configuration-options/#events-supported-in-workflow-files) that can trigger the workflow of a GitHub Action, one of them is the [milestone event](https://developer.github.com/v3/activity/events/types/#milestoneevent), which will trigger:

> Any time a milestone is created, closed, opened, edited, or deleted.

Now, we only want the Tweet to be sent out when a milestone is closed, but based on the documentation, we should be able to inspect the event payload (which is a JSON file), to see more details about the event, specifically, the `action` property, which will either be:

* created
* closed
* opened
* edited
* deleted

## Parsing the JSON file

When it comes to parsing JSON files in .NET, the obvious choice is to use [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/).  And in terms of Cake, a community member, [redth](https://github.com/redth) has already done the work of creating a Cake Addin ([Cake.Json](https://www.nuget.org/packages/Cake.Json/)) to make this incredibly simple.  Parsing a JSON file is as simple as:

```csharp
var json = ParseJsonFromFile("<path to JSON file>");
```

## Sending a Tweet

In the same way that parsing a JSON file in Cake is a one-liner, the same is true of sending a Tweet.  Using the [Cake.Twitter](https://www.nuget.org/packages/Cake.Twitter/) addin, sending a tweet is as simple as:

```csharp
TwitterSendTweet("oAuthConsumerKey", "oAuthConsumerSecret", "accessToken", "accessTokenSecret", "The text for the Tweet you want to send");
```

:::{.alert .alert-info}
**NOTE:**

In order to get the above keys and tokens, you will need to create a developer account on Twitter.
:::

## Event data

Based on the [documentation](https://developer.github.com/actions/creating-github-actions/accessing-the-runtime-environment/#environment-variables) GitHub Actions provides an environment variable which contains the path to a file, which has all the JSON payload of the event which triggered the workflow.  By inspecting this environment variable, and reading the contents of the file, we can figure out whether the event was a milestone being closed.

## Putting it all together...

In the previous blog post, we left the workflow of our action triggering off a `push` event, with a single environment variable and argument.  It was defined as follows:

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

To make our workflow trigger on a milestone event, we will need to change the `on` parameter, and we will also need to add some [secrets](https://developer.github.com/actions/creating-workflows/storing-secrets/) to the definition, which will store the Twitter Keys and Tokens, so that we can actually send the Tweet.  After updating, the workflow then looks like the following:

```shell
workflow "New workflow" {
  resolves = ["cake test"]
  on = "milestone"
}

action "cake test" {
  uses = "gep13/cake-actions/task@master"
  env = {
    CAKE_SCRIPT = "./build.cake"
  }
  args = ["Default"]
  secrets = ["TWITTER_CONSUMER_KEY", "TWITTER_CONSUMER_SECRET", "TWITTER_ACCESS_TOKEN", "TWITTER_ACCESS_TOKEN_SECRET"]
}
```

Which "looks" like the following:

![Workflow with secrets](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/15/workflow-with-secrets.png)

## The Cake Script

With the workflow defined, now we can turn our attention to the Cake Script itself.  This will need to:

* Add the Cake.Json and Cake.Twitter addins
* Grab the required environment variables
* Parse the event JSON file
* Inspect the action variable to see if the milestone is closed
* Send the tweet if required

The end result (which likely needs some additional error checking, but which works for what is trying to be shown here) looks like the following:

```csharp
#addin "nuget:https://www.nuget.org/api/v2?package=Cake.Twitter&version=0.9.0"
#addin "nuget:https://www.nuget.org/api/v2?package=Cake.Json&version=3.0.1"

var target = Argument("target", "Default");

Task("Default")
  .Does(() =>
{
  var oAuthConsumerKey        = EnvironmentVariable("TWITTER_CONSUMER_KEY");
  var oAuthConsumerSecret     = EnvironmentVariable("TWITTER_CONSUMER_SECRET");
  var accessToken             = EnvironmentVariable("TWITTER_ACCESS_TOKEN");
  var accessTokenSecret       = EnvironmentVariable("TWITTER_ACCESS_TOKEN_SECRET");
  var githubEventPath         = EnvironmentVariable("GITHUB_EVENT_PATH");

  if(string.IsNullOrEmpty(githubEventPath))
  {
    throw new Exception("Unable to find GitHub Event Path");
  }

  try
  {
    var json = ParseJsonFromFile(githubEventPath);

    Information(json);

    JToken value;
    if (json.TryGetValue("action", out value))
    {
      Information(value);

      if(value.ToString() == "closed")
      {
        TwitterSendTweet(oAuthConsumerKey, oAuthConsumerSecret, accessToken, accessTokenSecret, "This tweet was sent as a result of a milestone being closed on a repository, thanks to @gitHub Actions.  Blog post to follow later...");

        Information("Tweet sent");
      }
      else
      {
        Information("No tweet sent, as milestone wasn't closed");
      }
    }
  }
  catch(Exception ex)
  {
      Error("{0}", ex);
  }
});

RunTarget(target);
```

## Let's run it...

With all of the above checked into my test repository, I went ahead and created a new milestone.  Looking at the logs, I saw the following:

![Milestone created event payload](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/15/milestone-created-event-payload.png)

![Milestone created no tweet](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/15/milestone-created-no-tweet.png)

I then went ahead and closed the milestone.  Checking the logs, I then saw the following:

![Milestone closed event payload](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/15/milestone-closed-event-payload.png)

![Milestone closed tweet sent](https://gep13wpstorage.blob.core.windows.net/gep13/2018/12/15/milestone-closed-tweet-sent.png)

Too good to be true...

Checking Twitter, I then saw the following:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This tweet was sent as a result of a milestone being closed on a repository, thanks to <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@gitHub</a> Actions.  Blog post to follow later...</p>&mdash; Gary Ewan Park (@gep13) <a href="https://twitter.com/gep13/status/1073905256164077568?ref_src=twsrc%5Etfw">December 15, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I honestly didn't think that this would "just" work the first time, but it did!  I am really starting to like this system, and the integration of Cake means that I have access to a huge library of addins for doing a huge number of things.

## Doing more stuff

This is just one example of what you can do as the result of an event coming from your repository.  At last count, there are [240 different addins for Cake](https://github.com/cake-contrib/Home/blob/master/Audit_for_Cake_0.28.0.md) that means that there are lots of "things" that you can do based on these events being triggered.  When it comes to sending out notifications, there are addins for sending messages:

* to Discord
* to Slack
* to Gitter
* via email
* via SendGrid
* the list goes on

I would encourage you to take a look at the list of addins, and have a think about the actions that you can add to your repository.

## After thoughts

After doing the above, I found the [following](https://github.com/actions/bin/tree/master/filter) which I "think" I would be able to use to filter the milestone event to only trigger on closed events, but I haven't yet tested to see if this would be possible.  Part of me quite likes containing all the logic in the Cake script, but I guess there is a higher overhead to pay to use the Docker container for Cake if it isn't actually required.  Something to look into for future tests.
