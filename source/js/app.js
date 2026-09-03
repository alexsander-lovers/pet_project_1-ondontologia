
const burgerButton = document.querySelector('.burger-menu');
const headerMobileContiner = document.querySelector('.header__mobile-continer')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-menu--is-active');
  headerMobileContiner.classList.toggle('header__mobile-continer--is-active')
});
