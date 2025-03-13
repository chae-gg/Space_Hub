let resizeTimer1;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 0); //
});

gsap.set(".video", { width: window.innerWidth, height: window.innerHeight });

// 인트로 섹션
gsap.fromTo(
  ".intro_sec",
  { opacity: 1 },
  { opacity: 0, delay: 1.2, duration: 1 }
);

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // 메인 섹션 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

  // 메인 라인 스케일
  gsap.fromTo(
    ".line_box",
    { scale: 1.5, opacity: 0 },
    {
      scale: 0.985,
      opacity: 1,
      duration: 1,
      delay: 1.25,
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
      delay: 1.5,
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
      delay: 2,
      duration: 1,
    }
  );

  let rightText = gsap.timeline();

  rightText
    .fromTo(
      ".effect_box",
      {
        transform: "scaleX(0)",
        transformOrigin: "left",
      },
      {
        duration: 0.8,
        delay: 1.4,
        transform: "scaleX(1)",
      }
    )
    .to(".line_in_right_text span", {
      width: 240,
      duration: 1,
    })
    .to(
      ".line_in_right_text p",
      {
        width: 100,
        duration: 1,
      },
      "-=1"
    );

  // 메인 하단 이미지 애니메이션
  gsap.fromTo(
    ".line_in_bottom_right_img",
    {
      x: 500,
    },
    { x: 0, duration: 1, delay: 2.5, ease: "power2.out" }
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
        scrub: 0.2,
      });
    },
  });
  //  메인 타이틀 텍스트 투명도
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_sec",
      start: "top top",
      end: "bottom 20%",
      scrub: 0.2,
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
    anticipatePin: 1,
  });

  // 섹션1 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

  //  scroll_text_event h2
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "top 80%",
      end: "40% 80%",
      scrub: 0.2,
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
      start: "top 35%",
      end: "40% 50%",
      scrub: 0.2,
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
      start: "top 20%",
      end: "40% 50%",
      scrub: 0.2,
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
      scrub: 0.2,
    },
  });
  tl4.to(".sec1_title", {
    opacity: 0,
    duration: 0.5,
  });

  //  섹션 2 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

  //  지구 아래에서 위로 올라오는 효과
  let tl5_1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top center",
      end: "bottom 80%",
      scrub: 0.2,
    },
  });
  tl5_1.fromTo(".sec2_video_wrap", { y: 300 }, { y: 0, duration: 1 });

  // 지구 bg 오퍼시티 효과
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "bottom top",
      scrub: 0.2,
      pin: true,
      anticipatePin: 1,
    },
  });
  tl5.to(".sec2_earth", {
    delay: 0.5,
    opacity: 0,
    duration: 1,
  });

  const reponsive = gsap.matchMedia();
  // sec2 (1024px 이상)
  reponsive.add("(min-width: 1024px)", () => {
    let tlPC = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 10%",
        end: "bottom top",
        scrub: 0.2,
      },
    });

    tlPC
      .from(".sec2_title span h2", { opacity: 0, y: "+=60", duration: 1 })
      .from(
        ".sec2_title > p",
        {
          opacity: 0,
          y: "+=60",
          delay: 0.8,
          duration: 1,
        },
        "-0.5"
      )
      .from(
        ".sec2_btn",
        { opacity: 0, y: "+=60", delay: 0.8, duration: 1 },
        "-0.5"
      );
  });
  // sec2 (1023px 이하)
  reponsive.add("(max-width: 1023px)", () => {
    let tlMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 80%", // 모바일에서는 더 늦게 시작
        end: "bottom 60%",
        scrub: 0.3, // 더 부드러운 애니메이션
      },
    });

    tlMobile
      .from(".sec2_title span h2", { opacity: 0, y: "+=30", duration: 0.8 })
      .from(
        ".sec2_title > p",
        {
          opacity: 0,
          y: "+=30",
          delay: 0.5,
          duration: 0.8,
        },
        "-0.2"
      )
      .from(
        ".sec2_btn",
        { opacity: 0, y: "+=30", delay: 0.5, duration: 0.8 },
        "-0.2"
      );
  });

  // 섹션 3 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎
  gsap.to(".sec3_space_main_bg", {
    scrollTrigger: {
      trigger: ".sec3",
      start: "top top",
      end: "bottom 30%",
      scrub: 0.2,
    },
    y: -250,
  });
  // 섹션 4로 넘어가는 핀 이벤트
  gsap.to(".sec3", {
    scrollTrigger: {
      trigger: ".sec3",
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    },
  });
  //  scroll_text_event h2
  let tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "top bottom",
      end: "bottom 90%",
      scrub: 0.2,
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
      scrub: 0.2,
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
      scrub: 0.2,
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
      scrub: 0.2,
    },
  });
  tl12.to(".sec3_title", {
    opacity: 0,
    duration: 0.5,
    y: "-=100",
  });

  // 섹션 4😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

  // 섹션 4 반응형  (1024px 이상)
  reponsive.add("(min-width: 1024px)", () => {
    let tlSec4Pc1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "top 40%",
        end: "bottom 60%",
        scrub: 0.2,
      },
    });
    // 작은 행성 로테이트 오퍼시티
    tlSec4Pc1.from(".sec4_space_wrap", {
      opacity: 0,
      rotate: "+=3deg",
      ease: "power2.out",
      duration: 4,
    });

    // 첫 번째 타이틀 등장
    tlSec4Pc1.from(
      ".sec4_text_1 span img",
      {
        opacity: 0,
        y: 100,
        duration: 3,
      },
      "-0.5"
    );

    let tlSec4Pc2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "top top",
        end: "+=120% top",
        scrub: 0.2,
        pin: true, // 핀 적용
        anticipatePin: 1,
      },
    });
    // 첫 번째 타이틀 아웃
    tlSec4Pc2.to(".sec4_text_1 span img", {
      opacity: 0,
      delay: 0.2,
      y: -100,
      duration: 1,
    });
    // 두 번째 타이틀
    tlSec4Pc2.from(
      ".sec4_text_2 span h2",
      {
        opacity: 0,
        y: 100,
        duration: 1,
      },
      "0.3"
    );
    tlSec4Pc2.to(
      ".sec4_text_2 span h2",
      { opacity: 0, y: -100, duration: 2, delay: 1 },
      "0.3"
    );

    // 세 번째 타이틀
    tlSec4Pc2.from(
      ".sec4_text_3 span h2",
      { opacity: 0, y: 100, duration: 2 },
      "0.8"
    );

    // 버튼 등장
    tlSec4Pc2.from(
      ".sec4_text_3 .sec4_btn",
      {
        opacity: 0,
        y: 100,
        duration: 2,
      },
      "1.3"
    );
    let tlSec4Pc3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "top top",
        end: "+=140% top",
        scrub: 0.2,
      },
    });
    tlSec4Pc3.to(".sec4_space_wrap", {
      rotate: "-=3deg",
      ease: "power2.out",
      duration: 4,
    });
  });

  // 섹션4 반응형 (1023px 이하)
  reponsive.add("(max-width: 1023px)", () => {
    let tlSec4Mo1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "top 40%",
        end: "bottom 60%",
        scrub: 0.2,
      },
    });
    // 작은 행성 로테이트 오퍼시티
    tlSec4Mo1.from(".sec4_space_wrap", {
      opacity: 0,
      rotate: "+=20deg",
      ease: "power2.out",
      duration: 4,
    });

    // 첫 번째 타이틀 등장
    tlSec4Mo1.from(
      ".sec4_text_1 span img",
      {
        opacity: 0,
        y: 100,
        duration: 3,
      },
      "-0.5"
    );

    let tlSec4Mo2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "top top",
        end: "+=120% top",
        scrub: 0.2,
        pin: true, // 핀 적용
        anticipatePin: 1,
      },
    });
    // 첫 번째 타이틀 아웃
    tlSec4Mo2.to(".sec4_text_1 span img", {
      opacity: 0,
      delay: 0.2,
      y: -100,
      duration: 1,
    });
    // 두 번째 타이틀
    tlSec4Mo2.from(
      ".sec4_text_2 span h2",
      {
        opacity: 0,
        y: 100,
        duration: 1,
      },
      "0.3"
    );
    tlSec4Mo2.to(
      ".sec4_text_2 span h2",
      { opacity: 0, y: -100, duration: 2, delay: 1 },
      "0.3"
    );

    // 세 번째 타이틀
    tlSec4Mo2.from(
      ".sec4_text_3 span h2",
      { opacity: 0, y: 100, duration: 2 },
      "0.8"
    );

    // 버튼 등장
    tlSec4Mo2.from(
      ".sec4_text_3 .sec4_btn",
      {
        opacity: 0,
        y: 100,
        duration: 2,
      },
      "1.3"
    );

    let tlSec4Mo3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "top top",
        end: "+=140% top",
        scrub: 0.2,
      },
    });
    tlSec4Mo3.to(".sec4_space_wrap", {
      rotate: "-=26deg",
      ease: "power2.out",
      duration: 4,
    });
  });

  // 섹션 5 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎
  reponsive.add("(min-width: 1024px)", () => {
    let tlSec5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec5",
        start: "top 50%",
        end: "10% top",
        scrub: 0.2,
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
        scrub: 0.2,
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
        scrub: 0.2,
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
        scrub: 0.2,
      },
    });
    tl21.from(".sec5_title .sec5_btn", {
      opacity: 0,
      y: 140,
      duration: 1,
    });
  });
  reponsive.add("(max-width: 1023px)", () => {
    let tlSec5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec5",
        start: "top 50%",
        end: "10% top",
        scrub: 0.2,
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
        scrub: 0.2,
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
        scrub: 0.2,
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
        scrub: 0.2,
      },
    });
    tl21.from(".sec5_title .sec5_btn", {
      opacity: 0,
      y: 140,
      duration: 1,
    });
  });

  //  섹션 6 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

  function killScrollTrigger(target) {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      if (trigger.trigger && trigger.trigger.matches(target)) {
        trigger.kill();
      }
    });
  }

  function getBaseScale() {
    const width = window.innerWidth;
    let baseScale = 0.96;

    if (width <= 1241 && width >= 768) {
      baseScale = 0.96 - (0.96 - 0.6) * ((1241 - width) / (1241 - 768));
    } else {
      baseScale = 0.95 - (0.95 - 0.4) * ((768 - width) / (768 - 320));
    }
    return baseScale;
  }

  // 섹션 6 ScrollTrigger 함수
  function setScrollTrigger(baseScale) {
    killScrollTrigger(".sec6"); //

    let tlsec6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec6",
        start: "top 40%",
        end: "top 20%",
        scrub: 0.2,
      },
    });

    tlsec6.fromTo(
      ".sec6_bg",
      {
        opacity: 0,
        scale: baseScale + 0.1,
      },
      {
        opacity: 1,
        scale: baseScale,
        duration: 1,
      }
    );

    tlsec6.fromTo(
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
  }

  // 반응형 업데이트
  function updateScale() {
    let baseScale = getBaseScale();
    setScrollTrigger(baseScale);
  }

  // 초기 실행 및 이벤트 리스너 추가
  window.addEventListener("resize", updateScale);
  updateScale();
});
