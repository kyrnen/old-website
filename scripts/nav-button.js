window.customElements.define('nav-button', class extends HTMLElement{
	constructor() {
		super();
		this.innerHTML = this.id === "desktop" ? null : `

		<style>
			.button {
			  min-width: 75px;
			  margin-top: 6.5px;
			  margin-bottom: 6.5px;
			  height: 75px;
			  background: lightgrey;
			  border-radius: 50%;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			}

			.button-icon {
			  width: 1.5em;
			  height: 1.5em;
			}
		</style>

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

const button = document.querySelector('nav-button');
console.dir(button);