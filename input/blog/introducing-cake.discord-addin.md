---
Title: Introducing the Cake.Discord
Published: 28/10/2018
Tags:
- Cake
- Cake-Contrib
- Discord
- Addins
- Automation
- Build
---

# What is it?

[Cake.Discord](https://www.nuget.org/packages/Cake.Discord/) is an addin for Cake that allows you to send messages to a Discord Channel on a Server.  This allows for example sending a notification to a channel when a build fails, or succeeds.  Or perhaps when a new release of an application has been created.

**NOTE:** While it is possible to send much more complicated messages to a Discord server, this initial release of the addin only caters for the basic versions of the messages.

# Usage

To get started using this addin, all you need to do is add the following to your Cake script:

```csharp
#addin "nuget:https://www.nuget.org/api/v2?package=Cake.Discord&version=0.1.0"
```

With that done, you can then send a basic message using something like the following:

```csharp
Information("This is a 'normal' message...");

var postMessageResult = Discord.Chat.PostMessage(
    webHookUrl:"https://your_web_hook_url",
    content:"This is a normal message."
);

if (postMessageResult.Ok)
{
    Information("Message {0} successfully sent", postMessageResult.TimeStamp);
}
else
{
    Error("Failed to send message: {0}", postMessageResult.Error);
}
```

It is also possible to send a more complex message using something like the following:

```csharp
Information("This is a custom avatar and name message...");

var postMessageResult = Discord.Chat.PostMessage(
    webHookUrl:"https://your_web_hook_url",
    content:"This is a custom avatar and name message.",
    messageSettings: new DiscordChatMessageSettings {
        UserName = "gep13",
        AvatarUrl = new Uri("https://avatars0.githubusercontent.com/u/1271146?s=400&v=4")
    }
);

if (postMessageResult.Ok)
{
    Information("Message {0} successfully sent", postMessageResult.TimeStamp);
}
else
{
    Error("Failed to send message: {0}", postMessageResult.Error);
}
```

# Documentation

You can find additional documentation for this addin here:

https://cake-contrib.github.io/Cake.Discord/

# Source Code

The source code for this addin can be found here:

https://github.com/cake-contrib/Cake.Discord

## Chat Room

If you have any questions about this addin, then please feel to drop into the Gitter Chat room for all the addins and modules which exist in the [cake-contrib organisation](https://github.com/cake-contrib) on GitHub:

[![Join the chat at https://gitter.im/cake-contrib/Lobby](https://badges.gitter.im/cake-contrib/Lobby.svg)](https://gitter.im/cake-contrib/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Other Notification Addins

This addin adds to the collection of addins which help with sending notifications out to the various platforms that exist.  For example, there are addins to help with sending notifications to:

* [CakeMail](https://github.com/cake-contrib/Cake.CakeMail/)
* [Email](https://github.com/cake-contrib/Cake.Email/)
* [Gitter](https://github.com/cake-contrib/Cake.Gitter/)
* [HipChat](https://github.com/cake-contrib/Cake.HipChat/)
* [Jira](https://github.com/Ninglin/Cake.Jira/)
* [Microsoft Teams](https://github.com/cake-contrib/Cake.MicrosoftTeams/)
* [SendGrid](https://github.com/cake-contrib/Cake.SendGrid/)
* [Slack](https://github.com/cake-contrib/Cake.Slack/)
* [Twitter](https://github.com/cake-contrib/Cake.Twitter/)

Are there any other notification systems that you feel should be catered for in Cake?  If so, feel free to reach out, or create your own.
