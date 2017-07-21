---
Title: "Contact"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.5.0/pure-min.css">

<script type="text/javascript">
  window.onload = (function(){
      if(window.location.hash == '#thank-you'){
      document.getElementById('thank-you-message').className = 'none';
      }
  })
</script>

Feel free to use any of the social links on this <a href="http://www.gep13.co.uk/about">page</a> to get in touch with me, or you can use the form below.

<p id='thank-you-message' class='hidden' style='color:green;'>
  Thank you for contacting me, I'll get back to you, as soon as I can.
</p>
<hr />

<form action="https://getsimpleform.com/messages?form_api_token=1d1302c59aefb2d17cab29b91f47bee9" method="post" class="contact pure-form pure-form-aligned">
	<input type='hidden' name='redirect_to' value='https://www.gep13.co.uk/contact#thank-you' />
    <fieldset class='pure-group'>
        <input autofocus='autofocus' class='pure-input-1' name='name' placeholder='Your Name' required='required' type='text' />
        <input class='pure-input-1' name='email' placeholder='Email Address' required='required' type='email' />
    </fieldset>
    <fieldset class='pure-group'>
        <textarea class='pure-input-1' name='message' placeholder='Your Message' required='required' rows='8'> </textarea>
    </fieldset>
    <button class='pure-button pure-input-1' type='submit'>Send Message</button>
</form>