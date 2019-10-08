const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const modalWindow = document.querySelector('.modal');
btnMenu.onclick = function() {
	modalWindow.classList.add('visible');
};
btnClose.onclick = function() {
	modalWindow.classList.remove('visible');
};
