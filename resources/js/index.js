/* Navbar animation */
let navbar = document.querySelector(".navbar");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
	let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	navbar.classList.add("hidden");
    } else {
    	navbar.classList.remove("hidden");
    }
    lastScrollValue = top;
});

/* Menu Hamburger animation on click */
const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation);

function presentation() {
    btn.classList.toggle('active')
}

/* Menu hamburger toggle navlinks on click */
const menuHamburger = document.querySelector(".cont-lines")
const navLinks = document.querySelector(".navbar__navigation")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
});

/*  */
// const signin = document.querySelector('.navbar__right-side__sign-in');
// const li = document.createElement('li');

// li.appendChild(signin);

// const currentLi = document.querySelector(".navbar_last-element");
// document.insertBefore(li, currentLi);