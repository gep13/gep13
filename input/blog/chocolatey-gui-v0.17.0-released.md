---
Title: Chocolatey GUI v0.17.0 released
Published: 26/03/2020
Tags:
- chocolateygui
- release
---

## Release Notes

### Features

- [__#710__](https://github.com/chocolatey/ChocolateyGUI/issues/710) Add ability to show/hide download count on remote source view
- [__#698__](https://github.com/chocolatey/ChocolateyGUI/issues/698) Create and publish additional NuGet packages for Chocolatey GUI
- [__#679__](https://github.com/chocolatey/ChocolateyGUI/issues/679) Provide integration with chocolateygui.extension
- [__#673__](https://github.com/chocolatey/ChocolateyGUI/issues/673) Create commands to allow purging of caches from CLI
- [__#671__](https://github.com/chocolatey/ChocolateyGUI/issues/671) Provide ability to purge Outdated Package cache file
- [__#629__](https://github.com/chocolatey/ChocolateyGUI/issues/629) Separate the app.manifest from the exe [Customer]
- [__#627__](https://github.com/chocolatey/ChocolateyGUI/issues/627) Provide ability to hide packages that are known to already be installed when viewing sources
- [__#624__](https://github.com/chocolatey/ChocolateyGUI/issues/624) Provide ability to refresh cached icons for packages when there are known changes to icon
- [__#603__](https://github.com/chocolatey/ChocolateyGUI/issues/603) Remove admin only sources/repos
- [__#592__](https://github.com/chocolatey/ChocolateyGUI/issues/592) Allow setting of Chocolatey GUI settings via Chocolatey package parameter
- [__#588__](https://github.com/chocolatey/ChocolateyGUI/issues/588) Search in all available repositories
- [__#569__](https://github.com/chocolatey/ChocolateyGUI/issues/569) Hide Download Counters
- [__#432__](https://github.com/chocolatey/ChocolateyGUI/issues/432) Limit non-admin list to self service only

### C4B Features

- [__#705__](https://github.com/chocolatey/ChocolateyGUI/issues/705) Add footer with information about current version in bottom left hand corner
- [__#704__](https://github.com/chocolatey/ChocolateyGUI/issues/704) Add ability to strong name sign the output of the build

### Bugs

- [__#716__](https://github.com/chocolatey/ChocolateyGUI/issues/716) PackageParameters are not working (when installing Chocolatey GUI via Chocolatey)
- [__#709__](https://github.com/chocolatey/ChocolateyGUI/issues/709) Context menu not displayed
- [__#686__](https://github.com/chocolatey/ChocolateyGUI/issues/686) Correctly handle incorrect license installation
- [__#676__](https://github.com/chocolatey/ChocolateyGUI/issues/676) Packages with pre-release versioning never found on list/search
- [__#674__](https://github.com/chocolatey/ChocolateyGUI/issues/674) Empty icon doesn't appear on local source view
- [__#661__](https://github.com/chocolatey/ChocolateyGUI/issues/661) IsPrerelease property is never set
- [__#656__](https://github.com/chocolatey/ChocolateyGUI/issues/656) nuspec - Remove the upper bound dependency on Chocolatey
- [__#653__](https://github.com/chocolatey/ChocolateyGUI/issues/653) Fix prerelease packages not being correctly labeled as "outdated"
- [__#652__](https://github.com/chocolatey/ChocolateyGUI/issues/652) Tile View - Nitpick inconsistent spacing
- [__#643__](https://github.com/chocolatey/ChocolateyGUI/issues/643) Fix NotSupportedException:'System.NotSupportedException: UriTypeConverter cannot convert from (null) when viewing Package Details
- [__#632__](https://github.com/chocolatey/ChocolateyGUI/issues/632) nuspec - Add .NET Framework 4.x Dependency [Customer]
- [__#620__](https://github.com/chocolatey/ChocolateyGUI/issues/620) Unable to update source after making a change to another source [Customer]
- [__#618__](https://github.com/chocolatey/ChocolateyGUI/issues/618) Tile selection for Remote Sources is not being used
- [__#610__](https://github.com/chocolatey/ChocolateyGUI/issues/610) Unable to install a package that uses 64bit PowerShell Modules
- [__#593__](https://github.com/chocolatey/ChocolateyGUI/issues/593) Fix locking of generated packages.config file when exporting package list
- [__#590__](https://github.com/chocolatey/ChocolateyGUI/issues/590) Next/Previous First/Last buttons remain disabled when using Simple.Server [Customer]
- [__#589__](https://github.com/chocolatey/ChocolateyGUI/issues/589) Chocolatey GUI icon is a blank image
- [__#585__](https://github.com/chocolatey/ChocolateyGUI/issues/585) GUI misses update that shows in CLI
- [__#584__](https://github.com/chocolatey/ChocolateyGUI/issues/584) Chocolatey GUI crashes when opening details page for Rufus package
- [__#578__](https://github.com/chocolatey/ChocolateyGUI/issues/578) Chocolatey GUI crashes when viewing Package Details
- [__#573__](https://github.com/chocolatey/ChocolateyGUI/issues/573) Package shows as installed in GUI when it did not actually install [Customer]
- [__#568__](https://github.com/chocolatey/ChocolateyGUI/issues/568) Chocolatey GUI crashes on startup if all sources are disabled.
- [__#563__](https://github.com/chocolatey/ChocolateyGUI/issues/563) Chocolatey GUI v0.16.0 uninstall errors (but uninstalls)
- [__#562__](https://github.com/chocolatey/ChocolateyGUI/issues/562) Fix links in Settings/About page that result in "Page Not Found" errors
- [__#558__](https://github.com/chocolatey/ChocolateyGUI/issues/558) Fix icon not showing up in gallery
- [__#550__](https://github.com/chocolatey/ChocolateyGUI/issues/550) Package source link for ChocolateyGUI 0.15.0 in nuspec is wrong
- [__#548__](https://github.com/chocolatey/ChocolateyGUI/issues/548) Context Menu Position issue in the package details.
- [__#525__](https://github.com/chocolatey/ChocolateyGUI/issues/525) On Load of any source, outdated is running (logging) every time
- [__#506__](https://github.com/chocolatey/ChocolateyGUI/issues/506) Fix issue where Latest Version is not showing
- [__#502__](https://github.com/chocolatey/ChocolateyGUI/issues/502) Disable "Show Only Packages with Updates" while information is still loaded

### Improvements

- [__#711__](https://github.com/chocolatey/ChocolateyGUI/issues/711) Prelease label should not be red as this suggests an error, which isn't the case
- [__#682__](https://github.com/chocolatey/ChocolateyGUI/issues/682) Move Windows specific code into another Common library
- [__#680__](https://github.com/chocolatey/ChocolateyGUI/issues/680) Remove tilting chocolatey logo
- [__#675__](https://github.com/chocolatey/ChocolateyGUI/issues/675) Split CLI functionality into separate exe
- [__#672__](https://github.com/chocolatey/ChocolateyGUI/issues/672) Allow "safe" Chocolatey operations to happen in parallel
- [__#670__](https://github.com/chocolatey/ChocolateyGUI/issues/670) Update to Chocolatey.Lib 0.10.15
- [__#668__](https://github.com/chocolatey/ChocolateyGUI/issues/668) Ensure all dialogs shown in Chocolatey GUI have localised text on buttons
- [__#665__](https://github.com/chocolatey/ChocolateyGUI/issues/665) Do not display password in source settings screen
- [__#651__](https://github.com/chocolatey/ChocolateyGUI/issues/651) Tile View - Prevent Version text overlap
- [__#633__](https://github.com/chocolatey/ChocolateyGUI/issues/633) Ensure that icons maintain their aspect ratio
- [__#612__](https://github.com/chocolatey/ChocolateyGUI/pull/612) Improve UI for Feature and Settings lists
- [__#608__](https://github.com/chocolatey/ChocolateyGUI/pull/608) Upgrade MahApps.Metro and MahApps.Metro.IconPacks
- [__#607__](https://github.com/chocolatey/ChocolateyGUI/issues/607) Remove multiple uses of SetCustomLogging
- [__#606__](https://github.com/chocolatey/ChocolateyGUI/issues/606) Don't allow navigation to settings or about screen while dialog is open
- [__#605__](https://github.com/chocolatey/ChocolateyGUI/issues/605) Improve the descriptions/explanations used for Chocolatey GUI settings
- [__#598__](https://github.com/chocolatey/ChocolateyGUI/issues/598) Provide separate settings and about views
- [__#574__](https://github.com/chocolatey/ChocolateyGUI/issues/574) Chocolatey GUI not found in the PATH
- [__#564__](https://github.com/chocolatey/ChocolateyGUI/issues/564) Chocolatey GUI pulls download stats only from the community feed
- [__#530__](https://github.com/chocolatey/ChocolateyGUI/issues/530) Move version on Package view to the left column
- [__#528__](https://github.com/chocolatey/ChocolateyGUI/issues/528) Improve UI by reducing flashing when modal appears
- [__#501__](https://github.com/chocolatey/ChocolateyGUI/issues/501) Package description should use all available client space
- [__#431__](https://github.com/chocolatey/ChocolateyGUI/issues/431) Add different background for outdated packages
- [__#430__](https://github.com/chocolatey/ChocolateyGUI/issues/430) Package details view is missing the 'Gallery' link
- [__#422__](https://github.com/chocolatey/ChocolateyGUI/issues/422) Current prerelease does not display any versioning information in the ABOUT screen
- [__#356__](https://github.com/chocolatey/ChocolateyGUI/issues/356) Fix rendering of headings in package description
- [__#270__](https://github.com/chocolatey/ChocolateyGUI/issues/270) Add option to show package id column

### Documentation

- [__#729__](https://github.com/chocolatey/ChocolateyGUI/pull/729) Add Czech language map
- [__#693__](https://github.com/chocolatey/ChocolateyGUI/issues/693) Fix typo in readme
- [__#634__](https://github.com/chocolatey/ChocolateyGUI/pull/634) Added Chinese language map
- [__#583__](https://github.com/chocolatey/ChocolateyGUI/pull/583) Fix typo in about page