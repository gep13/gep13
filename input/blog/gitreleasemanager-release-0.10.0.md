---
Title: GitReleaseManager Release 0.10.0
Published: 13/01/2020
Tags:
- gitreleasemanager
- github
- release notes
- release
---

## Release Notes

### Features

- [__#145__](https://github.com/GitTools/GitReleaseManager/issues/145) Refactor project to allow management of releases on other platforms
- [__#139__](https://github.com/GitTools/GitReleaseManager/issues/139) Support for discarding a draft release
- [__#128__](https://github.com/GitTools/GitReleaseManager/issues/128) Allow the ability to comment on issues/prs that is resolved as part of the release

### Bugs

- [__#159__](https://github.com/GitTools/GitReleaseManager/issues/159) GitReleaseManager create creates multiple draft releases on multiple runs
- [__#149__](https://github.com/GitTools/GitReleaseManager/issues/149) grm showconfig do not show boolean configurations when value is `false`
- [__#88__](https://github.com/GitTools/GitReleaseManager/issues/88) Config shouldn't be case sensitive
- [__#87__](https://github.com/GitTools/GitReleaseManager/issues/87) ReleaseNotesBuilder does not resolve number of commits since prev milestone

### Improvements

- [__#192__](https://github.com/GitTools/GitReleaseManager/pull/192) Bump CommandLineParser from 2.6.0 to 2.7.82
- [__#179__](https://github.com/GitTools/GitReleaseManager/issues/179) Update logging mechanism to make use of Serilog
- [__#170__](https://github.com/GitTools/GitReleaseManager/issues/170) Issue a warning when yaml configuration file isn't being used
- [__#158__](https://github.com/GitTools/GitReleaseManager/issues/158) Deprecate the use of username+password when using GitHub API
- [__#151__](https://github.com/GitTools/GitReleaseManager/issues/151) Use yaml formatter when creating the initial `grm` configuration sample
- [__#142__](https://github.com/GitTools/GitReleaseManager/issues/142) Switch to using embedded package icon for NuGet Packages
- [__#140__](https://github.com/GitTools/GitReleaseManager/issues/140) Add integration tests for gep13/FakeRepository
- [__#108__](https://github.com/GitTools/GitReleaseManager/issues/108) No indication if file to upload to GitHub doesn't exist locally
- [__#72__](https://github.com/GitTools/GitReleaseManager/issues/72) Release is created when no closed issues exist in a milestone
- [__#38__](https://github.com/GitTools/GitReleaseManager/issues/38) Add a logo

### Documentation

- [__#169__](https://github.com/GitTools/GitReleaseManager/issues/169) Document Label command
- [__#144__](https://github.com/GitTools/GitReleaseManager/issues/144) Add issue templates to GitHub repository