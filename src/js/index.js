((document) => {
	const element     = document.querySelector('[data-copyright]');
	const date        = new Date();
	element.innerHTML = `© 2002-${date.getFullYear()} Компания DNS`;
})(document);
