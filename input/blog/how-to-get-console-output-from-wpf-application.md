---
Title: How to get console output from a WPF application
Published: 16/7/2018
Tags:
- WPF
- Console
- Chocolatey GUI
---

While implementing a recent feature addition to [Chocolatey GUI](https://github.com/chocolatey/ChocolateyGUI/pull/613), I stumbled across something that I thought was blog worthy, so I thought I would add some notes here for future me.

## The problem

Chocolatey GUI is a WPF application, but the feature that was being added here was the ability to execute Chocolatey GUI from the command line in order to enable/disable features within the application.  i.e. you will be able to run commands like the following:

```powershell
chocolateygui feature enable -n=<featureName>
chocolateygui feature disable -n=<featureName>
chocolateygui feature list
```

When I first started writing this feature, I thought that this was going to be simple.  What I didn't know is that when compiled with an `OutputType` of `WinExe`, which a WPF application is, it doesn't output anything to the console.  As a result, trying to do something like:

```csharp
Console.Write("This is a test");
```

results in nothing happening.  There are also no errors at runtime, so it is not immediately clear what is going on.

## The solution

Thankfully, after searching around, it was clear that I wasn't the first person to stumble into this.  There are a number of different solutions out there (including attempting to attach to the existing console, creating a new console, etc.), however, none of them felt quite right until I found this article:

https://blog.rsuter.com/write-application-can-act-console-application-wpf-gui-application/

Huge thanks to Rico Suter for this!

The magic sauce that makes this work is this:

```csharp
    [DllImport("kernel32.dll", SetLastError = true, ExactSpelling = true)]
    static extern bool FreeConsole();
```

This pinvoke call is completely opposite to how I was originally thinking about it.  Rather than attempting to attach to an existing console, or create a new one, this technique starts out assuming that there is a console, and if that console isn't required, get rid of it.  i.e. `FreeConsole`.

In order for this to work, it is necessary to change the output type of you WPF project to be a Console Application, and also add an `InitialzeComponent()` call.

For Chocolatey GUI, the startup code then looks like the following:

```csharp
        public App()
        {
            InitializeComponent();
        }

        internal static SplashScreen SplashScreen { get; set; }

        [STAThread]
        public static void Main(string[] args)
        {
            if (args.Length != 0)
            {
                // Run as Console Application
                ParseArgumentsAndRunCommand(args);
            }
            else
            {
                // Run as WPF Application
                FreeConsole();

                // Do Stuff
            }
        }

        [DllImport("kernel32.dll", SetLastError = true, ExactSpelling = true)]
        private static extern bool FreeConsole();

```

Check the [Pull Request](https://github.com/chocolatey/ChocolateyGUI/pull/613) to Chocolatey GUI for the complete implementation.
