window.customElements.define('contact-bar',
class extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<div class = "contact-bar">
		  <div class = "format">
			<contact-button slot= "mail">mailto:lam.angelak@gmail.com</contact-button>
			<contact-button slot= "linkedin">https://www.linkedin.com/in/angelaklam/</contact-button>
			<contact-button slot= "github">https://github.com/kyrnen</contact-button>
			<contact-button slot= "twitter">https://twitter.com/angklam</contact-button>
			<contact-button slot= "instagram">https://www.instagram.com/angelaklam/</contact-button>
			<contact-button slot= "twitch">https://www.twitch.tv/enkyr</contact-button>
		  </div>
		</div>
	`
	}
});

const contBar = document.querySelector('contact-bar');
console.dir(contBar);