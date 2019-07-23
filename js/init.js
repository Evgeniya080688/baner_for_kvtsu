
var caruselEl = document.querySelector('.banner__content_js').children;
var arrCarusel = Array.prototype.slice.call(caruselEl); 
var paginatorEl = document.querySelector('.paginator_js');
var prevBtnEl = document.querySelector('.banner__nav--left');
var nextBtnEl = document.querySelector('.banner__nav--right');
var paginatorArrEl ;
var arrPaginator = [];
var arrButtons = [];
var index = 0;


function nextSlide() {
	if (index < arrCarusel.length-1) {
		index++;		
	}
	else {
		index = 0;
	}
	arrButtons[index].classList.add('paginator__btn--active');
	arrCarusel[index].classList.add('banner__slide--active');
	for (var i=0; i< arrButtons.length; i++ ) {
		if (i != index) {
			arrButtons[i].classList.remove('paginator__btn--active');
			arrCarusel[i].classList.remove('banner__slide--active');
		}
	}
}

function prevSlide() {
	if (index > 0) {
		index--;		
	}
	else {
		index = arrCarusel.length-1;
	}
	arrButtons[index].classList.add('paginator__btn--active');
	arrCarusel[index].classList.add('banner__slide--active');
	for (var i=0; i< arrButtons.length; i++ ) {
		if (i != index) {
			arrButtons[i].classList.remove('paginator__btn--active');
			arrCarusel[i].classList.remove('banner__slide--active');
		}
	}
}

//создание точек для пагинатора
for (var i=0; i<arrCarusel.length; i++) {	
	var paginatorItemEl = document.createElement('li');
	paginatorItemEl.classList.add('paginator__item');
	paginatorItemEl.innerHTML = '<button class="paginator__btn "></button>';
	paginatorEl.appendChild(paginatorItemEl);
	arrPaginator.push(paginatorItemEl);
}

//
paginatorArrEl = document.querySelectorAll('.paginator__btn');
paginatorArrEl[index].classList.add('paginator__btn--active');
arrCarusel[index].classList.add('banner__slide--active');


for (var i=0; i<arrCarusel.length; i++) {
 	arrButtons.push(paginatorArrEl[i]);
}

nextBtnEl.addEventListener('click', function(event) {
	nextSlide();
});

prevBtnEl.addEventListener('click', function(event) {
	prevSlide();
	console.log('work');
});

paginatorEl.addEventListener('click', function(event) {
	if (event.target.tagName == 'BUTTON') {
		
		event.target.classList.add('paginator__btn--active');

		index = arrButtons.indexOf(event.target);
		arrCarusel[index].classList.add('banner__slide--active');
		for (var i=0; i< arrButtons.length; i++ ) {
			if (i != index) {
				arrButtons[i].classList.remove('paginator__btn--active');
				arrCarusel[i].classList.remove('banner__slide--active');
			}
		}
		
	}
});	

setInterval(function() {
  nextSlide();
}, 5000);

// listTaskEl.addEventListener('click', function(event) {
// 	if (event.target.tagName == 'LI') {
// 		event.target.classList.toggle('trought');
// 	}
// });	


// var res = document.querySelector('.res');
// var arrElem = document.querySelectorAll('.div');
// var arrayElem = [];

// for (var i = 0; i < arrElem.length; i++){
//   arrayElem.push(arrElem[i]);
//   arrElem[i].addEventListener('click', function(e){
//      res.innerHTML = arrayElem.indexOf(e.target);
//   });
// }
