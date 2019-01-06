$(function(){

var artic4 = $("body article:nth-child(5) > div > ul li:nth-child(3)");
    artic4.html("<li><a href='#'>Pinterest</a></li>");
    $("body article:nth-child(5) > div > ul li:nth-child(3) > li > a").attr("href", "pinterest");

$( "a[href='#']" ).click (function(event){
      event.preventDefault();
    });
    
$(".header__main > h2").css("font-size", "2em");

});



