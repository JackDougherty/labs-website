console.log('HEAD: Start script')
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementById('header-stripe');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('fixed');
        console.log('HEAD: add fixed CSS')
    } else {
        header.classList.remove('fixed');
        console.log('HEAD: remove fixed CSS')
    }
}
// window.addEventListener('scroll', function () {
// 	const header = document.getElementById('header-stripe');
// 	console.log('HEAD: event listener')
// 	if (window.scrollY > 50) {
// 		header.classList.add('fixed');
// 		console.log('HEAD: add fixed CSS')
// 	} else {
// 		header.classList.remove('fixed');
// 		console.log('HEAD: remove fixed CSS')
// 	}
// });