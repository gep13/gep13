---
Title: Using a WP7 to automate my house…
Published: 14/5/2011
Tags:
- HttpWebRequest
- Windows Phone 7
- Wireless Router
---

Ok, that is clearly a little bit of an exaggeration, I haven’t automated my whole house, but I have automated a very small portion of it. What am I talking about? And why am I writing a blog about it? Read on, and all will be revealed :)

Last weekend while I was at [DDD Scotland](http://www.gep13.co.uk/blog/?p=210) I got talking to [@richardadalton](http://twitter.com/#!/richardadalton) and during an enthralling conversation about the Commodore 64 (I really think I want to fire up my old C64, but I am worried about whether it would blow up cause it’s so old. I could always get myself one of [these](http://www.commodoreusa.net/CUSA_C64.aspx) though), I got a phone call from my wife asking if I would “switch of the internet”, to which I responded with, “sure, no problem”, and I promptly did so. 

Now bear in mind, I was 150 miles away at the time. How did I do this? Using my Windows Phone 7 of course! 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb3.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image3.png)

I should clarify that in my house, switching off the internet actually translates as switching off the wireless antenna of our ADSL Router. The need to do this stems from the fact that we use a wireless TV sender to take the Sky Television signal from the Sky+ box downstairs to the television upstairs, and when the wireless antenna in the ADSL router is on, we get interference on the upstairs television.

Now, as I can hear [@barryoconnor](http://twitter.com/#!/barryoconnor) saying, “why not just get Sky Multi-Room?” The reason is two fold. 1) We don’t watch enough TV upstairs to warrant another feed, and more importantly 2) I am cheap ![Smile](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/wlEmoticon-smile1.png)

To start with, the solution to this problem was to simply kill the power to the wireless router. However, this was bad for a couple reasons. Firstly, it isn’t great for the device itself, just having the power pulled from it. And secondly, switching off the power stopped all inbound traffic, which given that I run a couple services from a server in my house, isn’t ideal. Also, the five minutes it takes to switch on another computer, to log into the router to switch it off is just too much like hard work!

NOTE: I tried every combination of wireless channel on both the router and the wireless sender, and none of them stopped the interference.

Jump forward a couple months, and a new solution presented itself in the form of a Windows Phone 7 application, which you can see a screen shot of above. This is a VERY simple application, and I certainly won’t be winning any prizes for design, but it serves it’s purpose. So, what does it do?

The router that I own, like many others, has a built in web server, that allows the administration of the device using a web interface. By logging into this web interface, and cracking open [Fiddler](http://www.fiddler2.com/fiddler2/), I was able to figure out the necessary HTTP Post data in order to enable and disable the wireless antenna of the device. With this information, I was then able to create an [HttpWebRequest](http://msdn.microsoft.com/en-us/library/system.net.httpwebrequest.aspx) in code with the required settings to actually enable/disable the wireless router from the button click on the Windows Phone 7. Below the buttons is a WebBrowser control which is used to simply show the response that is received from the request, as due to timeouts and other interwebs going ons, the first request doesn’t always work.

A recent refactoring of the project included creating a Web Service to do the actual work of talking to the Router, and all my Phone application has to do is call the Web Service methods.

An earlier Windows Mobile 6.5 version of this application went as far as to intercept incoming text messages with a known format from another phone to enable/disable the wireless antenna, but the Windows Phone 7 API does not expose the ability to intercept text messages (hopefully this will be available in later versions of the OS).

There are a couple extensions that I would like to add to this application, such as finding out the current state of the wireless router, i.e. enabled/disabled, but as yet, I haven’t had time to get round to it. One day…

For a slightly shorter explanation of how all this works, have a look [here](http://www.tweetdeck.com/twitter/richardadalton/~PAHAI).

If anyone out there wants some more information on this insanely over complicated set up, feel free to get in touch.
