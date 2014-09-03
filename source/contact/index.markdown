---
author: gep13
layout: page
title: "Contact"
date: 2014-09-02 21:05
comments: false
sharing: false
footer: true
---

<script type="text/javascript">
  window.onload = (function(){
      if(window.location.hash == '#thank-you'){
      document.getElementById('thank-you-message').className = 'none';
      }
      })
</script>

Feel free to use any of the links on the left of this page to get in touch with me, or you can use the form below.

<p id='thank-you-message' class='hidden' style='color:green;'>
  Thank you for contacting me, I'll get back to you, as soon as I can.
</p>
<hr />

<form action="http://getsimpleform.com/messages?form_api_token=1d1302c59aefb2d17cab29b91f47bee9" method="post" class="contact pure-form pure-form-aligned">
	<input type='hidden' name='redirect_to' value='http://www.gep13.co.uk/contact#thank-you' />
    <fieldset class='pure-group'>
        <input autofocus='autofocus' class='pure-input-1' name='name' placeholder='Your Name' required='required' type='text' />
        <input class='pure-input-1' name='email' placeholder='Email Address' required='required' type='email' />
    </fieldset>
    <fieldset class='pure-group'>
        <textarea class='pure-input-1' name='message' placeholder='Your Message' required='required' rows='8'> </textarea>
    </fieldset>
    <button class='pure-button pure-input-1' type='submit'>Send Message</button>
</form>