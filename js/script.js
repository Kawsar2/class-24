$(function(){

var navOff = $('.main_menu').offset().top;
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();




if(scrolling > navOff){
$('.main_menu').addClass('menu_fix')
}

else{
$('.main_menu').removeClass('menu_fix')
}
});


















});