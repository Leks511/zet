var headerHeight = $(".main-header").innerHeight();

$(document).scroll(function () {
  var titleHeight = $(".js-title").height() - headerHeight;
  var documentScroll = $(this).scrollTop();

  if (documentScroll > titleHeight) {
    $(".main-header").addClass("js-header-fixed");
  } else {
    $(".main-header").removeClass("js-header-fixed");
  }
});
