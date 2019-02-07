// Скролл меню

$(".js-scroll-down").click(function(evt){
  evt.preventDefault();
  var servicesOffset = $(".js-services").offset().top;

  $("html, body").animate({
    scrollTop: servicesOffset
  }, 400);
});

$(".js-services-button").click(function(evt){
  evt.preventDefault();
  var servicesOffset = $(".js-services").offset().top;

  $("html, body").animate({
    scrollTop: servicesOffset
  }, 400);
});

$(".js-works-button").click(function(evt){
  evt.preventDefault();
  var worksOffset = $(".js-works").offset().top;

  $("html, body").animate({
    scrollTop: worksOffset
  }, 400);
});

$(".js-clients-button").click(function(evt){
  evt.preventDefault();
  var clientsOffset = $(".js-clients").offset().top;

  $("html, body").animate({
    scrollTop: clientsOffset
  }, 400);
});

$(".js-team-button").click(function(evt){
  evt.preventDefault();
  var teamOffset = $(".js-team").offset().top;

  $("html, body").animate({
    scrollTop: teamOffset
  }, 400);
});

$(".js-prices-button").click(function(evt){
  evt.preventDefault();
  var pricesOffset = $(".js-prices").offset().top;

  $("html, body").animate({
    scrollTop: pricesOffset
  }, 400);
});

$(".js-contacts-button").click(function(evt){
  evt.preventDefault();
  var contactsOffset = $(".js-contacts").offset().top;

  $("html, body").animate({
    scrollTop: contactsOffset
  }, 400);
});

//Фиксируем хеадер при скролле



$(document).scroll(function(){

  var titleHeight = $(".js-title").height();
  var documentScroll = $(this).scrollTop();

  if (documentScroll > titleHeight) {
    $(".main-header").addClass("js-header-fixed");
  } else {
    $(".main-header").removeClass("js-header-fixed");
  }

  console.log(documentScroll);
});
