# defer: 
  The defer attribute in JavaScript is used with the <script> tag to ensure that the script is executed after 
  the HTML document has been completely parsed. Here are the key points about the defer attribute:

# How defer Works
1) HTML Parsing Continues: When the browser encounters a <script> tag with the defer attribute, it continues to parse 
   the HTML document without waiting for the script to download and execute.

2) Script Execution Order: Scripts with the defer attribute are executed in the order they appear in the document, 
   after the HTML parsing is complete.

3) DOM Ready: Deferred scripts are guaranteed to run after the entire document has been parsed but before the 
   DOMContentLoaded event.

# Benefits of Using defer: 
1) Non-blocking: Scripts with defer do not block the HTML parser, which can improve page load times and the 
   overall user experience.
2) Execution Order: Deferred scripts maintain their execution order, making it easier to manage dependencies 
   between scripts.
3) Access to DOM: Since deferred scripts run after the document is parsed, they have full access to the DOM, making 
   it unnecessary to wrap your code in a DOMContentLoaded event listener.

Comparison with Other Attributes: 
1) async: Scripts with the async attribute are also non-blocking, but they execute as soon as they are downloaded, which can lead to an unpredictable order of execution. async is useful for scripts that do not depend on other scripts or the DOM.