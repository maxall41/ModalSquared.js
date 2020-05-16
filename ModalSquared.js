function ShowModal(e) {
	var l,
		o = document.getElementsByClassName('content')[0],
		n = document.querySelectorAll('.modal');
	for (l = 0; l < n.length; l += 1) {
		n[l].id == e && ((n[l].style.display = 'block'), o.classList.add('blur'));
	}
}
function HideModal(e) {
	var l,
		o = document.getElementsByClassName('content')[0],
		n = document.querySelectorAll('.modal');
	for (l = 0; l < n.length; l += 1) {
		n[l].id == e && ((n[l].style.display = 'none'), o.classList.remove('blur'));
	}
}
window.onload = function() {
	var e,
		l = document.querySelectorAll('.modal');
	for (e = 0; e < l.length; e += 1) {
		l[e].style.display = 'none';
	}
	console.log(l);
	const close = document.querySelectorAll('[data-modal-close]');
	var k;
	for (k = 0; k < close.length; k += 1) {
		close[k].addEventListener('click', function() {
			console.log('data-modal-close click detected');
			console.log(k);
			var j;
			var toclose = document.querySelectorAll('.modal');
			for (j = 0; j < toclose.length; j += 1) {
				toclose[j].style.display = 'none';
				o = document.getElementsByClassName('content')[0];
				o.classList.remove('blur');
			}
		});
	}
};
