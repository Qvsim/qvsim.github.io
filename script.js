document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll spy: highlight active section in nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function updateActiveLink() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

window.addEventListener('scroll', updateActiveLink);
