---
Title: Use a bit.ly pro account to shorten url's with a custom domain
Published: 4/2/2011
Tags:
- bit.ly
- bit.ly pro
- seesmic
- url shortening
---

I recently found out (thanks @stack72) that it was possible to register for a bit.ly pro account, which would allow you to set up a custom short domain for shortening url's in things like twitter and blogs posts.

You might have seen this in the links that the likes that Scott Hanselman uses, for instance http://hnsl.mn/...  He specifically registered the domain hnsl.mn (which is his last name without the vowels).  Whenever he adds a link to a tweet, the full url gets shortened and uses his base custom domain to identify that it came from him.

When I first saw this, I thought that you would have to pay for the privilege, but that is not the case (aside from the initial cost of the purchase of the domain that is).

The steps are fairly simple, and break down like this:

1. Purchase your custom short domain.  Personally, I went for gep13.me
1. [Register for a bit.ly pro account](http://bit.ly/a/pro_request)
1. Once the registration completes, and is authorised, you will have access to configure your custom domain
1. You will be prompted to change the A record for your domain to point at the bit.ly servers
1. Once you have done that, you will have to verify these settings (you will like need to wait a while, like I did, for the DNS change to filter through the DNS servers across the world, before bit.ly can see it)
1. With that in place, you can configure the Dashboard Tracking Domain that you want to use, for me, I just used my own domain
1. Then, you are all set, all you need to do after that is configure your favourite package to use it.  Again, for me, this is Seesmic, and all I had to do here is take the bit.ly API Key from within bit.ly and paste it into Seesmic

From now on, any link that I shorten through Seesmic will always start with gep13.me.

Simples!
