---
Title: Cake Visual Studio Extension Release 0.3.0
Published: 21/12/2020
Tags:
- cake
- visual studio
- extension
- release
---

After working on it for a little bit during my Monday night streams, I am happy to announce that we have shipped the 0.3.0 release of the Cake Extension for Visual Studio.  This includes support for Visual Studio 2029.

## Release Notes

### Breaking changes

- [__#115__](https://github.com/cake-build/cake-vs/issues/115) Remove usage of Experimental option passed to Cake
- [__#114__](https://github.com/cake-build/cake-vs/issues/114) Remove support for Visual Studio 2015

### Features

- [__#110__](https://github.com/cake-build/cake-vs/issues/110) Add support for Visual Studio 2019
- [__#105__](https://github.com/cake-build/cake-vs/pull/105) Initial support for overriding the location of cake.exe the TRX uses
- [__#104__](https://github.com/cake-build/cake-vs/issues/104) Add solution item template
- [__#103__](https://github.com/cake-build/cake-vs/pull/103) Update to new VS2019 SDKs and APIs. Migrate to an AsyncPackage load.
- [__#79__](https://github.com/cake-build/cake-vs/issues/79) Add an option to set the "cake.exe" absolute or relative path

### Bugs

- [__#121__](https://github.com/cake-build/cake-vs/issues/121) Exception when cake.config file doesn't exist
- [__#97__](https://github.com/cake-build/cake-vs/issues/97) Unable to add a binding to the Project Open event

### Improvements

- [__#120__](https://github.com/cake-build/cake-vs/issues/120) Switch to using consistent -- arguments
- [__#119__](https://github.com/cake-build/cake-vs/issues/119) Add download commands for additional bootstrapper files
- [__#118__](https://github.com/cake-build/cake-vs/issues/118) Add missing preprocessor key words
- [__#116__](https://github.com/cake-build/cake-vs/issues/116) Support usage of .Net Tool for Cake
- [__#101__](https://github.com/cake-build/cake-vs/issues/101) Update extension to use new VSSDK APIs

## Release Video

Here is a short video highlighting what is included in this release:

<iframe width="560" height="315" src="https://www.youtube.com/embed/fG93MjnxHoo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>