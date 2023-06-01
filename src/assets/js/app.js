import Swiper from 'swiper/bundle';
import { useDynamicAdapt } from './dynamicAdapt';

if(document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 32,
        parallax: true,
        observer: true,
        observerParents: true,
        watchOverflow: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
      
        // If we need pagination
        pagination: {
          el: '.controls-slider-main__dotts',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider-main .slider-arrow__next',
          prevEl: '.slider-main .slider-arrow__prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
    
}

useDynamicAdapt();

window.onload = function () {
    
    document.addEventListener('click', documentActions);

    //Actions (делегирование события click)

    function documentActions(e) {
        const targetElement = e.target;

        if(window.innerWidth > 768) {
            if (targetElement.classList.contains('menu__arrow-img')) {
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
                let rmv = document.querySelectorAll('.menu__item._hover')
                rmv.forEach(item => {
                    item.classList.remove('_hover')
                })
            }
        }

        let search = document.querySelector('.search__form')
        if (targetElement.classList.contains('search__form-icon1')) {
            search.classList.toggle('_active')
        }
        if (!targetElement.closest('.search__form') && search.classList.contains('_active')) {
            search.classList.remove('_active')
        }

        if(window.innerWidth < 768) {
            if (targetElement.classList.contains('menu__arrow-img')) {
                targetElement.closest('.menu__item').classList.toggle('_touch');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._touch').length > 0) {
                let rmv = document.querySelectorAll('.menu__item._touch')
                rmv.forEach(item => {
                    item.classList.remove('_touch')
                })
            }
        }

        if(targetElement.classList.contains('burgerBtn')) {
            document.querySelector('.burger').classList.toggle('active')
            document.querySelector('.menu__body').classList.toggle('_active')
        }

        if(window.innerWidth < 768) {
            if(targetElement.classList.contains('menu-footer__column') || targetElement.classList.contains('menu-footer__title') || targetElement.closest('.menu-footer__column')) {
                targetElement.closest('.menu-footer__column').classList.toggle('_active')
            } else if (!targetElement.closest('.menu-footer__column') && document.querySelectorAll('.menu-footer__column._active').length > 0) {
                let rmv = document.querySelectorAll('.menu-footer__column')
                rmv.forEach(item => {
                    item.classList.remove('_active');
                })
            }
        }
    }


    // Header
    const headerElement = document.querySelector('.header');

    const callback = function(entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll')
        } else {
            headerElement.classList.add('_scroll')
        }
    }

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement)
}




