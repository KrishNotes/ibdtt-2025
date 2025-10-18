window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.mobileNav');
    if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
    } else {
    navbar.classList.remove('scrolled');
    }
});

function mobileNavMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
    document.getElementById("hamburger").classList.toggle("active");
    document.getElementById("mobileNavOverlay").classList.toggle("active");
}

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;
let autoSlideInterval;
const slideDuration = 7000; // 7 seconds

// Initialize: set the first slide as active
function initSlider() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[0].classList.add('active');
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, slideDuration);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Event listeners for manual navigation
next.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prev.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Start the slider
initSlider();
startAutoSlide();

