var typed=new Typed(".multiple-text", {
  
    strings:["FRONTEND DEVELOPER","UI/UX DESIGNER","PROGRAMMER" ,],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    cursorChar: "|",
    cursorChar: `<svg width="20" height="40" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" font-size="30" fill="none" stroke="white">|</text>
 </svg>`
})
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');
window.onscroll= () =>
{
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
            };
        });

      
    // sticky navbar
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
// remove toggle icon and navbar when click navbar link(scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// JavaScript to toggle dropdown visibility
document.getElementById("resume-toggle").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from propagating to document
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("show");
  });
  
  // Hide dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown-menu");
    if (!dropdown.contains(event.target) && event.target.id !== "resume-toggle") {
      dropdown.classList.remove("show");
    }
  });

//   scroll top icon
document.addEventListener("scroll", function() {
    const homeSection = document.querySelector("#home");
    const iconTop = document.querySelector(".footer-iconTop");

    // Check if the user has scrolled past the #home section
    if (window.scrollY > homeSection.offsetHeight) {
        iconTop.style.display = "flex"; // Show the icon
    } else {
        iconTop.style.display = "none"; // Hide the icon
    }
});

