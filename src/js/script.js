document.body.onload = function preloader() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 100)
}
