
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp:0.1
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor-circle');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});



// rotating an arrow in navbar

gsap.to("#nav svg", {
  rotate: 90,
  duration: 1,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "#nav svg",
    scroller: "#main",
    start: "top -5%",
    end: "top -6%",
    scrub: 1
  }
})
gsap.to("#nav svg", {
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "#nav svg",
    scroller: "#main",
    start: "top -15%",
    end: "top -400%",
    scrub: 3
  }
})

// scrolling a namediv

gsap.to("#name-div h1", {
  transform: "translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger: {
    trigger: "#name-div h1",
    scroller: "#main",
    // markers:true,
    scrub: 0.7
  }
})



gsap.from("#intro-div h1:nth-child(1)", {
  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(1)",
    scroller: "#main",
    // markers: true,
    start: "top 70%"
  },
  opacity: 0
})
gsap.from("#intro-div h1:nth-child(2)", {

  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(2)",
    scroller: "#main",
    // markers: true,
    start: "top 60%"
  },
  duration: 1,
  opacity: 0
})
gsap.from("#intro-div h1:nth-child(3)", {
  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(3)",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
  },
  opacity: 0,
  duration: 1,
})

gsap.from(".box h4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".box h4",
    scroller: "#main",
    // markers:true,
    start: "top 70%"
  },
  stagger: 0.5
})

gsap.from(".dev-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".dev-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 2
  }

})
gsap.from(".des-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".des-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 1
  }

})
document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dev-box .dot');
  dots.forEach((dot, index) => {
      setTimeout(() => {
          dot.classList.add('show');
      }, index * 500); // Adjust the delay (500ms) as needed
  });
});

