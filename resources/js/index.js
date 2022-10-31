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