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

/* Accordion for FAQ */

const faqAll = document.querySelectorAll(".faq__content");

const openFaq = (accordeon) => {
    const content = accordeon.querySelector(".faq__accordeon");
    accordeon.classList.add("accordeon__active");
    content.style.opacity = 1;
    content.style.position = "relative";

    content.style.height = "50px";
}

const closeFaq = (accordeon) => {
    const content = accordeon.querySelector(".faq__accordeon");
    accordeon.classList.remove("faq__accordeon");
    content.style.opacity = 0;
    content.style.height = 0;
}

faqAll.forEach((accordeon) => {
    const button = accordeon.querySelector(".faq__button");
	const content = accordeon.querySelector(".faq__accordeon");

    button.onclick = () => {
		if (content.style.opacity == 1) {
			closeFaq(accordeon);
		} else if (content.style.opacity == 0) {
            faqAll.forEach((accordeon) => closeFaq(accordeon));
			openFaq(accordeon);
		}
	};
})

