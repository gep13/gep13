---
Title: Visual Studio 2010 Compare and Merge Tool Configuration
Published: 15/3/2011
Tags:
- kdiff
- team foundation server
- visual studio 2010
- winmerge
---

Out of the box, Visual Studio offers up the ability to compare and merge files. This ability is invaluable when you are trying to check something in, and there have been changes since you last checked in and you need to merge the changes, or you want to look at the differences in a file between check ins.

However, it has been my experience that the built in tools are just not that great, and there are better tools out there. My tools of choice are [kdiff](http://kdiff3.sourceforge.net/) and [winmerge](http://winmerge.org/).

The good news is that with a few simple steps, these tools can be added into the Visual Studio configuration so that the built in operations of comparing and merging use these tools, rather than the built in ones.

**Note: I am assuming that you are using Visual Studio 2010 and Visual Studio Team Foundation Server as your Source Control Provider and Windows 7 64 Bit Edition. If you are using anything other than this, the screenshots and the paths to executables may be different.**

Follow these steps to configure this:

- Install WinMerge
- Install KDIff3
- Open Visual Studio 2010
- Select Tools | Options and in the tree, select “Source Control”
- Change the "Current source control plug-in" DropDownList to be "Visual Studio Team Foundation Server"

    ![Options](https://gep13wpstorage.blob.core.windows.net/gep13/2011/3/15/image1.png)

- Select "Visual Studio Team Foundation Server" in the tree under "Source Control"
- Click the "Configure User Tools..." button

    ![Options](https://gep13wpstorage.blob.core.windows.net/gep13/2011/3/15/image2.png)

- Click the "Add..." button

    ![Configure User Tools](https://gep13wpstorage.blob.core.windows.net/gep13/2011/3/15/image3.png)

- For the "Extension" put ".*" (without the quotes)
- For the "Operation" put "Compare"
- For the "Command" put "C:\Program Files (x86)\WinMerge\WinMergeU.exe" (without the quotes)
- For the "Arguments" put "/ub /dl %6 /dr %7 %1 %2" (without the quotes)
- Hit "OK"

    ![Configure Tool](https://gep13wpstorage.blob.core.windows.net/gep13/2011/3/15/image4.png)

- Click the "Add..." button
- For the "Extension" put ".*" (without the quotes)
- For the "Operation" put "Merge"
- For the "Command" put “C:\Program Files (x86)\KDiff3\kdiff3.exe" (without the quotes)
- For the "Arguments" put "%3 --fname %8 %2 --fname %7 %1 --fname %6 -o %4" (without the quotes)
- Hit "OK"

    ![Configure Tool](https://gep13wpstorage.blob.core.windows.net/gep13/2011/3/15/image5.png)

- Hit "OK"
- Hit "OK"
