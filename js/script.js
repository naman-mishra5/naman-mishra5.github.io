/* toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

/* typed js */

const typed = new Typed('.multiple-text', {
  strings: ['Writer', 'Researcher', 'Traveller'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 300,
  loop: true,
})
