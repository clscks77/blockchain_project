// 4카드 위치로 이동
gsap.to(window, 0, {
    scrollTo: $('.base_card.mining').offset().top // TODO 전 페이지 스크롤 위치 가져오기
  });
gsap.to(window, 1, {
    delay: 0.3,
    scrollTo: $('.base_card.mining_nonce').offset().top
  });

// 4카드 나타나기
const cardEl = document.querySelector('.mining_nonce');
gsap.to(cardEl, 0.7, {
    delay: 0.3,
    opacity: 1
});
