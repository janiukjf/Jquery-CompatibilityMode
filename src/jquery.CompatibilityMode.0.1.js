/**
* CompatitibilityMode is designed to detect if the user is using Internet Explorer and if it
* is running in compatibility mode
*
* CompatibilityMode r0.1 // 2013.01.03 // jQuery 1.8+
*  
* CompatibilityMode is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage
* $.CompatitibilityMode( callback );
* 
* @param  callback function || method to fire if compatibility mode tests true
* @author    Jessica Janiuk
*/

(function ($) {
    
    $.CompatibilityMode = function (callback) {
        // default configuration options
        
        if ($.CompatibilityMode.isInCompatibilityMode()){
            if(typeof callback === 'function') {
                callback.call(this);
            }
        }
        return(this);
    };
    
    $.CompatibilityMode.isInCompatibilityMode = function(){
      ($.browser.msie && ($.browser.version == '7.0' && navigator.userAgent.indexOf('Trident') != -1) || (document.documentMode != undefined && (Number($.browser.version) != Number(document.documentMode)))) 
    };
    
})(jQuery);