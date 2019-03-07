var adapriveMenuIcon = document.getElementById("js-adaptive-menu");
var mainSiteNavigation = document.getElementById("js-site-navigation");

adapriveMenuIcon.addEventListener("click", function(evt){
  evt.preventDefault();
  mainSiteNavigation.classList.toggle("showMenu");
});
