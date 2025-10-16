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
