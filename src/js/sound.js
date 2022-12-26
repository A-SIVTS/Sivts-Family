const btn = document.querySelector('.footer__btn-sound');
const video = document.querySelector('.footer__video');

btn.addEventListener('click', soundOn);

function soundOn() {
	video.muted = false
	video.volume = 0.5;
	// alert(video.volume)
	btn.textContent = 'звук включен'
	btn.disabled = true;
}