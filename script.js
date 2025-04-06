

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.queryselector('header nav a[href*=' + id + ' ]').classList.add('active')
            });

           
        }
        
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("mySection").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
  
  function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}