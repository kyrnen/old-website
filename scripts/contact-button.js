window.customElements.define('contact-button',
class extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<div class = "contact-button">
			<a href = ${this.innerText}>
				<img src = "icons/${this.slot}.svg" class = "contact-icon">
			</a>
		</div>
		`
	}
});

const contButton = document.querySelector('contact-button');
console.dir(contButton);