'use stridt' ;

{

  // アコーディオン
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
  // アコーディオン


  // PC版メリットオパシティ
  const btn01 = document.getElementById('merit_btn01');
  const btn02 = document.getElementById('merit_btn02');
  const btn03 = document.getElementById('merit_btn03');
  const btn04 = document.getElementById('merit_btn04');
  const img01 = document.getElementById('merit_img01');
  const img02 = document.getElementById('merit_img02');
  const img03 = document.getElementById('merit_img03');
  const img04 = document.getElementById('merit_img04');
  
  btn01.addEventListener('click', function() {
    this.classList.add('appear');
    btn02.classList.remove('appear');
    btn03.classList.remove('appear');
    btn04.classList.remove('appear');
    img01.classList.replace('img_hidden', 'img_visible');
    img02.classList.replace('img_visible','img_hidden');
    img03.classList.replace('img_visible','img_hidden');
    img04.classList.replace('img_visible','img_hidden');
  });
  
  btn02.addEventListener('click', function() {
    this.classList.add('appear');
    btn01.classList.remove('appear');
    btn03.classList.remove('appear');
    btn04.classList.remove('appear');
    img02.classList.replace('img_hidden', 'img_visible');
    img01.classList.replace('img_visible','img_hidden');
    img03.classList.replace('img_visible','img_hidden');
    img04.classList.replace('img_visible','img_hidden');
  });
  
  btn03.addEventListener('click', function() {
    this.classList.add('appear');
    btn01.classList.remove('appear');
    btn02.classList.remove('appear');
    btn04.classList.remove('appear');
    img03.classList.replace('img_hidden', 'img_visible');
    img01.classList.replace('img_visible','img_hidden');
    img02.classList.replace('img_visible','img_hidden');
    img04.classList.replace('img_visible','img_hidden');
  });
  
  btn04.addEventListener('click', function() {
    this.classList.add('appear');
    btn01.classList.remove('appear');
    btn02.classList.remove('appear');
    btn03.classList.remove('appear');
    img04.classList.replace('img_hidden', 'img_visible');
    img01.classList.replace('img_visible','img_hidden');
    img02.classList.replace('img_visible','img_hidden');
    img03.classList.replace('img_visible','img_hidden');
  });
  // PC版メリットオパシティ

  // ハンバーガー
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const logo = document.querySelector('.logo');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    logo.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    logo.classList.remove('hide');
  });
  // ハンバーガー

  // カルーセル
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.carousel_img');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.carousel_btn').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();
  
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });
  
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

}