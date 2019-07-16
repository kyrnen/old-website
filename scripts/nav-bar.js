window.customElements.define('nav-bar', 
class extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<div class = "nav-bar">
			<nav-button slot ="about">About Me</nav-button>
			<nav-button slot ="projects">Projects</nav-button>
			<nav-button slot ="hobbies">Hobbies</nav-button>
			<nav-button slot="resume">R&#0233;sum&#0233;</nav-button>
		</div>
	  `
	}
});

const navBar = document.querySelector('nav-bar');
console.dir(navBar);
