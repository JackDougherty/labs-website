console.log('HEAD: Start script')
var headerHeight = document.getElementById("header-stripe").offsetHeight;
var transisitonHeight = headerHeight / 2
var deltaHeight = headerHeight - transisitonHeight

console.log('header height:',headerHeight, 'transisition height:',transisitonHeight, 'scrollTop:', document.documentElement.scrollTop)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementById('header-stripe');
    console.log('className', header.className)
    // if (document.body.scrollTop > transisitonHeight || document.documentElement.scrollTop > transisitonHeight) {
    // if (document.body.scrollTop > transisitonHeight) {
    if (document.documentElement.scrollTop > transisitonHeight && header.className != 'fixed') {
        console.log('scroll BEFORE changing TO fixed', document.documentElement.scrollTop)
        header.classList.add('fixed');
        window.scrollTo(0, document.documentElement.scrollTop - deltaHeight)
        console.log('scroll AFTER changing TO fixed', document.documentElement.scrollTop)
        // console.log('HEAD: add fixed CSS')
    // } else if (document.documentElement.scrollTop < transisitonHeight && header.className == 'fixed') {
    //     console.log('scroll BEFORE changing FROM fixed', document.documentElement.scrollTop)
    //     header.classList.remove('fixed');
    //     // console.log('HEAD: remove fixed CSS')
    //     window.scrollTo(0, document.documentElement.scrollTop + deltaHeight)
    //     // document.documentElement.scrollTop = document.documentElement.scrollTop + deltaHeight       
    //     console.log('scroll AFTER changing FROM fixed', document.documentElement.scrollTop)
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