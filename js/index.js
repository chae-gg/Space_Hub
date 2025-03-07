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

const main = document.querySelector("main");
const fixedIcon = document.querySelector(".bottom_fixed_icon");

let lastScrollY = window.scrollY; // 이전 스크롤 위치

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // 현재 스크롤 위치
  const windowHeight = window.innerHeight; // 화면 높이
  const mainRect = main.getBoundingClientRect(); // main의 위치와 크기
  const iconHeight = fixedIcon.offsetHeight; // 아이콘 높이

  // main 영역의 위치 및 크기
  const mainOffsetTop = mainRect.top + scrollY; // main의 상단 위치
  const mainHeight = mainRect.height; // main의 실제 높이

  // 현재 스크롤 위치가 main의 바텀에 가까워지면
  if (scrollY + windowHeight >= mainOffsetTop + mainHeight - iconHeight - 26) {
    // main 영역의 바텀에 닿았을 때 absolute 상태로 변경
    fixedIcon.style.position = "absolute";
    fixedIcon.style.top = `${mainOffsetTop + mainHeight - iconHeight - 26}px`; // main의 바텀에서 26px 떨어지게
  } else {
    // 스크롤 내릴 때는 fixed 상태로 고정
    fixedIcon.style.position = "fixed";
    fixedIcon.style.bottom = "26px"; // 화면 하단에서 26px 떨어지게 고정
  }

  // 스크롤을 올리면 다시 fixed 상태로 돌아가며 26px 아래에서 고정
  if (scrollY < lastScrollY) {
    fixedIcon.style.position = "fixed";
    fixedIcon.style.bottom = "26px";
  }

  // 이전 스크롤 위치 업데이트
  lastScrollY = scrollY;
});
