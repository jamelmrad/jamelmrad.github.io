const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");
const home = document.getElementById("home");

var navlist = document.getElementById("nav");
var sticky = navlist.offsetTop;

var elem_id;
const y = 'section';

function go(elem_id) {
        const x = elem_id.concat('_',y);
        const z = document.getElementById(x);
        if ( elem_id == "btn")
        {
            const w = document.getElementById("about".concat('_',y));
            w.scrollIntoView();
        }
        if ( elem_id == "home")
        {
            const w = document.getElementById("hero".concat('_',y));
            w.scrollIntoView();
        }
        z.scrollIntoView();
} 

//sticky nav bar !
window.onscroll = function() {myFunction()};
        /* Function to stick the nav bar */
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navlist.classList.add("sticky")
            }
            else {
                navlist.classList.remove("sticky");
            }
        }