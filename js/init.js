
var caruselEl = document.querySelector('.banner__content_js').children;
var arrCarusel = Array.prototype.slice.call(caruselEl); 
var paginatorEl = document.querySelector('.paginator_js');
var paginatorArrEl ;
var arrPaginator = [];
var arrButtons = [];
var index = 0;

function setHidden(arr) {
	for (var i=0; i< arr.lenght; i++) {
		arr[i].classList.add('visually-hidden');
	}
}

function noActiv(arr) {
	for (var i=0; i< arr.lenght; i++) {
		arr[i].classList.remove('paginator__btn--active');
	}
}

function NextSlide(index) {

}

function PrevSlide(index) {

}

for (var i=0; i<arrCarusel.length; i++) {	
	var paginatorItemEl = document.createElement('li');
	paginatorItemEl.classList.add('paginator__item');
	paginatorItemEl.innerHTML = '<button class="paginator__btn "></button>';
	paginatorEl.appendChild(paginatorItemEl);
	arrPaginator.push(paginatorItemEl);
}

paginatorArrEl = document.querySelectorAll('.paginator__btn');
arrPaginator[index].children[0].classList.add('paginator__btn--active');
arrCarusel[index].classList.remove('visually-hidden');


for (var i=0; i<arrCarusel.length; i++) {
	arrButtons.push(paginatorArrEl[i]);
	paginatorArrEl[i].addEventListener('click', function(e){
    	index = arrButtons.indexOf(e.target);
    	arrCarusel[index].classList.remove('visually-hidden');
    	arrButtons[index].classList.add('paginator__btn--active');
	});
}



console.log(arrCarusel);

// var res = document.querySelector('.res');
// var arrElem = document.querySelectorAll('.div');
// var arrayElem = [];

// for (var i = 0; i < arrElem.length; i++){
//   arrayElem.push(arrElem[i]);
//   arrElem[i].addEventListener('click', function(e){
//      res.innerHTML = arrayElem.indexOf(e.target);
//   });
// }
