import { sendMessageWithTg } from "./tg.js";

document.addEventListener('DOMContentLoaded', () => {


	
const modalBtn = document.querySelectorAll('.btn-m');
const modalCLoseBtn = document.querySelector('.modal__close')
const modal = document.querySelector('.modal__overlay');
const form = document.querySelector('.modal__form');

const s_modal = $.modal({
    title: "Данные успешно отправлены. Скоро мы с вами свяжемся",
    btnText: "вернуться на главную",
    href: "/",
});

modalBtn.forEach(item => {
	item.addEventListener('click', () => {
	modal.classList.add('show')
	document.body.classList.add('_lock')
	})
})

modalCLoseBtn.addEventListener('click', () => {
	modal.classList.remove('show')
	document.body.classList.remove('_lock')
})

form.addEventListener('submit', (e) => {
	e.preventDefault()
	let self = e.currentTarget;

	const userName = self.querySelector('[name="userName"]').value;
	const userPhone = self.querySelector('[name="userPhone"]').value;



	let Data = {}
	Data.userName = userName;
	Data.userPhone = userPhone;

	console.log(Data)

	sendMessageWithTg(JSON.stringify(Data))
	self.reset()
	modal.classList.remove('show')
	document.body.classList.remove('_lock')
	s_modal.open()

})

})
