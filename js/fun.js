var points = document.querySelectorAll(".point");
var tl = gsap.timeline(); //dummy placeholder animation

function toggleGsapAnimation(e) {
  var active = document.querySelector(".active");
  if (active && active.id === e.target.id) {
    console.log("already visible");
    return;
  }
  if (active) {
    tl.timeScale(3).reverse();
  }

  targetParent = e.target.parentNode;
  var panel = {
    point: targetParent.querySelector(".point"),
    line: targetParent.querySelector(".line"),
    circle: targetParent.querySelector(".circle"),
    image: targetParent.querySelector(".image"),
    title: targetParent.querySelector(".title"),
    desc: targetParent.querySelector(".description")
  };

  tl = gsap
    .timeline()
    .to(panel.point, 0.3, { scale: 0.9, transformOrigin: "50% 50%" })
    .to(panel.point, 0.2, { scale: 1.2 })
    .to(panel.point, 0.2, { scale: 1 })
    .to(panel.line, 1, { attr: { "stroke-dashoffset": 0 }, opacity: 1 }, "-=.4")
    .to(
      panel.circle,
      2,
      {
        attr: { "stroke-dashoffset": 0 },
        opacity: 1,
        ease: "power4"
      },
      "-=0.5"
    )
    .fromTo(panel.title, 0.3, { y: "+=10" }, { y: "-=10", opacity: 1 }, "-=1.7")
    .fromTo(panel.desc, 0.3, { y: "+=10" }, { y: "-=10", opacity: 1 }, "-=1.5")
    .to(panel.image, 0.3, { opacity: 1, scale: 1.1, transformOrigin: "50% 50%" }, "-=1.2")
    .to(panel.image, 0.3, { scale: 1.05 }, "-=0.8");

  points.forEach(function(p) {
    p.classList.remove("active");
  });

  e.target.classList.add("active");
}

points.forEach(function(point) {
  point.addEventListener("click", toggleGsapAnimation);
});
