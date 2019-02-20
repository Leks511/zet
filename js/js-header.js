$(document).scroll(function () {

  var titleHeight = $(".js-title").height();
  var documentScroll = $(this).scrollTop();

  if (documentScroll > titleHeight) {
    $(".main-header").addClass("js-header-fixed");
    $(".site-navigation a").removeClass("hover-transition");
    $(".site-navigation a").addClass("js-fixed-link");
  } else {
    $(".main-header").removeClass("js-header-fixed");
    $(".site-navigation a").addClass("hover-transition");
    $(".site-navigation a").removeClass("js-fixed-link");
  }

});
