#tool nuget:?package=Wyam&prerelease
#tool nuget:?package=KuduSync.NET
#addin nuget:?package=Cake.Wyam&prerelease
#addin nuget:?package=Cake.Git
#addin nuget:?package=Cake.Kudu

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
var deployRemote = EnvironmentVariable("git_deploy_remote");
var deployBranch = EnvironmentVariable("git_deploy_branch");
var outputPath = MakeAbsolute(Directory("./Output"));
var wyamPath = MakeAbsolute(Directory("./Wyam"));

//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////

Task("Clean")
    .WithCriteria(isRunningOnAppVeyor)
    .Does(() =>
    {
        EnsureDirectoryExists(outputPath);
        EnsureDirectoryExists(wyamPath);
    });

Task("Build")
    .IsDependentOn("Clean")
    .Does(() =>
    {
        Wyam(new WyamSettings
        {
            Recipe = "Blog",
            Theme = "CleanBlog",
            OutputPath = outputPath
        });        
    });
    
Task("Deploy")
    .WithCriteria(isRunningOnAppVeyor)
    .WithCriteria(!string.IsNullOrEmpty(accessToken))
    .WithCriteria(!string.IsNullOrEmpty(deployRemote))
    .WithCriteria(!string.IsNullOrEmpty(deployBranch))
    .IsDependentOn("Build")
    .Does(() =>
    {
        var sourceCommit = GitLogTip("./");
        var publishFolder = MakeAbsolute(Directory("publish")).Combine(DateTime.Now.ToString("yyyyMMdd_HHmmss"));
        EnsureDirectoryExists(publishFolder);
        Information("Getting publish branch...");
        GitClone(deployRemote, publishFolder, new GitCloneSettings{ BranchName = deployBranch });

        Information("Sync output files...");
        Kudu.Sync(outputPath, publishFolder, new KuduSyncSettings { 
            ArgumentCustomization = args=>args.Append("--ignore").AppendQuoted(".git;CNAME")
        });

        Information("Stage all changes...");
        GitAddAll(publishFolder);

        Information("Commit all changes...");
        GitCommit(
            publishFolder,
            sourceCommit.Committer.Name,
            sourceCommit.Committer.Email,
            string.Format("AppVeyor Publish: {0}\r\n{1}", sourceCommit.Sha, sourceCommit.Message)
            );

        Information("Pushing all changes...");
        GitPush(publishFolder, accessToken, "x-oauth-basic", deployBranch);
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
    .IsDependentOn(isPullRequest ? "Build" : "Deploy");

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
