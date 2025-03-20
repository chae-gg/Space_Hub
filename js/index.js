// 레니스
const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

let sticky = document.querySelector(".sticky");

// sticky의 높이 설정
sticky.style.height = 12455 + "px";

const headerBg = document.querySelector("header");
const hoverLi = document.querySelector("#gnb > ul > li:last-child");

hoverLi.addEventListener("mouseenter", function () {
  headerBg.style.height = "250px";
  headerBg.style.background = "linear-gradient(to bottom, #000, transparent)";
});
hoverLi.addEventListener("mouseleave", function () {
  headerBg.style.height = "0px";
  headerBg.style.background = "linear-gradient(to bottom, #000, transparent)";
});
