$(document).ready(function(){
	// This is an open source project developed by Suman Senapati aka Exile101
	// This allows you to apply simple parallax effect to your web elements
	// Use the class relatiVT and specify the value in data-speed attrib on your HTML DOM element

		
	function relatiVT(el){
		var element=$(el);
		var dec=element.attr("data-speed");
		$(window).scroll(function(){
		var pos=element.offset();
		var scrollTop=$(window).scrollTop();
		if((pos-120)>scrollTop)
		{
			element.css("transform","translateY("+scrollTop/dec+"px)");
			element.css("-webkit-transform","translateY("+scrollTop/dec+"px)");
			element.css("-moz-transform","translateY("+scrollTop/dec+"px)");
			element.css("-o-transform","translateY("+scrollTop/dec+"px)");
		}
		
	}
	
});
