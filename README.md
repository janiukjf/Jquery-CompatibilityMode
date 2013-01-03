JQuery-CompatibilityMode
============

JQuery Plugin to detect if Compatibility Mode is turned on in Internet Explorer

Basic usage:

Add the plugin to your web page:
<script src="path/to/file/jquery.CompatibilityMode.0.1.js"></script>

Inside a ready function, call the method:
$(function() {
	$.CompatibilityMode( callbackMethod );
});

If the browser is detected as Internet Explorer and is running in compatibility mode, the callback method will be fired.

Plugin currently has been successfully tested and works in IE7-9.