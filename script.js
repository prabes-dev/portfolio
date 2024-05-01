// Select all the navbar links
const navLinks = document.querySelectorAll('.options a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the link's href
    const targetId = event.target.getAttribute('href');

    // Get the target element
    const targetElement = document.querySelector(targetId);

    // Scroll to the target section smoothly
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});

// Select all the navbar links
const navLinks1 = document.querySelectorAll('.btnbox a');

// Add a click event listener to each link
navLinks1.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the link's href
    const targetId = link.href.split('#')[1];

    // Get the target element
    const targetElement = document.getElementById(targetId);

    // Scroll to the target section smoothly
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});

// for sticky navbar
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});





// for animation 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.animation-up, .ani1, .ani2, .ani3, .ani4, .ani5');
hiddenElements.forEach((el) => observer.observe(el));
