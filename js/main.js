'use strict'

{

    // load後にローディングアイコンを削除する
    const loader = document.querySelector('#loader')
    window.addEventListener('load', () => {
      loader.style.display = 'none';
    });
  
    // load後に各コンテンツを表示させる
    window.addEventListener('load', function() {
      const loaded = document.querySelectorAll('.load')
        loaded.forEach(load => {
          load.classList.remove('load')
        })
      });


  // IntersectionObserverで要素を20%読み込んだらクラスを付与する
  function appearItems() {
    const targets = document.querySelectorAll('.appear');
    
    function callback(entries, obs) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('show');
          obs.unobserve(entry.target)
        }
      }
    )};
    
    const options = {
      threshold: 0.2,
    };
    
    const observer = new IntersectionObserver(callback, options);
    targets.forEach(target => {
      observer.observe(target);
    });
  }
  window.addEventListener('load', appearItems);



  // メニューのカルーセル
  const swiper = new Swiper('.swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  // storeセクションの文言変更
  const text = document.querySelector('.store-explain');
  
  if(window.matchMedia("(min-width:551px)").matches) {
    text.innerHTML = "手作りのインテリアが並ぶアンティーク調の店内は<br>皆様の“Sanctuary“になりますようにという願いを込めた空間に";
  }

}