


const app = (function app(){
	"use strict";

	var displayBlock; // affectée hors function car on la ré-utilise

	const start = function start(){
		displayBlock= document.getElementById("scroll_position");
		window.addEventListener("scroll", getScrollPos);
	};

	const getScrollPos = function getScrollPos(){
		//console.log(window.scrollY);
		const pos = window.scrollY + "px";
		displayBlock.innerText = `scrollY : ${pos}`;
		displayBlock.style.top = pos;  // la div où y'a les pixels(hauteur du scroll) suit le scroll
		
	};


	window.addEventListener("DOMContentLoaded", start);
}());


	






