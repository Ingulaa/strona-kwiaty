document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 0) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
});

const kc = document.querySelector('.kc');

const inga = () => {
	alert('Kocham Cię kotku <3');
};

kc.addEventListener('dblclick', inga);
