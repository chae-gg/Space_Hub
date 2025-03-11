document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // 메인 애니메이션 이벤트

  // 메인 라인 스케일
  gsap.fromTo(
    ".line_box",
    { scale: 1.5, opacity: 0 },
    {
      scale: 0.985,
      opacity: 1,
      duration: 1,
      delay: 0.25,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".line_box", {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    }
  );

  //  메인 타이틀 애니메이션
  gsap.fromTo(
    [".main_title h2", ".main_title p"],
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    }
  );

  // 메인 상단 왼쪽 텍스트
  gsap.fromTo(
    ".line_in_left_text",
    {
      opacity: 0,
      width: 0,
    },
    {
      opacity: 1,
      width: 200,
      delay: 1,
      duration: 1,
    }
  );
  // 메인 상단 오른쪽 텍스트
  gsap.fromTo(
    ".line_in_right_text",
    {
      opacity: 0,
      width: 0,
    },
    {
      opacity: 1,
      width: 240,
      delay: 1,
      duration: 1.5,
    }
  );

  // 메인 하단 이미지 애니메이션
  gsap.fromTo(
    ".line_in_bottom_right_img",
    {
      x: 500,
    },
    { x: 0, duration: 1, delay: 1.5, ease: "power2.out" }
  );

  //  메인 스크롤 이벤트

  // 메인 라인 박스 스케일 및 투명도 이벤트
  ScrollTrigger.create({
    trigger: ".line_box",
    start: "top top",
    end: "bottom top",
    onUpdate: (lineBox) => {
      const scaleVal = 1 + lineBox.progress * 0.2;
      const opacityVal = 1 - lineBox.progress * 2;
      gsap.set(".line_box", {
        scale: scaleVal,
        opacity: opacityVal,
        scrub: true,
      });
    },
  });
  //  메인 타이틀 텍스트 투명도
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_sec",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
    },
  });
  tl.to(".main_title", { opacity: 0, y: "-=100", duration: 0.5 });

  // 섹션 1로 넘어가는 핀 이벤트
  ScrollTrigger.create({
    trigger: ".main_sec",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });

  // 섹션1 텍스트 이벤트

  //  scroll_text_event h2
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "top 80%",
      end: "40% 80%",
      scrub: 1,
    },
  });
  tl1.from(".sec1_title span h2", {
    opacity: 0,
    y: "+=60",
    duration: 0.5,
  });

  // scroll_text_event p
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "top 10%",
      end: "40% 50%",
      scrub: 1,
    },
  });
  tl2.from(".sec1_title > p", {
    opacity: 0,
    duration: 0.5,
  });

  // scroll_text_event 버튼
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "top 10%%",
      end: "40% 50%",
      scrub: 1,
    },
  });
  tl3.from(".sec1_btn", {
    opacity: 0,
    duration: 0.5,
  });

  // scroll_text_event 스크롤시 오퍼시티
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "20% top",
      end: "70% 40%",
      scrub: 1,
    },
  });
  tl4.to(".sec1_title", {
    opacity: 0,
    duration: 0.5,
  });

  //  섹션 2 스크롤 이벤트

  // 지구 bg 오퍼시티 효과
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  });
  tl5.to(".sec2_earth", {
    opacity: 0,
    duration: 1,
  });

  // 섹션 2 타이틀 이벤트

  //  scroll_text_event h2
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 10%",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl6.from(".sec2_title span h2", {
    opacity: 0,
    y: "+=60",
    duration: 1,
  });
  //  scroll_text_event p
  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 20%",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl7.from(".sec2_title > p", {
    opacity: 0,
    y: "+=60",
    delay: 0.8,
    duration: 1,
  });
  //  scroll_text_event 버튼
  let tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 20%",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl8.from(".sec2_btn", {
    opacity: 0,
    y: "+=60",
    delay: 0.8,
    duration: 1,
  });

  // 섹션 3 이벤트

  // 섹션 4로 넘어가는 핀 이벤트
  gsap.to(".sec3", {
    scrollTrigger: {
      trigger: ".sec3",
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });
  //  scroll_text_event h2
  let tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "top bottom",
      end: "bottom 90%",
      scrub: 1,
    },
  });
  tl9.from(".sec3_title span h2", {
    opacity: 0,
    y: "+=100",
    duration: 1,
  });
  //  scroll_text_event p
  let tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "top bottom",
      end: "bottom 90%",
      scrub: 1,
    },
  });
  tl10.from(".sec3_title > p", {
    opacity: 0,
    y: "+=100",
    delay: 0.8,
    duration: 1,
  });
  //  scroll_text_event 버튼
  let tl11 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "top bottom",
      end: "bottom 90%",
      scrub: 1,
    },
  });
  tl11.from(".sec3_btn", {
    opacity: 0,
    y: "+=100",
    delay: 0.8,
    duration: 1,
  });

  // scroll_text_event 타이틀시 스크롤시 오퍼시티
  let tl12 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl12.to(".sec3_title", {
    opacity: 0,
    duration: 0.5,
    y: "-=100",
  });

  // 섹션 4

  //  작은 행성들 로테이트 및  첫타이틀 인 아웃
  let tl13 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4",
      start: "top 40%",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  // 작은 행성 로테이트
  tl13.from(".sec4_space_wrap", {
    opacity: 0,

    rotate: "3deg",
    ease: "power2.out",
    duration: 4,
  });
  // 첫번쨰 타이틀 나오는 이벤트
  tl13.from(".sec4_text_1 span img", {
    opacity: 0,
    y: 100,
    duration: 3,
  });

  // 섹션 핀고정 및 투번째 타이틀 나오고 들어가는
  let tl14 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4 ",
      start: "top top",
      end: "+=120% top",
      scrub: 1,
      pin: true,
    },
  });
  tl14.to(".sec4_space_wrap", {
    rotate: "-3deg",
    scale: 1,
    ease: "power2.out",
    duration: 4,
  });
  //  첫번째 타이틀 들어가는 이벤트
  let tl15 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4 ",
      start: "top top",
      end: "bottom 50%",
      scrub: 1,
    },
  });
  tl15.to({}, { duration: 0.5 });
  tl15.to(".sec4_text_1 span img", {
    opacity: 0,
    y: -100,
    duration: 2,
  });

  let tl16 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4 ",
      start: "top top",
      end: "bottom 30%",
      scrub: 1,
    },
  });
  tl16.from({}, { duration: 1.5 });
  tl16.from(".sec4_text_2 span h2", {
    opacity: 0,
    y: 100,
    duration: 2,
  });
  tl16.to({}, { duration: 2 });
  tl16.to(".sec4_text_2 span h2", {
    opacity: 0,
    y: -100,
    duration: 2,
  });

  let tl17 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4 ",
      start: "top top",
      end: "bottom 10%",
      scrub: 1,
    },
  });
  tl17.from({}, { duration: 1 });
  tl17.from(".sec4_text_3 span h2", {
    opacity: 0,
    y: 100,
    duration: 2,
  });

  let tl18 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4 ",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl18.from({}, { duration: 1.7 });
  tl18.from(".sec4_text_3 .sec4_btn", {
    opacity: 0,
    y: 100,
    duration: 2,
  });

  // 섹션 5 스크롤 이벤트
  let tlSec5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec5",
      start: "top 50%",
      end: "10% top",
      scrub: 1,
    },
  });
  tlSec5.from(".sec5 .sec5_bg", {
    opacity: 0,
    y: 100,
    duration: 2,
  });

  let tl19 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec5",
      start: "top 50%",
      end: "10% top",
      scrub: 1,
    },
  });
  tl19.from(".sec5_title .opactiy_box h2", {
    opacity: 0,
    y: 100,
    duration: 2,
  });

  let tl20 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec5",
      start: "top 30%",
      end: "10% top",
      scrub: 1,
    },
  });
  tl20.from(".sec5_title > p", {
    opacity: 0,
    y: 140,
    duration: 1,
  });
  let tl21 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec5",
      start: "top 30%",
      end: "10% top",
      scrub: 1,
    },
  });
  tl21.from(".sec5_title .sec5_btn", {
    opacity: 0,
    y: 140,
    duration: 1,
  });

  //  섹션 6
  let tl22 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec6",
      start: "top 40%",
      end: "top 20%",
      scrub: 1,
    },
  });
  tl22.fromTo(
    ".sec6_bg",
    {
      opacity: 0,
      scale: 1.1,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    }
  );
  tl22.fromTo(
    ".sec6_title",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 2,
    }
  );
});

// 섹션 6 이미지 1920 부터 768까지 스케일 적용
const videoBox = document.querySelector(".sec6_video_box");

gsap.set(videoBox, { scale: 1 });

function updateScale() {
  let windowWidth = window.innerWidth;

  if (windowWidth >= 768) {
    // 768px 이상에서는 1에서 시작해 점진적으로 줄어듦
    let scaleValue = Math.max(0.6, (windowWidth / 1920) * 1);
    gsap.to(videoBox, {
      scale: scaleValue,
      duration: 0.5,
      ease: "power2.out",
    });
  } else if (windowWidth <= 767 && windowWidth > 320) {
    // 767px 이하에서는 0.85에서 다시 점진적으로 줄어듦
    let scaleValue = Math.max(0.4, (windowWidth / 767) * 0.85);
    gsap.to(videoBox, {
      scale: scaleValue,
      duration: 0.5,
      ease: "power2.out",
    });
  } else {
    // 최소 화면 크기 이하에서는 0.4 고정
    gsap.to(videoBox, {
      scale: 0.4,
      duration: 0.5,
      ease: "power2.out",
    });
  }
}

// 초기 실행
updateScale();

// 화면 크기 변경 시 적용
window.addEventListener("resize", updateScale);
