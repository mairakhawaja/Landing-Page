document.addEventListener("DOMContentLoaded", function() {
    // Select all icons within the techstack-section and both scrolling text containers
    const icons = document.querySelectorAll('#techstack-section .icon');
    const scrollingTexts = document.querySelectorAll('.moving-text');
    const techStackSection = document.getElementById('techstack-section');
  
    // Function to update the scrolling text
    function updateScrollingText(newText) {
      scrollingTexts.forEach(scrollingText => {
        scrollingText.innerHTML = `<span>${newText}</span><span>${newText}</span>`;
  
        // Reset the animation to restart the scroll effect
        scrollingText.style.animation = 'none';
        setTimeout(() => {
          scrollingText.style.animation = 'scroll-text 15s linear infinite'; // Explicitly reset the animation name
        }, 50); // Small delay to allow animation reset
      });
    }
  
    // Add event listeners to each icon for hover and leave
    icons.forEach(icon => {
      // On mouse enter, update the text with the icon's data-text
      icon.addEventListener('mouseenter', () => {
        const newText = icon.getAttribute('data-text');
        if (newText) {
          updateScrollingText(newText);
        }
      });
  
      // On mouse leave, reset the text back to "TECHSTACK"
      icon.addEventListener('mouseleave', () => {
        updateScrollingText('TECHSTACK TECHSTACK TECHSTACK TECHSTACK TECHSTACK');
      });
    });
  
    // Handle scroll event to toggle visibility of techstack-section
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
  
      // Add logic to show/hide tech stack section based on scroll position
      if (scrollPosition > 300) {  // Adjust the threshold as needed
        techStackSection.style.display = 'block';  // Show the section
      } else {
        techStackSection.style.display = 'block';  // Keep the section visible
      }
    });
  
    // Navbar show/hide based on scroll direction
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById("roundNavbar");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY < lastScrollY) {
        // Show the navbar when scrolling up
        navbar.classList.add("show");
        navbar.classList.remove("hide");
      } else {
        // Hide the navbar when scrolling down
        navbar.classList.add("hide");
        navbar.classList.remove("show");
      }
      lastScrollY = window.scrollY;
    });
  });
  

