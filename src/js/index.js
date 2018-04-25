const hamburger = document.querySelector('.hamburger-icon');
const links = document.querySelectorAll('.navbar-link');

hamburger.addEventListener('click', toggleNavbar);

function toggleNavbar(e) {
  [...links].map(link => {
    if (link.style.display == 'none' || !link.style.display) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
}
