const questions = document.getElementsByClassName('qestion');
for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function() {
		this.classList.toggle('active');
		this.lastChild.classList.toggle('arrow');
		let answer = this.nextElementSibling;
		if (answer.style.display === 'block') {
			answer.style.display = 'none';
		} else {
			answer.style.display = 'block';
		}
	});
}
