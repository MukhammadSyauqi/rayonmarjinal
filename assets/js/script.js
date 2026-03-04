// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        const mobileMenu = document.querySelector(".mobile-menu");
        const hamburger = document.querySelector(".hamburger");
        if (mobileMenu && mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active");
          hamburger.classList.remove("active");
        }
      }
    });
  });

  // Navbar scroll effect
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.background = "rgba(7, 35, 80, 0.85)";
      nav.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
      nav.style.padding = "1rem 5%";
    } else {
      nav.style.background = "rgba(255, 255, 255, 0.05)";
      nav.style.boxShadow = "none";
      nav.style.padding = "1.5rem 5%";
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements to animate
  const animateElements = document.querySelectorAll(
    ".glass-card, .section-title, .section-subtitle, .values-center, .download-card, .timeline-item",
  );
  animateElements.forEach((el) => {
    if (!el.classList.contains("fade-up")) {
      el.classList.add("fade-up");
    }
    observer.observe(el);
  });
});
