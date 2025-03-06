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
    { x: 0, duration: 1, delay: 2, ease: "power2.out" }
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
      end: "60% 80%",
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
  ScrollTrigger.create({
    trigger: ".sec3",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
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

  // 섹션 핀고정
  let tl13 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4",
      start: "top top",
      end: "+=300%",
      scrub: 1,
      pin: true,
      markers: true,
    },
  });

  //  작은 행성들 로테이트
  let tl14 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4",
      start: "top 50%",
      end: "bottom top",
      scrub: 1,
    },
  });
  tl14.from(".sec4_space_wrap", {
    opacity: 0,
    rotate: "2deg",
    ease: "power2.out",
  });
});
