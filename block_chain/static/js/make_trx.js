// 2.trx 생성 카드 위치로 이동
gsap.to(window, 1, {
    scrollTo: $('.base_card.trx').offset().top
  });

// 2.trx 생성 카드 나타나기
const cardEl = document.querySelector('.trx');
gsap.to(cardEl, 0.7, {
    opacity: 1
});

// 2. trx item 나타나기
const fadeEls = document.querySelectorAll('.item');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (Math.floor(index/2) + 1) * .4, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// 2. trx format 나타나기
const statsEl = document.querySelector('.stats-box');
setTimeout(function() {
  statsEl.classList.add('sizeup');
}, 2000);
gsap.to(statsEl, 1, {
    delay: 2,
    opacity: 1
});