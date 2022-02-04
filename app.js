const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

var navlist= document.querySelector("nav");
var sticky = navlist.offsetTop;

var elem_id;
const y = 'Section';
hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

//smooth scroll in single page
function go(elem_id)
{
    const x = elem_id.concat('',y);
    const z = document.getElementById(x);
    z.scrollIntoView();
}

//sticky navbar
window.onscroll = function() {myFunction()};
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("sticky")
    }else {
        navlist.classList.remove("sticky");
    }
}