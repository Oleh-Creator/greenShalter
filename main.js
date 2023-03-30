var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-1", {
  effect: "cards",
  grabCursor: true,
});
$('.suportBut').click(function(){
  $('.payBox').css('display','flex');
});
$('.payExit').click(function(){
  $('.payBox').css('display','none');
});
$('.cardBut').click(function(){
  $('.payCardBox').css('display','flex');
  $('.payBox').css('display','none');
});
$('.payCardExit').click(function(){
  $('.payCardBox').css('display','none');
});

$('.CardDogBut').click(function(){
  $('.payCardBox').css('display','none');
});