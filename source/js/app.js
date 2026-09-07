
const burgerButton = document.querySelector('.burger-menu');
const headerMobileContiner = document.querySelector('.header__mobile-continer')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-menu--is-active');
  headerMobileContiner.classList.toggle('header__mobile-continer--is-active')
});

const swiperComments = new Swiper('.comments .swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  speed: 1000,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    935: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
})

const swiperAdvantages = new Swiper('.advantages .swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  speed: 1000,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


document.addEventListener('DOMContentLoaded', () => {
    const summaries = document.querySelectorAll('.questions__summary');

    summaries.forEach((summary) => {
        summary.addEventListener('click', (event) => {

            event.preventDefault();

            summary.classList.toggle('questions__summary--is-active');

            const details = summary.closest('.questions__details');

            if (details) {

                if (details.hasAttribute('open')) {
                    details.removeAttribute('open');
                } else {
                    details.setAttribute('open', '');
                }
            }
        });
    });
});


(() => {
  const checkIframe = () => {
    const iframe = document.querySelector(".footer__iframe");
    const picture = document.querySelector(".footer__picture");

    if (!iframe || !picture) return;

    function showMap() {
      iframe.classList.add("is-loaded");
      picture.classList.add("is-hidden");
    }

    try {
      if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
        showMap();
        return;
      }
    } catch (e) {
    }
    iframe.addEventListener("load", showMap);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkIframe);
  } else {
    checkIframe();
  }
})();
