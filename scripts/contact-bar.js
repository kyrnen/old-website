window.customElements.define('contact-bar', 
class extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = 
		`
		<style>
			.contact-bar {
			  position: absolute;
			  bottom: 2%;
			  right: 2%;
			}
		</style>

		<div class = "contact-bar">
		  <div class = "format">
			<contact-button id ="mail">mailto:lam.angelak@gmail.com</contact-button>
			<contact-button id ="linkedin">https://www.linkedin.com/in/angelaklam/</contact-button>
			<contact-button id ="github">https://github.com/kyrnen</contact-button>
			<contact-button id ="twitter">https://twitter.com/angklam</contact-button>
			<contact-button id ="instagram">https://www.instagram.com/angelaklam/</contact-button>
			<contact-button id ="twitch">https://www.twitch.tv/enkyr</contact-button>
		  </div>
		</div>
		`
	}
});