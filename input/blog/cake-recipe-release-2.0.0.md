---
Title: Cake.Recipe Release 2.0.0
Published: 05/10/2020
Tags:
- cake
- cake.recipe
- release
---

## Release Notes

### Breaking changes

- [__#604__](https://github.com/cake-contrib/Cake.Recipe/issues/604) Parameter shouldRunGitVersion should be renamed
- [__#603__](https://github.com/cake-contrib/Cake.Recipe/issues/603) shouldRunGitVersion should be true by default
- [__#581__](https://github.com/cake-contrib/Cake.Recipe/issues/581) Remove GitHub Password usage
- [__#559__](https://github.com/cake-contrib/Cake.Recipe/issues/559) Enable publishing to codecov.io by default
- [__#557__](https://github.com/cake-contrib/Cake.Recipe/issues/557) Remove usage of ReSharperReports
- [__#555__](https://github.com/cake-contrib/Cake.Recipe/issues/555) Switch away from ContinuousIntegration target name
- [__#550__](https://github.com/cake-contrib/Cake.Recipe/issues/550) Remove support and tasks for Fixie unit tests
- [__#548__](https://github.com/cake-contrib/Cake.Recipe/issues/548) Enable deterministic builds when running on a CI system
- [__#523__](https://github.com/cake-contrib/Cake.Recipe/issues/523) When building .Net Core projects prefer .Net Global Tool when available
- [__#448__](https://github.com/cake-contrib/Cake.Recipe/issues/448) Don't always delete nupkgs at the end of the build
- [__#446__](https://github.com/cake-contrib/Cake.Recipe/issues/446) Remove GitLink from Cake.Recipe execution
- [__#401__](https://github.com/cake-contrib/Cake.Recipe/issues/401) Reference to tool GitVersion.CommandLine in tools.cake needs to be updated
- [__#359__](https://github.com/cake-contrib/Cake.Recipe/issues/359) Remove Cake.Graph from Cake.Recipe execution
- [__#313__](https://github.com/cake-contrib/Cake.Recipe/issues/313) Support Cake 0.33.0
- [__#259__](https://github.com/cake-contrib/Cake.Recipe/issues/259) Using of Cake.Recipe is tightly coupled with AppVeyor

### Features

- [__#696__](https://github.com/cake-contrib/Cake.Recipe/pull/696) Add rule URL resolver for CakeContrib-Guidelines
- [__#615__](https://github.com/cake-contrib/Cake.Recipe/issues/615) Add possibility to generate documentation on source-changes
- [__#599__](https://github.com/cake-contrib/Cake.Recipe/issues/599) Allow specifying which CI platform should be used for publishing
- [__#598__](https://github.com/cake-contrib/Cake.Recipe/issues/598) Allow disabling or overriding the framework path override
- [__#597__](https://github.com/cake-contrib/Cake.Recipe/issues/597) Support passing argument to toggle between stable and pre-release release notes
- [__#571__](https://github.com/cake-contrib/Cake.Recipe/issues/571) Create task for enabling coverlet and adding the necessary workaround for enabling deterministic build
- [__#531__](https://github.com/cake-contrib/Cake.Recipe/issues/531) Create build provider for GitHub Actions
- [__#464__](https://github.com/cake-contrib/Cake.Recipe/issues/464) Create Local Build Provider
- [__#462__](https://github.com/cake-contrib/Cake.Recipe/issues/462) Create TeamCity BuildProvider
- [__#356__](https://github.com/cake-contrib/Cake.Recipe/issues/356) Add support for code coverage using coverlet
- [__#309__](https://github.com/cake-contrib/Cake.Recipe/issues/309) Allow skipping Choco task
- [__#214__](https://github.com/cake-contrib/Cake.Recipe/issues/214) Be able to override tools version
- [__#188__](https://github.com/cake-contrib/Cake.Recipe/issues/188) Add TravisCI Task
- [__#9__](https://github.com/cake-contrib/Cake.Recipe/issues/9) Add support for Email Notifications

### Bugs

- [__#687__](https://github.com/cake-contrib/Cake.Recipe/issues/687) Publishing Docs no longer works, when repositoryName is not specified explicitly
- [__#684__](https://github.com/cake-contrib/Cake.Recipe/issues/684) When previewing wyam documentation, the source-code documentation is missing
- [__#677__](https://github.com/cake-contrib/Cake.Recipe/issues/677) Publishing docs to github-pages does not work, when title and repositoryName do not match
- [__#661__](https://github.com/cake-contrib/Cake.Recipe/pull/661) (maint) Add missing string split options
- [__#524__](https://github.com/cake-contrib/Cake.Recipe/issues/524) Problem uploading Coverlet Coverage reports to coveralls.io
- [__#520__](https://github.com/cake-contrib/Cake.Recipe/issues/520) Pass API Key when pushing to Azure DevOps
- [__#506__](https://github.com/cake-contrib/Cake.Recipe/issues/506) DotNetCore-Pack creates unix incompatible .net core global tools if version has uppercase characters
- [__#502__](https://github.com/cake-contrib/Cake.Recipe/issues/502) Restoring packages for .NET Core only restores for debug builds
- [__#492__](https://github.com/cake-contrib/Cake.Recipe/issues/492) 429 Conflict when pushing packages
- [__#397__](https://github.com/cake-contrib/Cake.Recipe/issues/397) FileNotFound exception when running integration tests
- [__#80__](https://github.com/cake-contrib/Cake.Recipe/issues/80) Nupkg uploaded to wrong GitHub release
- [__#60__](https://github.com/cake-contrib/Cake.Recipe/issues/60) Fix usage of Cake.Recipe on Travis

### Improvements

- [__#697__](https://github.com/cake-contrib/Cake.Recipe/issues/697) Reference to tool JetBrains.ReSharper.CommandLineTools in toolsettings.cake needs to be updated
- [__#690__](https://github.com/cake-contrib/Cake.Recipe/pull/690) Update Cake.Issues.Recipe to 0.4.3
- [__#675__](https://github.com/cake-contrib/Cake.Recipe/issues/675) Reference to addin Cake.Transifex in addins.cake needs to be updated
- [__#667__](https://github.com/cake-contrib/Cake.Recipe/issues/667) Reference to tool ReportGenerator in toolsettings.cake needs to be updated
- [__#666__](https://github.com/cake-contrib/Cake.Recipe/issues/666) Reference to addin Cake.Kudu in addins.cake needs to be updated
- [__#665__](https://github.com/cake-contrib/Cake.Recipe/issues/665) Reference to tool dotnet-reportgenerator-globaltool in toolsettings.cake needs to be updated
- [__#656__](https://github.com/cake-contrib/Cake.Recipe/issues/656) Reference to tool codecov in toolsettings.cake needs to be updated
- [__#655__](https://github.com/cake-contrib/Cake.Recipe/issues/655) Reference to tool Codecov.Tool in toolsettings.cake needs to be updated
- [__#650__](https://github.com/cake-contrib/Cake.Recipe/issues/650) Reference to addin Cake.Coverlet in addins.cake needs to be updated
- [__#628__](https://github.com/cake-contrib/Cake.Recipe/issues/628) Builds fail on Linux systems requiring a different version of LibGit2 when running under .NET Core cake
- [__#626__](https://github.com/cake-contrib/Cake.Recipe/issues/626) Restore the NuGet tool when no existing executable can be found
- [__#619__](https://github.com/cake-contrib/Cake.Recipe/issues/619) Reference to tool GitVersion.Tool in toolsettings.cake needs to be updated
- [__#614__](https://github.com/cake-contrib/Cake.Recipe/issues/614) Reference to addin Cake.Email in addins.cake needs to be updated
- [__#578__](https://github.com/cake-contrib/Cake.Recipe/issues/578) When building source code when not using git, build should still succeed
- [__#568__](https://github.com/cake-contrib/Cake.Recipe/issues/568) Create log file when running dotnet build
- [__#536__](https://github.com/cake-contrib/Cake.Recipe/issues/536) Allow ability to override check for supported Cake version
- [__#535__](https://github.com/cake-contrib/Cake.Recipe/issues/535) Should be able to control whether or not to run Coveralls
- [__#533__](https://github.com/cake-contrib/Cake.Recipe/issues/533) Support any patch release of Cake for the current major-minor version
- [__#527__](https://github.com/cake-contrib/Cake.Recipe/issues/527) Upload coverage reports to AppVeyor
- [__#522__](https://github.com/cake-contrib/Cake.Recipe/issues/522) Update defaults to nuget push sources
- [__#521__](https://github.com/cake-contrib/Cake.Recipe/issues/521) Fix Non Deterministic error shown in NuGet Package Explorer
- [__#519__](https://github.com/cake-contrib/Cake.Recipe/issues/519) Allow usage of more then one prerelease nuget source that uses username/password
- [__#514__](https://github.com/cake-contrib/Cake.Recipe/issues/514) Reference to tool Fixie in toolsettings.cake needs to be updated
- [__#513__](https://github.com/cake-contrib/Cake.Recipe/issues/513) Update default wyam edit url to use develop property
- [__#504__](https://github.com/cake-contrib/Cake.Recipe/issues/504) Reference to tool GitReleaseManager in toolsettings.cake needs to be updated
- [__#499__](https://github.com/cake-contrib/Cake.Recipe/issues/499) Reference to tool KuduSync.NET in toolsettings.cake needs to be updated
- [__#452__](https://github.com/cake-contrib/Cake.Recipe/issues/452) Tasks defined in GitReleaseManager.cake do not support 2FA
- [__#447__](https://github.com/cake-contrib/Cake.Recipe/issues/447) Remove reference to MyGet and change terminology around NuGet and Chocolatey
- [__#379__](https://github.com/cake-contrib/Cake.Recipe/issues/379) Use msbuild on unix when it is installed
- [__#374__](https://github.com/cake-contrib/Cake.Recipe/issues/374) Do not restore packages during DotNetCore-Build task
- [__#370__](https://github.com/cake-contrib/Cake.Recipe/issues/370) Allow users to specify directory to restore packages to for .NET Core
- [__#366__](https://github.com/cake-contrib/Cake.Recipe/issues/366) Latest version of Codecov provides support for unix
- [__#299__](https://github.com/cake-contrib/Cake.Recipe/issues/299) Trigger notifications (twitter, gitter, etc.) upon successful nuget task, not just on successful build
- [__#252__](https://github.com/cake-contrib/Cake.Recipe/issues/252) Use binary logging for MSBuild
- [__#250__](https://github.com/cake-contrib/Cake.Recipe/issues/250) Add Cake.Issues.PullRequests.AppVeyor
- [__#217__](https://github.com/cake-contrib/Cake.Recipe/issues/217) Versioning - Add ability to override generating versioning information
- [__#215__](https://github.com/cake-contrib/Cake.Recipe/issues/215) Remove use of deprecated CustomProjectParserResult.OutputPath
- [__#152__](https://github.com/cake-contrib/Cake.Recipe/issues/152) Target Cake.Tool
- [__#112__](https://github.com/cake-contrib/Cake.Recipe/issues/112) Enable option to build source nuget packages
- [__#62__](https://github.com/cake-contrib/Cake.Recipe/issues/62) Publish all artifacts to AppVeyor for PRs
- [__#48__](https://github.com/cake-contrib/Cake.Recipe/issues/48) Should be able to not include SourceFiles - Wyam

### Documentation

- [__#680__](https://github.com/cake-contrib/Cake.Recipe/issues/680) Publishing Documentation from GitHub Actions fails when running on Windows OS
- [__#672__](https://github.com/cake-contrib/Cake.Recipe/pull/672) (docs) Minor fixes to documentation
- [__#612__](https://github.com/cake-contrib/Cake.Recipe/issues/612) Document upgrade path from 1.x of Cake.Recipe to 2.x
- [__#475__](https://github.com/cake-contrib/Cake.Recipe/pull/475) Remove Graph documentation
- [__#371__](https://github.com/cake-contrib/Cake.Recipe/issues/371) Add documentation about known issue regarding xunit tests when targeting .NET Full Framework
- [__#151__](https://github.com/cake-contrib/Cake.Recipe/issues/151) Include all available options commented out in setup.cake
- [__#36__](https://github.com/cake-contrib/Cake.Recipe/issues/36) Add documentation about what Cake.Recipe is and is not