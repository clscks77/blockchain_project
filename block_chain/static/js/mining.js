// 3.trx 전파 카드 위치로 이동
gsap.to(window, 0, {
    scrollTo: 900 // TODO 전 페이지 스크롤 위치 가져오기
  });
gsap.to(window, 1, {
    delay: 0.3,
    scrollTo: $('.base_card.mining').offset().top - 20
  });

// 3.trx 전파 카드 나타나기
const cardEl = document.querySelector('.mining');
gsap.to(cardEl, 0.7, {
    delay: 0.3,
    opacity: 1
});

// 3. 네트워크 gif 멈추기
const networkEl = document.querySelector('.network');
setTimeout(function() {
  networkEl.style.backgroundImage = 'url("static/images/network_stop.png")';
}, 4500);

// 3. mempool 글자 나타나기
const mempoolEls = document.querySelectorAll('.mempool-txt');
mempoolEls.forEach(function (mempoolEl, index) {
    setTimeout(function() {
      mempoolEl.style.opacity = 1;
    }, (Math.floor((index+3)/2) * 2200) );
});