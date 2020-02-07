var points = document.querySelectorAll(".point");

points.forEach(function(point) {
  point.addEventListener("click", onClick);
});

function onClick(e) {
  var active = document.querySelector(".active");

  if (active && active.id === e.target.id) {
    console.log("already visible");
    return;
  }

  var activePanelParent = active.parentNode;
  var activePanel = {
    point: activePanelParent.querySelector(".point"),
    line: activePanelParent.querySelector(".line"),
    image: activePanelParent.querySelector(".image"),
    title: activePanelParent.querySelector(".title"),
    desc: activePanelParent.querySelector(".description")
  };

  targetParent = e.target.parentNode;
  var panel = {
    point: targetParent.querySelector(".point"),
    line: targetParent.querySelector(".line"),
    image: targetParent.querySelector(".image"),
    title: targetParent.querySelector(".title"),
    desc: targetParent.querySelector(".description")
  };

  if (active) {
    gsap
      .timeline()
      .to([activePanel.line, activePanel.image], 1, { opacity: 0 })
      .to(activePanel.line, { attr: { "stroke-dashoffset": 300 } });
  }

  points.forEach(function(point) {
    point.classList.remove("active");
  });

  gsap
    .timeline()
    .to(panel.point, 0.3, { scale: 0.9, transformOrigin: "50% 50%" })
    .to(panel.point, 0.2, { scale: 1.2 })
    .to(panel.point, 0.2, { scale: 1 })
    .to(panel.line, 1, { attr: { "stroke-dashoffset": 0 }, opacity: 1 }, "-=.4")
    .to(panel.image, 2, { opacity: 1 }, "-=0.5");
  e.target.classList.add("active");
}
