/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'gep13'; // required: replace example with your forum shortname
var disqus_identifier = '@Context.GetLink(Model, true)' + 'S/';
var disqus_title = '@Model.String(BlogKeys.Title)';
var disqus_url = '@Context.GetLink(Model, true)' + '/';
/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
