document.addEventListener("DOMContentLoaded", function() {
  var pinPoints = document.querySelectorAll(".point");

  pinPoints.forEach(function(point) {
    point.addEventListener("click", function() {
      pinPoints.forEach(function(point) {
        point.classList.remove("active");
      });

      this.classList.toggle("active");
    });
  });
});
