---
Title: Cake Visual Studio Code Extension Release 1.0.0
Published: 1/12/2020
Tags:
- cake
- visual studio code
- extension
- release
---

The 1.0.0 release of the Cake Extension for Visual Studio Code has been a little while in the making, but I am excited to finally get it released.  There have been some amazing contributions to it from the community, so huge thanks for all the help!

## Release Notes

### Features

- [__#99__](https://github.com/cake-build/cake-vscode/issues/99) Add DocumentSymbolProvider for Cake Scripts to enable breadcrumb and outline functionality
- [__#81__](https://github.com/cake-build/cake-vscode/issues/81) Add descriptions and enum values to vscode cake settings on package.json
- [__#32__](https://github.com/cake-build/cake-vscode/issues/32) Add ProblemMatcher to new TaskProvider

### Bugs

- [__#354__](https://github.com/cake-build/cake-vscode/issues/354) "debug task" codelens doesn't work
- [__#308__](https://github.com/cake-build/cake-vscode/issues/308) Cannot read property 'Tools' of undefined while trying to debug
- [__#105__](https://github.com/cake-build/cake-vscode/issues/105) Clicking "run task" should also save the file if needed
- [__#93__](https://github.com/cake-build/cake-vscode/issues/93) Adding a tool/addin from the commandlet reformats the cake file

### Improvements

- [__#461__](https://github.com/cake-build/cake-vscode/issues/461) cake.taskRunner.launchCommand still defaults to using a bootstrapper
- [__#460__](https://github.com/cake-build/cake-vscode/issues/460) When installing .Net Global Tool check if newer version exists and prompt for installation
- [__#456__](https://github.com/cake-build/cake-vscode/pull/472) Bump adm-zip from 0.5.0 to 0.5.1
- [__#454__](https://github.com/cake-build/cake-vscode/pull/454) Bump typescript from 4.0.5 to 4.1.2
- [__#438__](https://github.com/cake-build/cake-vscode/issues/438) "Run Task" shows potentially confusing options, when multiple cake files are present
- [__#432__](https://github.com/cake-build/cake-vscode/issues/432) Ability to download bootstrappers for all supported runners
- [__#429__](https://github.com/cake-build/cake-vscode/issues/429) 'Add [tool|addin] from nuget' should save the Cake script if it's already open.
- [__#420__](https://github.com/cake-build/cake-vscode/pull/420) Bump xml2js from 0.4.19 to 0.4.23
- [__#409__](https://github.com/cake-build/cake-vscode/issues/409) Does not support Bootstrapping for .NET Core Tool out of box
- [__#376__](https://github.com/cake-build/cake-vscode/issues/376) Debug should use Cake.Tool instead of Cake.CoreCLR
- [__#339__](https://github.com/cake-build/cake-vscode/pull/339) Bump request from 2.88.0 to 2.88.2
- [__#143__](https://github.com/cake-build/cake-vscode/issues/143) Allow for files other then build.ps1/build.sh

### Security

- [__#401__](https://github.com/cake-build/cake-vscode/pull/401) Bump node-fetch from 2.6.0 to 2.6.1
- [__#392__](https://github.com/cake-build/cake-vscode/pull/392) [Security] Bump lodash from 4.17.15 to 4.17.20
- [__#285__](https://github.com/cake-build/cake-vscode/pull/285) [Security] Bump https-proxy-agent from 2.2.1 to 2.2.3

## Release Video

Here is a short video highlighting what is included in this release:

<iframe width="560" height="315" src="https://www.youtube.com/embed/7Ba-pAHzO9w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>