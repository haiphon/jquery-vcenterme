/**
*
*	VCenterMe - jQuery plugin to vertical align divs.
*	by Bärnt & Ärnst 
*
**/	
(function($) {
  $.fn.vcenterme = function(height, parentheight, margintop) {
    return this.each(function() {
            height = $(this).outerHeight();
            parentheight = $(this).parent().height();
            margintop = parentheight/2 - height/2;
            $(this).css("margin-top", margintop+"px");
    });
  };
})(jQuery);