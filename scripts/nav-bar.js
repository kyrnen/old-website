window.customElements.define('nav-bar', 
class extends HTMLElement {
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
			
			<div class = "format">
			  <div id = resume class = "button">
				<a href = "https://kyrnen.github.io/2019 Angela Lam Resume.pdf" target = "_blank">
				  <img src="icons/resume.svg" class = "button-icon">
				</a>
			  </div>
			  <div class = "description">
				R&#0233;sum&#0233;
			  </div>
			</div>
		</div>
	  `
	}
});

const navBar = document.querySelector('nav-bar');
console.dir(navBar);
