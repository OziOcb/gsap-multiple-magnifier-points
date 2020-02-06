document.addEventListener("DOMContentLoaded", function() {
  var pinPoints = document.querySelectorAll(".point");

  function removeAllActiveClasses(elementsList) {
    elementsList.forEach(function(point) {
      point.classList.remove("active");
    });
  }

  pinPoints.forEach(function(point) {
    point.addEventListener("click", function() {
      removeAllActiveClasses(pinPoints);
      this.classList.add("active");
    });
  });
});
