class NavBar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
			.navbar {
			  display: flex;
			  flex-direction: column;
			  justify-content: space-between;
			  width: 75px;
			  min-height: 40%;
			}
		</style>
		<div class = "navbar">
			<nav-button slot ="about">About Me</nav-button>
			<nav-button slot ="projects">Projects</nav-button>
			<nav-button slot ="hobbies">Hobbies</nav-button>
			<nav-button slot="resume">R&#0233;sum&#0233;</nav-button>
		</div>
	  `
	}
}

window.customElements.define('nav-bar', NavBar);

const navBar = document.querySelector('nav-bar');
console.dir(navBar);
