---
Title: Introducing the Cake.Eazfuscator.Net Addin
Published: 20/06/2018
Tags:
- Cake
- Cake-Contrib
- Eazfuscator.Net
- Addins
- Automation
- Build
---

# What is it?

[Cake.Eazfuscator.Net](https://github.com/cake-contrib/Cake.Eazfuscator.Net) is a Cake Addin which provides the ability to execute the [Eazfuscator.Net.exe](https://www.gapotchenko.com/eazfuscator.net).  This is a tool that allows you to securely obfuscate your generated code, so that you can protect your investment in your code base.

# Usage

To get started using this addin, all you need to do is add the following to your Cake script:

```csharp
#addin "nuget:https://www.nuget.org/api/v2?package=Cake.Eazfuscator.Net&version=0.1.0"
```

**NOTE:** Depending on the currently released version, you might want to change the above to reflect the current version number. The above is shown to ensure that the best practice of pinning your Cake Addin version numbers is adhered to.

With that done, you can perform a basic obfuscation of your code base using the following:

```csharp
var CERT_PATH = EnvironmentVariable("PATH_TO_CERTIFICATE") ?? "";

Task("ObfuscateExecutable")
    .WithCriteria(() => {
        return !string.IsNullOrWhiteSpace(CERT_PATH) && FileExists(CERT_PATH);
    })
    .Does(() =>
    {
        var filesToObfuscate = new List<FilePath>();
        filesToObfuscate.Add("YourExecutable.exe");

        var settings = new EazfuscatorNetSettings();
        settings.KeyFile = CERT_PATH;

        EazfuscatorNet(filesToObfuscate, settings);
});
```

This will result in the selected file(s) being obfuscated, using the settings defined (most likely) in the AssemblyInfo.cs file for the project.

There are various settings available which can additionally control how the obfuscation is performed.

# Documentation

You can find additional documentation for this addin here:

https://cake-contrib.github.io/Cake.Eazfuscator.Net/

# Source Code

The source code for this addin can be found here:

https://github.com/cake-contrib/Cake.Eazfuscator.Net

## Chat Room

If you have any questions about this addin, then please feel to drop into the Gitter Chat room for all the addins and modules which exist in the [cake-contrib organisation](https://github.com/cake-contrib) on GitHub:

[![Join the chat at https://gitter.im/cake-contrib/Lobby](https://badges.gitter.im/cake-contrib/Lobby.svg)](https://gitter.im/cake-contrib/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
