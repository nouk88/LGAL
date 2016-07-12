// JavaScript Document
var clicked= 0;
var clicked2 = 0;
var clicked3 = 0;
var delay = 200;
var images = ['wpid-Bomen-bos.jpg','beperkt.png','autism.jpg','autisme.jpg'];
$(document).ready(function(){
$('<img width="75%" height="100%" alt="willekeurige spreuk" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#maincontainer #subcontainer #sidebar #spreuk');
	$(".subitem").hide();
	$(".subitem2").hide();
	$(".subitem3").hide();
	$("div#nav ul a li").hover(function(){
		$(this).css("background-color", "#0099EC");
		$(this).mouseleave(function(){
			$(this).css("background-color","#06F");
		});
	});
	$("li#lotgenoten").hover(function(){
		$(this).css("background-color","#0099EC");
		if(clicked === 0){
			$(".subitem").css("background-color", "#3459CF");
			$(".subitem").delay(delay).slideDown("fast");
		}
		else
		{
			$(".subitem").css("background-color", "#3459CF");
			$(".subitem").delay(delay).slideUp("fast");
		}
	});
	$("li#lotgenoten").click(function(){
		if(clicked === 0){
			$(".subitem").css("background-color", "#3459CF");
			$(".subitem").delay(delay).slideUp("fast");
			clicked= 1;
		}
		else
		{
			$(".subitem").css("background-color", "#3459CF");
			$(".subitem").delay(delay).slideDown("fast");
			clicked = 0
		}
	});
	$("li#lotgenoten").mouseleave(function(){
		if(clicked === 1)
		{
			clicked = 0;
		}
	});
	$(".subitem").hover(function(){
		$(this).css("background-color","#0099EC");
		$(this).mouseleave(function(){
			$(this).css("background-color","#3459CF");
		});
	});
	$("li#inloop").hover(function(){
		$(this).css("background-color","#0099EC");
		if(clicked2 === 0){
			$(".subitem2").css("background-color", "#3459CF");
			$(".subitem2").delay(delay).slideDown("fast");
		}
		else
		{
			$(".subitem2").css("background-color", "#3459CF");
			$(".subitem2").delay(delay).slideUp("fast");
		}
	});
	$("li#inloop").click(function(){
		if(clicked2 === 0){
			$(".subitem2").css("background-color", "#3459CF");
			$(".subitem2").delay(delay).slideUp("fast");
			clicked2= 1;
		}
		else
		{
			$(".subitem2").css("background-color", "#3459CF");
			$(".subitem2").delay(delay).slideDown("fast");
			clicked2 = 0;
		}
	});
	$("li#inloop").mouseleave(function(){
		if(clicked2 === 1)
		{
			clicked2 = 0;
		}
	});
	$(".subitem2").hover(function(){
		$(this).css("background-color","#0099EC");
		$(this).mouseleave(function(){
			$(this).css("background-color","#3459CF");
		});
	});
	$("li#info").hover(function(){
		$(this).css("background-color","#0099EC");
		if(clicked3 === 0){
			
			$(".subitem3").delay(delay).slideDown("fast");
		}
		else
		{
			
			$(".subitem3").delay(delay).slideUp("fast");
		}
	});
	$("li#info").click(function(){
		if(clicked3 === 0){
			$(".subitem3").css("background-color", "#3459CF");
			$(".subitem3").delay(delay).slideUp("fast");
			clicked3= 1;
		}
		else
		{
			$(".subitem3").css("background-color", "#3459CF");
			$(".subitem3").delay(delay).slideDown("fast");
			clicked3 = 0
		}
	});
	$("li#info").mouseleave(function(){
		if(clicked3 === 1)
		{
			clicked3 = 0;
		}
	});
	$(".subitem3").hover(function(){
		$(this).css("background-color","#0099EC");
		$(this).mouseleave(function(){
			$(this).css("background-color","#3459CF");
		});
	});
	$("#kalender a div").hover(function(){
		$(this).css("color", "#5500FF");
		$(this).mouseleave(function(){
			$(this).css("color","#000");
		});
	});
});