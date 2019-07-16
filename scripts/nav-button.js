window.customElements.define('nav-button', 
class extends HTMLElement{
	constructor() {
		super();
		this.innerHTML = `
		<div class = "format">
          <div id = ${this.slot} class = "button">
            <a href = "scripts/${this.slot}.html" >
              <img src="icons/${this.slot}.svg" class = "button-icon">
            </a>
          </div>
          <div class = "description">
            ${this.innerText}
          </div>
        </div>
		`
		}
});

const button = document.querySelector('nav-button');
console.dir(button);