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

let main = document.querySelector("main");
let sticky = document.querySelector(".sticky");

let mainRect = main.getBoundingClientRect();

let marginBottom = parseFloat(window.getComputedStyle(main).marginBottom); // 음수 마진 값
let mainHeightWithMargin = mainRect.height + marginBottom; // 음수 마진을 고려한 높이

// sticky의 높이 설정
sticky.style.height = 12455 + "px";

console.log("Sticky height with margin:", sticky.style.height);
