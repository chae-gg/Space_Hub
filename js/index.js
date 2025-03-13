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

// main 요소의 getBoundingClientRect()를 사용하여 위치와 크기 구하기
let mainRect = main.getBoundingClientRect();

// 음수 마진이 있을 경우 이를 고려해 계산
let marginBottom = parseFloat(window.getComputedStyle(main).marginBottom); // 음수 마진 값
let mainHeightWithMargin = mainRect.height + marginBottom; // 음수 마진을 고려한 높이

// sticky의 높이 설정
sticky.style.height = 12455 + "px";

console.log("Sticky height with margin:", sticky.style.height);
