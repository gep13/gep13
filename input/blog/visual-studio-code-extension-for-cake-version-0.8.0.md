---
Title: Version 0.8.0 of the Visual Studio Code extension for Cake
Published: 21/7/2017
Tags:
- Extension
- Visual Studio Code
- Cake
---

We are very happy to announce that a new version, 0.8.0, of the Visual Studio Code extension for Cake has just been released.  This release includes two main new features and one improvement.  These features really came about with the [June release](https://code.visualstudio.com/updates/v1_14#_tasks) of Visual Studio Code, which brought with it a new Tasks API, making it possible for extension authors to "auto detect" tasks for execution.

# More information...

I have created a short video which walks through the new features that are included in this release.  If you have any comments, please feel to reach out to discuss.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zzZuysl3xSg" frameborder="0" allowfullscreen></iframe>

# What was included in this release?

__Features__

- [__#27__](https://github.com/cake-build/cake-vscode/issues/27) Support ability to setup/install debugging dependencies
- [__#14__](https://github.com/cake-build/cake-vscode/issues/14) Add ability to parse cake file(s) for tasks

__Improvement__

- [__#3__](https://github.com/cake-build/cake-vscode/issues/3) Support deactivation of extension

# How does this new version help me?

The features in this release are intended to help remove some of the manual steps that are required to both execute and debug tasks within your Cake scripts.  For example, rather than having to type out the build command, along with the target name, you can now simply click on the name for a list of all available targets.  In addition, rather than having to go through all the steps listed in this [blog post](http://cakebuild.net/blog/2016/09/debug-cake-vscode) to configure debugging of Cake scripts, it is now simply 2 or 3 clicks away.

# Getting Help...

This was my first real foray into Visual Studio Code Extension development, and also TypeScript, so to say that I was stumbling at the first hurdle would be an understatement.  I have to say though, the Visual Studio Code development team, in particular [Erich Gamma](https://twitter.com/erichgamma), are amazingly helpful.  As a result after:

* 3 Stack Overflow Questions
  * https://stackoverflow.com/questions/45159393
  * https://stackoverflow.com/questions/45111482
  * https://stackoverflow.com/questions/45090999
* GitHub conversations
  * https://github.com/Microsoft/vscode/issues/11565
* Twitter Conversations
  * https://twitter.com/ErichGamma/status/885822561136803840
  * https://twitter.com/ErichGamma/status/887315128022159361

I actually had something that worked!  Thank you to everyone on the team for their help with getting this release out!