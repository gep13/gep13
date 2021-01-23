---
Title: Cake.Recipe Release 1.0.0
Published: 23/04/2019
Tags:
- cake
- cake.recipe
- release
---

## Release Notes

**NOTE:** Version 1.0.0 of Cake.Recipe is intended to __only__ be used with Cake 0.32.1.  Using anything else will result in an error being thrown during the Setup phase of the build.  This coupling between Cake.Recipe and Cake is a requirement, and future releases of Cake.Recipe will support different versions of Cake.

### Breaking changes

- [__#223__](https://github.com/cake-contrib/Cake.Recipe/issues/223) Cake 0.28.0 CakeTaskBuild API breaking change
- [__#218__](https://github.com/cake-contrib/Cake.Recipe/pull/218) removes <ActionTask> from tasks.cake

### Features

- [__#310__](https://github.com/cake-contrib/Cake.Recipe/issues/310) Add helper task for creating default labels using GitReleaseManager
- [__#219__](https://github.com/cake-contrib/Cake.Recipe/issues/219) Integrate Cake.Issues
- [__#153__](https://github.com/cake-contrib/Cake.Recipe/issues/153) Add support for running integration tests
- [__#149__](https://github.com/cake-contrib/Cake.Recipe/issues/149) Add Cake.Graph tasks to Cake.Recipe
- [__#127__](https://github.com/cake-contrib/Cake.Recipe/issues/127) Support for Transifex
- [__#105__](https://github.com/cake-contrib/Cake.Recipe/issues/105) Add Cake.Codecov
- [__#101__](https://github.com/cake-contrib/Cake.Recipe/issues/101) Support a build that only builds nuget packages
- [__#92__](https://github.com/cake-contrib/Cake.Recipe/issues/92) Add Cake.CodeAnalysisReporting
- [__#88__](https://github.com/cake-contrib/Cake.Recipe/issues/88) Provide ability to insert custom tasks into build process
- [__#68__](https://github.com/cake-contrib/Cake.Recipe/issues/68) Add support for Fixie.
- [__#30__](https://github.com/cake-contrib/Cake.Recipe/issues/30) Add execution of GitLink
- [__#26__](https://github.com/cake-contrib/Cake.Recipe/issues/26) Add option to automatically load reports in browser
- [__#23__](https://github.com/cake-contrib/Cake.Recipe/issues/23) Include documentation generation using Wyam
- [__#22__](https://github.com/cake-contrib/Cake.Recipe/issues/22) Upload reports to artifacts
- [__#21__](https://github.com/cake-contrib/Cake.Recipe/issues/21) Allow ability to control whether publishing steps happen
- [__#20__](https://github.com/cake-contrib/Cake.Recipe/issues/20) Add ability to download releasenotes
- [__#10__](https://github.com/cake-contrib/Cake.Recipe/issues/10) Add .NET core Support
- [__#8__](https://github.com/cake-contrib/Cake.Recipe/issues/8) Add support for Cake.MicrosoftTeams
- [__#7__](https://github.com/cake-contrib/Cake.Recipe/issues/7) Add suport for VS test

### Bugs

- [__#306__](https://github.com/cake-contrib/Cake.Recipe/issues/306) Fix issue with replacing Cake.Recipe for integration tests
- [__#304__](https://github.com/cake-contrib/Cake.Recipe/issues/304) Fix Integration Tests
- [__#296__](https://github.com/cake-contrib/Cake.Recipe/issues/296) Transifex appears to require credentials for pulling translations
- [__#246__](https://github.com/cake-contrib/Cake.Recipe/issues/246) Sending message to Gitter is broken
- [__#245__](https://github.com/cake-contrib/Cake.Recipe/issues/245) Sending message to Twitter is broken
- [__#238__](https://github.com/cake-contrib/Cake.Recipe/issues/238) clearcache broken
- [__#210__](https://github.com/cake-contrib/Cake.Recipe/issues/210) tools/*.csproj are included when packing by var projects = GetFiles(BuildParameters.SourceDirectoryPath + "/**/*.csproj")
- [__#194__](https://github.com/cake-contrib/Cake.Recipe/issues/194) MSTest unit test fail.
- [__#166__](https://github.com/cake-contrib/Cake.Recipe/issues/166) Add FrameworkPathOverride when running on Mono
- [__#161__](https://github.com/cake-contrib/Cake.Recipe/issues/161) Exceptions thrown by OpenCover should cause the unit test task to fail
- [__#160__](https://github.com/cake-contrib/Cake.Recipe/issues/160) DirectoryNotFoundException in DotNetCore-Test
- [__#155__](https://github.com/cake-contrib/Cake.Recipe/issues/155) Modify integration test logic
- [__#137__](https://github.com/cake-contrib/Cake.Recipe/issues/137) Problem running unit tests
- [__#129__](https://github.com/cake-contrib/Cake.Recipe/issues/129) Using custom solution file path throws an error when using gitlink
- [__#126__](https://github.com/cake-contrib/Cake.Recipe/issues/126) DotNetCore restore should set Version
- [__#122__](https://github.com/cake-contrib/Cake.Recipe/issues/122) Uses deleted version of GitLink
- [__#119__](https://github.com/cake-contrib/Cake.Recipe/issues/119) Error in DupFinder "Project 'nuspec' root directory doesn't exist"
- [__#108__](https://github.com/cake-contrib/Cake.Recipe/issues/108) Analyze Task should run after Build
- [__#95__](https://github.com/cake-contrib/Cake.Recipe/issues/95) Fix issue with GitLink when building in x64 mode
- [__#76__](https://github.com/cake-contrib/Cake.Recipe/issues/76) Typo in fixie implemntation
- [__#51__](https://github.com/cake-contrib/Cake.Recipe/issues/51) Fix loading of Reports on error
- [__#38__](https://github.com/cake-contrib/Cake.Recipe/issues/38) Only run GitLink when not a PR

### Improvements

- [__#358__](https://github.com/cake-contrib/Cake.Recipe/issues/358) Update nuspec metadata
- [__#354__](https://github.com/cake-contrib/Cake.Recipe/issues/354) Setup task fails on certain linux distros when GitVersion is enabled
- [__#353__](https://github.com/cake-contrib/Cake.Recipe/issues/353) Change wording on messages to indicate that NuGet packages are almost ready
- [__#307__](https://github.com/cake-contrib/Cake.Recipe/issues/307) Update Cake.Incubator to 3.1.0
- [__#295__](https://github.com/cake-contrib/Cake.Recipe/pull/295) Use PackageReference when checking if it's test project
- [__#247__](https://github.com/cake-contrib/Cake.Recipe/issues/247) Use Cake.Recipe with custom branch names
- [__#221__](https://github.com/cake-contrib/Cake.Recipe/issues/221) Ability to configure TreatWarningsAsErrors property
- [__#204__](https://github.com/cake-contrib/Cake.Recipe/issues/204) Allow running GitVersion on non Windows Platform
- [__#198__](https://github.com/cake-contrib/Cake.Recipe/issues/198) Update wyam version to 1.2
- [__#196__](https://github.com/cake-contrib/Cake.Recipe/issues/196) Upgrade version of Cake.Graph to 0.4.0 and switch to Mermaid syntax
- [__#189__](https://github.com/cake-contrib/Cake.Recipe/pull/189) Adds generic packages directory.
- [__#187__](https://github.com/cake-contrib/Cake.Recipe/issues/187) Only run Chocolatey Tasks when running on Windows
- [__#184__](https://github.com/cake-contrib/Cake.Recipe/issues/184) OpenCover only works on Windows
- [__#182__](https://github.com/cake-contrib/Cake.Recipe/issues/182) DupFinder and InspectCode only run on Windows
- [__#180__](https://github.com/cake-contrib/Cake.Recipe/issues/180) Add support for XBuild
- [__#177__](https://github.com/cake-contrib/Cake.Recipe/issues/177) Respect Cake config
- [__#174__](https://github.com/cake-contrib/Cake.Recipe/issues/174) Remove hard coding of Cake.Example.Tests
- [__#173__](https://github.com/cake-contrib/Cake.Recipe/pull/173) Improve default coverage filter
- [__#168__](https://github.com/cake-contrib/Cake.Recipe/issues/168) Display version number during setup
- [__#165__](https://github.com/cake-contrib/Cake.Recipe/issues/165) Make Twitter and Gitter announcements messages configurable
- [__#157__](https://github.com/cake-contrib/Cake.Recipe/issues/157) Remove dependency on Cake.CodeAnalysisReporting
- [__#145__](https://github.com/cake-contrib/Cake.Recipe/issues/145) InspectCode & DupFinder give warning for projects set for latest version of Visual Studio
- [__#144__](https://github.com/cake-contrib/Cake.Recipe/issues/144) Pass Platform Target to ParseProject
- [__#143__](https://github.com/cake-contrib/Cake.Recipe/issues/143) Allow setting of MSBuild Version to use for build
- [__#140__](https://github.com/cake-contrib/Cake.Recipe/issues/140) Add Cake.Recipe integration tests
- [__#138__](https://github.com/cake-contrib/Cake.Recipe/issues/138) Can't specify NuGet feeds
- [__#136__](https://github.com/cake-contrib/Cake.Recipe/issues/136) Cake.Recipe do not work with cake 0.21.0+
- [__#132__](https://github.com/cake-contrib/Cake.Recipe/issues/132) Add support for custom paths to test projects
- [__#131__](https://github.com/cake-contrib/Cake.Recipe/pull/131) Update GitVersion configuration to allow access to private repositories from AppVeyor.
- [__#121__](https://github.com/cake-contrib/Cake.Recipe/issues/121) Not all dependencies are present in _PublishedApplications for netcoreapp
- [__#120__](https://github.com/cake-contrib/Cake.Recipe/issues/120) Would it be possible to use the Cake Contrib Icon for your NuGet Package?
- [__#117__](https://github.com/cake-contrib/Cake.Recipe/issues/117) Should be able to control whether or not to run DupFinder and InspectCode
- [__#109__](https://github.com/cake-contrib/Cake.Recipe/issues/109) Refactor UploadCoverageReportTask
- [__#106__](https://github.com/cake-contrib/Cake.Recipe/issues/106) Treat Upload-Coverage-Report as a publishing step
- [__#104__](https://github.com/cake-contrib/Cake.Recipe/issues/104) Document Publishing issue when there are no changes to commit
- [__#103__](https://github.com/cake-contrib/Cake.Recipe/issues/103) Make Cake.Recipe use Cake.Recipe to build itself
- [__#102__](https://github.com/cake-contrib/Cake.Recipe/issues/102) Add boolean values to control whether attempts should be made on publishing tasks
- [__#97__](https://github.com/cake-contrib/Cake.Recipe/issues/97) Ignore shproj
- [__#91__](https://github.com/cake-contrib/Cake.Recipe/issues/91) Don't include global namespace in Wyam generated documentation
- [__#90__](https://github.com/cake-contrib/Cake.Recipe/issues/90) Add Title to Wyam generated site
- [__#89__](https://github.com/cake-contrib/Cake.Recipe/issues/89) GitReleaseManager - pre-release flag
- [__#86__](https://github.com/cake-contrib/Cake.Recipe/pull/86) Only commit and push if local changes exist
- [__#85__](https://github.com/cake-contrib/Cake.Recipe/issues/85) Clean up nupkg files left in tools folder
- [__#84__](https://github.com/cake-contrib/Cake.Recipe/issues/84) Support ability to only load the tools that are actually required
- [__#82__](https://github.com/cake-contrib/Cake.Recipe/issues/82) Extend ToolSettings for additional DupFinder settings
- [__#79__](https://github.com/cake-contrib/Cake.Recipe/issues/79) Don't notify Gitter/Twitter for beta releases
- [__#67__](https://github.com/cake-contrib/Cake.Recipe/issues/67) Allow tagging of release and hotfix branches to also trigger deployments
- [__#63__](https://github.com/cake-contrib/Cake.Recipe/pull/63) Support restoring from the same MyGet feed packages are pushed to
- [__#58__](https://github.com/cake-contrib/Cake.Recipe/issues/58) Store build log in build artifacts
- [__#56__](https://github.com/cake-contrib/Cake.Recipe/issues/56) Update to latest Cake.Wyam
- [__#55__](https://github.com/cake-contrib/Cake.Recipe/issues/55) Add default region name for DupFinder overrides
- [__#54__](https://github.com/cake-contrib/Cake.Recipe/pull/54) Update Cake.Git to the latest version
- [__#53__](https://github.com/cake-contrib/Cake.Recipe/pull/53) Update Cake.Slack to latest version
- [__#50__](https://github.com/cake-contrib/Cake.Recipe/issues/50) Find and execute VSTests
- [__#49__](https://github.com/cake-contrib/Cake.Recipe/issues/49) Preserve folder structure when copying files
- [__#46__](https://github.com/cake-contrib/Cake.Recipe/issues/46) Correctly handle when there is no DotSettings file present
- [__#45__](https://github.com/cake-contrib/Cake.Recipe/issues/45) Make MSBuild CPU Count a BuildParameter
- [__#44__](https://github.com/cake-contrib/Cake.Recipe/issues/44) Set MSBuild to use max # of CPUs when building
- [__#39__](https://github.com/cake-contrib/Cake.Recipe/issues/39) Infer Wyam Variables from other input values
- [__#34__](https://github.com/cake-contrib/Cake.Recipe/issues/34) Handle errors in project parsing
- [__#32__](https://github.com/cake-contrib/Cake.Recipe/issues/32) Allow ability to control Wyam Configuration File
- [__#31__](https://github.com/cake-contrib/Cake.Recipe/issues/31) Remove hard coding of docs
- [__#28__](https://github.com/cake-contrib/Cake.Recipe/issues/28) Provide ability to force documentation publishing
- [__#27__](https://github.com/cake-contrib/Cake.Recipe/issues/27) Only generate documentation when docs folder exists
- [__#24__](https://github.com/cake-contrib/Cake.Recipe/issues/24) Update to latest ReSharper Command Line Tools
- [__#19__](https://github.com/cake-contrib/Cake.Recipe/issues/19) Provide ability to specify PlatformTarget for MSBuild
- [__#18__](https://github.com/cake-contrib/Cake.Recipe/issues/18) Remove dependency on gep13.ApplicationRunner and gep13.xUnitRunner
- [__#16__](https://github.com/cake-contrib/Cake.Recipe/issues/16) Remove the need to set all project level variables
- [__#15__](https://github.com/cake-contrib/Cake.Recipe/issues/15) Remove the need to settings build actions
- [__#14__](https://github.com/cake-contrib/Cake.Recipe/issues/14) Add a ToolSettings class for allow settings of tool configuration
- [__#13__](https://github.com/cake-contrib/Cake.Recipe/issues/13) Make Parameters static, similar to Environment
- [__#12__](https://github.com/cake-contrib/Cake.Recipe/issues/12) Move all environment variables to separate class

### Documentation

- [__#357__](https://github.com/cake-contrib/Cake.Recipe/issues/357) Include recommended version of Cake in Release Notes
- [__#300__](https://github.com/cake-contrib/Cake.Recipe/issues/300) Document requirements for using Cake.Recipe on different OSes
- [__#190__](https://github.com/cake-contrib/Cake.Recipe/issues/190) Add documentation for code coverage reporting issues with .Net Core
- [__#71__](https://github.com/cake-contrib/Cake.Recipe/issues/71) Add documentation how to create a release
- [__#52__](https://github.com/cake-contrib/Cake.Recipe/pull/52) Fix typo
- [__#42__](https://github.com/cake-contrib/Cake.Recipe/issues/42) Correct missing Wyam settings on force publish

## Release Video

Here is a short video highlighting what is included in this release:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hrs9F79eAFI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>