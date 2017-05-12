document.getElementById("toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
} );
/*
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	if(currentScroll > lastScrollTop){
		console.log("down");
		getElementById("header").classList.remove("header-in");
		getElementById("header").style.opacity = 0;
	}else{
		console.log("up");
		getElementById("header").classList.add("header-in");
		getElementById("header").classList.add("solid");
		getElementById("header").style.opacity = 1;
		if(currentScroll <= 3){
			getElementById("header").classList.remove("solid");
			getElementById("header").classList.remove("header-in");
		}
	}
	lastScrollTop = currentScroll;
}, false);
*/
