// 5카드 위치로 이동
gsap.to(window, 0, {
    scrollTo: $('.base_card.mining_nonce').offset().top - 150// TODO 전 페이지 스크롤 위치 가져오기
  });
gsap.to(window, 1, {
    delay: 0.3,
    scrollTo: $('.base_card.blocks').offset().top
  });

// 5카드 나타나기
const cardEl = document.querySelector('.blocks');
gsap.to(cardEl, 0.7, {
    delay: 0.3,
    opacity: 1
});

// new Swiper(선택자, 옵션)
new Swiper('.blocks_chain .swiper-container', {
    slidesPerView: 2, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    initialSlide: $(".swiper-slide").length,
    loop: false,
    pagination: {
      el: '.blocks_chain .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
      prevEl: '.blocks_chain .swiper-prev',
      nextEl: '.blocks_chain .swiper-next'
    }
});
gsap.to(document.querySelector('.swiper-slide:last-child'), 0.7, {
    delay: 1,
    opacity: 1
});