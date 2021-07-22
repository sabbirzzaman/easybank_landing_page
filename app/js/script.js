const hamburgerMenu = document.querySelector("#hamburgerMenu");
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobileHeader = document.querySelector('.header__menu')

hamburgerMenu.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Hamburger Toggle Close
    header.classList.remove("open");
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in')
    mobileHeader.classList.add('has-fade')
    body.classList.remove('noscroll')
  } else {
    // Hamburger Toggle Open
    header.classList.add("open");
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    mobileHeader.classList.remove('has-fade');
    body.classList.add('noscroll')
  }
});