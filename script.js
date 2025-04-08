

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Smooth scroll for "myButton"
let myButton = document.getElementById("myButton");
if (myButton) {
    myButton.addEventListener("click", () => {
        let mySection = document.getElementById("mySection");
        if (mySection) {
            mySection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Smooth scroll for "btn"
let contactButton = document.getElementById("btn");
if (contactButton) {
    contactButton.addEventListener("click", () => {
        let contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        mobileNav.style.display = (mobileNav.style.display === 'flex') ? 'none' : 'flex';
    }
}
