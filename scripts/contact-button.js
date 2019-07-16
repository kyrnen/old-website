window.customElements.define('contact-button',
class extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
			.contact-icon {
			  width: 0.769em;
			  height: 0.769em;
			}

			.contact-button {
			  width: 0.769em;
			  height: 0.769em;
			  margin: 6.5px;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			}
		</style>

		<div class = "contact-button">
			  <a href = "${this.innerText}">
				<img src = "icons/${this.id}.svg" class = "contact-icon">
			  </a>
		</div>
		`
	}
}
);