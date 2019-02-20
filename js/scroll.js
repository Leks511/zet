//SCROLL MENU

$(".site-navigation a").click(function(evt){
  evt.preventDefault();
  var sectionId = $(this).attr("href");
  var sectionTopOffset = $(sectionId).offset().top;

  $("html, body").animate({
    scrollTop: sectionTopOffset - 50
  }, 300);
});

$("#js-prices-button").click(function(evt) {
  evt.preventDefault();
  var sectionId = $(this).attr("href");
  var sectionTopOffset = $(sectionId).offset().top;

  $("html, body").animate({
    scrollTop: sectionTopOffset - 50
  }, 300);
});

$("#js-scroll-down").click(function(evt) {
  evt.preventDefault();
  var sectionTopOffset = $("#js-services").offset().top;

  $("html, body").animate({
    scrollTop: sectionTopOffset - 50
  }, 1000);
});
