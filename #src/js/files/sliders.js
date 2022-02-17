//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');

      if (slider.classList.contains('_swiper_scroll')) {
        let sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');
        slider.appendChild(sliderScroll);
      }
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
  for (let index = 0; index < sliderScrollItems.length; index++) {
    const sliderScrollItem = sliderScrollItems[index];
    const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
    const sliderScroll = new Swiper(sliderScrollItem, {
      observer: true,
      observeParents: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false
      },
      mousewheel: {
        releaseOnEdges: true,
      },
    });
    sliderScroll.scrollbar.updateSize();
  }
}


function sliders_bild_callback(params) { }

// Сюда пишем класс нашего слайдера и меняем переменную
let sliderBg = new Swiper('.slider', {
  // effect: 'fade',
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // autoHeight: true,
  speed: 2000,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.slider-main-next',
    prevEl: '.slider-main-prev',
  },
  /*
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1268: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  */
  on: {
    lazyImageReady: function () {
      ibg();
    },
  }
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});

// function sliders_bild_callback(params) { }

// Сюда пишем класс нашего слайдера и меняем переменную
let licenses_sl = new Swiper('.licenses-sl', {
  // effect: 'fade',
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  observer: true,
  observeParents: true,
  slidesPerView: 1.8,
  spaceBetween: 15,
  // autoHeight: true,
  speed: 2000,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //  el: '.slider-quality__pagging',
  //  clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.licenses-sl-next',
    prevEl: '.licenses-sl-prev',
  },

  breakpoints: {
    360: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3.8,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1100: {
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 23,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  }
  // And if we need scrollbar
  //scrollbar: {
  //  el: '.swiper-scrollbar',
  //},
});

// function sliders_bild_callback(params) { }

// Сюда пишем класс нашего слайдера и меняем переменную
let reviews_sl = new Swiper('.reviews-sl', {
  // effect: 'fade',
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  observer: true,
  observeParents: true,
  slidesPerView: 1.8,
  spaceBetween: 15,
  // autoHeight: true,
  speed: 2000,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //  el: '.slider-quality__pagging',
  //  clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.reviews-sl-next',
    prevEl: '.reviews-sl-prev',
  },

  breakpoints: {
    360: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3.8,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1100: {
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 23,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  }
  // And if we need scrollbar
  //scrollbar: {
  //  el: '.swiper-scrollbar',
  //},
});

// function sliders_bild_callback(params) { }

// Сюда пишем класс нашего слайдера и меняем переменную
let clients_sl = new Swiper('.clients-sl', {
  // effect: 'fade',
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  observer: true,
  observeParents: true,
  slidesPerView: 1.1,
  spaceBetween: 10,
  // autoHeight: true,
  speed: 2000,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //  el: '.slider-quality__pagging',
  //  clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.clients-sl-next',
    prevEl: '.clients-sl-prev',
  },

  breakpoints: {
    360: {
      slidesPerView: 1.8,
    },
    540: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 2.5,
    },
    812: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  }
  // And if we need scrollbar
  //scrollbar: {
  //  el: '.swiper-scrollbar',
  //},
});