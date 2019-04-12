---
Title: Talk at DDD 12
Published: 12/6/2017
Tags:
- ddd
- reading
- github
- gitversion
- gitreleasemanager
- semantic versioning
---

On the 10th June 2017, I had the privelege of being asked to present a session at [DDD 12](http://developerdeveloperdeveloper.com/).  This is a free full day conference that takes place in the Microsoft Offices at Thames Valley Park in Reading.

The talk that I presented was:

> Control your GitHub releases with GitVersion and GitReleaseManager

and the abstract was as follows:

> Have you ever needed to control the version number of your open source application on GitHub? If so, you will likely know that it can be hard! You may have tried to use some form of auto incrementing number, or stored the version in a text file hoping that someone will remember to update it. Both of these approaches (and there are plenty others) will work, but they are fragile, and don’t account for some of the more complicated scenarios.

> And then, after controlling the version number, you then want to generate Release Notes for that newly released version.  How can you do this without manually trawling through the revision history?

> In this session, we will look at how we can improve the versioning strategy of your application using a combination of branching strategy (Gitflow), Semantic Versioning, an open source tool called GitVersion, and the commit history of your Git repository.  With the version number in place, we will then use the Issue and Milestone tracking functionality in GitHub to automatically generate a set of concise release notes using a tool called GitReleaseManager.

This was the first time that I had presented this talk, and overall, I was very happy with how it went.  This time around, after seeing [@fekberg](https://twitter.com/fekberg) doing the same thing at a DDD conference last year, I opted to record the session on my laptop, and also on an external microphone, so that there would be a record of it.  If you weren't able to attend the session, or are simply interested in checking it out, you can find the video on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SlM02V1tkSc" frameborder="0" allowfullscreen></iframe>

The GitHub repository that the presentation is driven from can be found [here](https://github.com/gep13/GitHubReleaseDemos).
