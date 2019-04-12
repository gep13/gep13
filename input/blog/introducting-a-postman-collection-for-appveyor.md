---
Title: Introducing a Postman Collection for AppVeyor
Published: 18/8/2017
Tags:
- appveyor
- api
- postman
- json
---

For a while now, I have been hacking on the AppVeyor API.  This has been in order to setup some automation between the various GitHub Teams that I have, and the AppVeyor Roles that allow access to the projects in AppVeyor.  This can of course be done manually, but when you start having over 30 teams, and over 70 projects, this becomes a bit of a problem.

While doing this, I found myself continually referring to the [AppVeyor Documentation](https://www.appveyor.com/docs/api/) which is actually very good, and then doing little tests here and there using [Postman](https://www.getpostman.com/) to verify things that I was trying to automate.

It got to the point where I had created the same request a couple of times on different days, so it was time to do something else, as this was wasted effort!

So, without further ado, let me introduce a [Postman Collection](https://github.com/gep13/appveyor-postman) for all the requests that you can make against the AppVeyor API.

A video explaining what this is, and how you can use it, can be seen here:

<iframe width="853" height="480" src="https://www.youtube.com/embed/U8mVjJxt_ts" frameborder="0" allowfullscreen></iframe>

Going forward, I intend to keep this collection up to date with any new API requests that are added to AppVeyor.

Please let me know if you have any comments or suggestions on how this can be improved.
