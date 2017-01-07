#tool nuget:?package=Wyam&prerelease
#addin nuget:?package=Cake.Wyam&prerelease
#addin nuget:?package=Cake.FileHelpers

//////////////////////////////////////////////////////////////////////
// ARGUMENTS
//////////////////////////////////////////////////////////////////////

var target = Argument("target", "Default");

//////////////////////////////////////////////////////////////////////
// PREPARATION
//////////////////////////////////////////////////////////////////////

var isLocal = BuildSystem.IsLocalBuild;
var isRunningOnUnix = IsRunningOnUnix();
var isRunningOnWindows = IsRunningOnWindows();
var isRunningOnAppVeyor = AppVeyor.IsRunningOnAppVeyor;
var isPullRequest = AppVeyor.Environment.PullRequest.IsPullRequest;
var accessToken = EnvironmentVariable("access_token");
var userProfileFolder = Directory(EnvironmentVariable("USERPROFILE"));

//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////

Task("Clean")
    .WithCriteria(isRunningOnAppVeyor)
    .Does(() =>
    {
        EnsureDirectoryExists("./../Output");
        EnsureDirectoryExists("./../Wyam");
    });

Task("Build")
    .IsDependentOn("Clean")
    .Does(() =>
    {
        Wyam(new WyamSettings
        {
            Recipe = "Blog",
            Theme = "CleanBlog",
            OutputPath = isRunningOnAppVeyor ? "../Output" : null
        });        
    });
    
Task("Deploy")
    .WithCriteria(isRunningOnAppVeyor)
    .WithCriteria(!string.IsNullOrEmpty(accessToken))
    .IsDependentOn("Build")
    .Does(() =>
    {
        RunCommand("git", "config --global credential.helper store");
        RunCommand("git", "config --global user.email \"gep13@gep13.co.uk\"");
        RunCommand("git", "config --global user.name \"Gary Ewan Park\"");
        FileAppendText(((DirectoryPath)userProfileFolder).CombineWithFilePath(".git-credentials"), string.Format("https://{0}:x-oauth-basic@github.com{1}", accessToken, Environment.NewLine));
        RunCommand("git", "checkout gh-pages");
        RunCommand("git", "rm -rf .");
        CopyFiles(".*", "../Output");
        RunCommand("echo", "www.gep13.co.uk > CNAME");
        RunCommand("git", "remote set-url origin https://github.com/gep13/gep13.github.io.git");
        RunCommand("git", "add -A");
        RunCommand("git", "commit -a -m \"Commit from AppVeyor\"");
        RunCommand("git", "push");
    });

Task("Preview")
    .Does(() =>
    {
        Wyam(new WyamSettings
        {
            Recipe = "Blog",
            Theme = "CleanBlog",
            Preview = true,
            Watch = true
        });        
    });
    
//////////////////////////////////////////////////////////////////////
// TASK TARGETS
//////////////////////////////////////////////////////////////////////

Task("Default")
    .IsDependentOn("Preview");    
    
Task("AppVeyor")
    .IsDependentOn("Deploy");

//////////////////////////////////////////////////////////////////////
// HELPER METHODS
//////////////////////////////////////////////////////////////////////

void RunCommand(string command, string arguments)
{
    StartProcess(command, new ProcessSettings()
    {
        Arguments = arguments
    });
}

//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

RunTarget(target);
