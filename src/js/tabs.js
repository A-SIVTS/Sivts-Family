

const tabLinks = document.querySelectorAll('.plan__tab');
const tabItems = document.querySelectorAll('.item')


tabLinks.forEach(tab => {

	let currentBtn = tab
	let idLink = currentBtn.getAttribute('data-tab')
	const tabBlocks = document.querySelectorAll(idLink);

	if(currentBtn.classList.contains('active')) {
		
		tabBlocks.forEach(item => {
			item.classList.add('active')
		})
	} else {
		console.log('no(')
	}
	


	tab.addEventListener('click', () => {
		
	

	

	tabItems.forEach(item => {
		item.classList.remove('active')
	})

	tabBlocks.forEach(item => {
		item.classList.add('active')
	})
	



	tabLinks.forEach(tab => {
		tab.classList.remove('active')
	})

	currentBtn.classList.add('active');



	})
})