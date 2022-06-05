

const burgerIcon = document.querySelector('.burger-icon');
const burgerOpen = document.querySelector('.burger_fixed');
const burgerClose = document.querySelector('.burger');
const arrows = document.querySelectorAll('.menu_list')
const subMenu = document.querySelector('.sub_menu_list')
const arrowLink = document.querySelector('.icon-arrow-link')
const arrowsDowns = document.querySelectorAll('.icon-arrow-down')
const arrowsDown = document.querySelector('.icon-arrow-down')
const bodyLock = document.querySelector('body')
const burgerCloseIcon = document.querySelector('.burger-icon_close')




burgerIcon.addEventListener('click', function click(event) {
	if (event.target.closest('.burger-icon')) {
		burgerOpen.classList.add('_open')
		bodyLock.classList.add('_lock')
		burgerCloseIcon.classList.add('_open')
	}
})

burgerClose.addEventListener('click', function click(event) {
	if (event.target.closest('.burger')) {
		burgerOpen.classList.remove('_open')
		bodyLock.classList.remove('_lock')
		burgerCloseIcon.classList.remove('_open')
	}
})



document.addEventListener('DOMContentLoaded', () => {

	let myBtns = document.querySelectorAll('.icon-arrow-link');
	myBtns.forEach(function (btn) {

		btn.addEventListener('click', () => {
			//   myBtns.forEach(b => b.classList.remove('_active'));
			btn.classList.add('_active');
			arrowsDown.classList.add('_open')
			arrowsDown.addEventListener('click', function click(event) {
				if (event.target.closest('.icon-arrow-down')) {
					btn.classList.remove('_active');
					arrowsDown.classList.remove('_open')
				}
			})

		});

	});

});
new Swiper('.header_slider' , {
	pagination: {
		el: '.swiper-pagination',
	  },
	 
	  effect:'coverflow',
	  coverflowEffect:{
		  rotate:20,
		  stretch:50,
		  slideShadows:true,
	  },
	  breakpoints: {
		320:{
			slidesPerView: 1,
			
		},
		480:{
			slidesPerView: 3,
		
		},
		920:{
			slidesPerView: 3,
			
		}
	}
});
new Swiper('.main__popular-product__item__swiper' , {
	pagination: {
		el: '.swiper-pagination',
	  },
	  
});
new Swiper('.main__product-sale__item__swiper' , {
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
	  autoHeight: true,
	  
});
new Swiper('.main__product-sale-swiper' , {
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
  autoHeight: true,

	breakpoints: {
		320:{
			slidesPerView: 1,
			spaceBetween: 10,
		},
		480:{
			slidesPerView: 2,
			spaceBetween: 15,
		},
		920:{
			slidesPerView: 4,
			spaceBetween: 20,
		}
	}
});