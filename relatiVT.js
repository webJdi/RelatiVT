$(document).ready(function(){
	// This is an open source project developed by Suman Senapati aka Exile101
	// This allows you to apply simple parallax effect to your web elements
	// Use the class relatiVT and specify the value in data-speed attrib on your HTML DOM element
	var val=$('.relatiVT').attr("data-speed");
	$(window).scroll(function(){
		var pos=$('.relatiVT').offset();
		var scrollTop=$(window).scrollTop();
		if((pos-120)>scrollTop)
		{
			$('.relatiVT').css("transform","translateY("+scrollTop/val+"px)");
			$('.relatiVT').css("-webkit-transform","translateY("+scrollTop/val+"px)"); // for chrome
			$('.relatiVT').css("-moz-transform","translateY("+scrollTop/val+"px)"); // for firefox
			$('.relatiVT').css("-o-transform","translateY("+scrollTop/val+"px)"); // for opera
		}
	});
	
});
