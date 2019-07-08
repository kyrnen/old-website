window.customElements.define('d-nav-button', class extends HTMLElement{
	constructor() {
		super();
		console.log("Inside Constructor")
		this.innerHTML = this.id === "desktop" ? null : `
		<div class = "format">
          <div id = ${this.slot} class = "button">
            <a href = "scripts/${this.slot}.html" >
              <img src="icons/${this.slot}.svg" class = "button-icon">
            </a>
          </div>
          <div class = "description">
            ${this.innerText}
          </div>
        </div>`
		}
});

const button = document.querySelector('d-nav-button');
console.dir(button);