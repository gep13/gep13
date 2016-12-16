---
Title: Does your development rig support SLAT?
Published: 14/9/2012
Tags:
- Desktop
- Laptop
- SLAT
- Windows Phone 8
---

Have you checked to make sure that your development rig supports SLAT?  Do you even know what SLAT is?  I didn’t until today, and it looks like I am going to have to upgrade at least one of my machines.

# What is SLAT?

SLAT is referring to Second Level Address Translation, and it is a:

> ...form of hardware virtualization that is included in newer version of Intel and AMD Processors, such as Intel’s Core i3, i5 and i7 processors and AMD;s Barcelona processors.

For more information on exactly what this means, take a look at this [blog post](http://blogs.microsoft.co.il/blogs/talsa/archive/2012/03/15/windows-8-server-hyper-v-will-require-slat-second-level-address-translation.aspx) from Tal Sarid.

# Why do I care?

The reason that this is going to be a big deal for me, and why I am going to have to buy some new hardware is that the Windows Phone 8 emulator uses Hyper-V, and as a result, I am going to need hardware that supports SLAT if I want to run that emulator.  For more information on this, take a look at this [wpcentral blog post](http://www.wpcentral.com/windows-phone-8-emulator%E2%80%99s-hardware-requirements).

# How can I check whether my hardware supports SLAT?

Thanks for Mark Russinovich, there is a Sysinternals tool called Coreinfo, which will tell you whether your current hardware can support SLAT.  See Ryan Lowdermilk’s [blog post here](http://www.ryanlowdermilk.com/2012/09/does-my-computer-support-slat/) for the exact steps that you need to follow.

# My results

For my desktop machine, which in fairness is VERY old, SLAT is not supported:

![SLAT not support on Desktop](https://gep13wpstorage.blob.core.windows.net/gep13/2012/9/14/Desktop_Output.png)

The good news however is that SLAT is supported on my laptop:

![SLAT is support on Laptop](https://gep13wpstorage.blob.core.windows.net/gep13/2012/9/14/Laptop_Output.png)

NOTE: The important thing that you need to look for (for Intel chips) is the asterisk next to EPT.

**UPDATE:** Based on the comment from Andy Westgarth below, if you are running coreinfo.exe on a machine that already has Hyper-V installed, you will get a different message returned.  Be careful to read all the output from this command.  When Hyper-V was installed on my new machine, this is the output that I got:

![Update](https://gep13wpstorage.blob.core.windows.net/gep13/2012/9/14/2012-09-27_2033.png)

Note the important text:

_**"Coreinfo must be executed on a system without a hypervisor running for accurate results."**_
