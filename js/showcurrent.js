// Add active class to the current button (highlight it)
var ul = document.getElementById("rows2");
var li = ul.getElementsByClassName("current");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Add active class to the current button (highlight it) .breadcrumb .breadcrumbCurrent
var ul = document.getElementById("breadcrumb");
var li = ul.getElementsByClassName("breadcrumbCurrent");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
  var breadcrumbCurrent = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}