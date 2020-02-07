document.addEventListener("DOMContentLoaded", function() {
  var points = document.querySelectorAll(".point");
  var targetParent = null;
  var point = null;
  var line = null;
  var image = null;
  var title = null;
  var desc = null;

  const tl = gsap.timeline();

  points.forEach(function(point) {
    point.addEventListener("click", function(e) {
      targetParent = e.target.parentNode;
      point = targetParent.querySelectorAll(".point");
      line = targetParent.querySelector(".line");
      image = targetParent.querySelector(".image");
      title = targetParent.querySelector(".title");
      desc = targetParent.querySelector(".description");

      tl.to(point, 0.3, { scale: 0.9, transformOrigin: "50% 50%" })
        .to(point, 0.2, { scale: 1.2 })
        .to(point, 0.2, { scale: 1 })
        .to(line, 1, { attr: { "stroke-dashoffset": 0 }, opacity: 1 }, "-=.4")
        .to(
          image,
          2,
          {
            attr: { "stroke-dashoffset": 0 },
            opacity: 1,
            ease: "power4"
          },
          "-=0.5"
        );
    });
  });
});
