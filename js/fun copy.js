document.addEventListener("DOMContentLoaded", function() {
  var points = document.querySelectorAll(".point");
  var targetParent = null;
  var panel = {
    point: null,
    line: null,
    image: null,
    title: null,
    desc: null
  };

  points.forEach(function(point, index) {
    point.addEventListener("click", toggleAnimation);

    function toggleAnimation(e) {
      if (tl.reversed()) {
        tl.play().timeScale(1);
      } else {
        tl.timeScale(4).reverse();
      }
    }

    targetParent = point.parentNode;
    panel = {
      point: targetParent.querySelector(".point"),
      line: targetParent.querySelector(".line"),
      image: targetParent.querySelector(".image"),
      title: targetParent.querySelector(".title"),
      desc: targetParent.querySelector(".description")
    };

    const tl = gsap.timeline({ paused: false });
    tl.to(panel.point, 0.3, { scale: 0.9, transformOrigin: "50% 50%" })
      .to(panel.point, 0.2, { scale: 1.2 })
      .to(panel.point, 0.2, { scale: 1 })
      .to(panel.line, 1, { attr: { "stroke-dashoffset": 0 }, opacity: 1 }, "-=.4")
      .to(
        panel.image,
        2,
        {
          attr: { "stroke-dashoffset": 0 },
          opacity: 1,
          ease: "power4"
        },
        "-=0.5"
      )
      .reverse();
  });
});
