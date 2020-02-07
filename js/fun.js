var points = document.querySelectorAll(".point");

points.forEach(function(point, index) {
  point.addEventListener("click", onClick);
});

function onClick(e) {
  var active = document.querySelector(".activated");

  if (active) {
    TweenMax.to(".activated", 0.75, { fill: "transparent" });
  }

  points.forEach(function(point) {
    point.classList.remove("activated");
  });

  TweenMax.to(e.target, 1, { fill: "red" });
  e.target.classList.add("activated");
}
