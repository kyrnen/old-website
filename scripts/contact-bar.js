window.customElements.define('contact-bar', 
class extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = 
		`
		<div class = "contact-info">
		  <div class = "format">
			<div class = "contact-button">
			  <a href = "mailto:lam.angelak@gmail.com">
				<img src = "icons/mail.svg" class = "contact-icon">
			  </a>
			</div>
			<div class = "contact-button">
			  <a href = "https://www.linkedin.com/in/angelaklam/">
				<img src = "icons/linkedin.svg" class = "contact-icon">
			  </a>
			</div>
			<div class = "contact-button">
			  <a href = "https://github.com/kyrnen">
				<img src = "icons/github.svg" class = "contact-icon">
			  </a>
			</div>
			<div class = "contact-button">
			  <a href = "https://twitter.com/angklam">
				<img src = "icons/twitter.svg" class = "contact-icon">
			  </a>
			</div>
			<div class = "contact-button">
			  <a href = "https://www.instagram.com/angelaklam/">
				<img src = "icons/instagram.svg" class = "contact-icon">
			  </a>
			</div>
			<div class = "contact-button">
			  <a href = "https://www.twitch.tv/enkyr">
				<img src = "icons/twitch.svg" class = "contact-icon" id="twitch">
			  </a>
			</div>
		  </div>
		</div>
		`
	}
});