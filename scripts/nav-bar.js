//window.customElements.define('nav-bar', class extends HTMLElement{

//});

class NavBar extends HTMLElement {
	constructor() {
		super();
		console.log("Inside Constructor")
		this.innerHTML = `
		<div class = "bar">
			<d-nav-button slot ="about">About Me</d-nav-button>
			<d-nav-button slot ="projects">Projects</d-nav-button>
			<d-nav-button slot ="hobbies">Hobbies</d-nav-button>
			<d-nav-button slot="resume">R&#0233;sum&#0233;</d-nav-button>
		</div>
	  `
	}
}

window.customElements.define('nav-bar', NavBar);

const navBar = document.querySelector('nav-bar');
console.dir(navBar);
