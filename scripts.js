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

