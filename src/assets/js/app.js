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


const btnProducts = document.querySelector('.products__more');

useDynamicAdapt();

async function getProducts(button) {
    if (!button.classList.contains('_hold')) {
        button.classList.add('_hold');
        let file = 'https://api.jsonbin.io/v3/b/647ba68e9d312622a369f46f';
        let response = await fetch(file);
        if(response.ok) {
        let result = await response.json();

        
        const productPlace = document.querySelector('.products__items');

        result.record.forEach(item => {

        const productsId = item.id;        
        const productsUrl = item.url;        
        const productsTitle = item.title;        
        const productsText = item.text;        
        const productsLabels = item.labels;     
        const productsImage = item.image;        
        const productsPrice = item.price;        
        const productsPriceOld = item.priceOld;        
        const productsShareUrl = item.shareUrl;        
        const productsLikeUrl = item.likeUrl;
        

        let productsTemplateStart = `<article data-pid="${productsId}" class="products__item item-product">`
        let productsTemplateEnd = `</article>`

        let productsTemplateLabels = '';

        if(productsLabels) {
            const productsTemplateLabelsStart = `<div class="item-product__labels">`
            const productsTemplateLabelsEnd = `</div>`
            let productsTemplateLabelsContent = '';

            productsLabels.forEach(item => {
                productsTemplateLabelsContent += `<div class="item-product__label item-product__label_${item.type}">${item.value}</div>`
            })

            productsTemplateLabels += productsTemplateLabelsStart;
            productsTemplateLabels += productsTemplateLabelsContent;
            productsTemplateLabels += productsTemplateLabelsEnd;
        }

        let productTemplateImage = `<a class="item-product__image -ibg" href="${productsUrl}">
            <img src="assets/images/products/${productsImage}" alt="${productsTitle}"></a>`

        let productTemplateBodyStart = `<div class="item-product__body">`
        let productTemplateBodyEnd = `</div>`

        let productTemplateContent = `<div class="item-product__content">
            <h5 class="item-product__title">${productsTitle}</h5>
            <div class="item-product__text">${productsText}</div>
            </div>`

            let productsTemplatePricesStart = `<div class="item-product__prices">`
            let productsTemplatePricesEnd = `</div>`

            let productsTemplatePrices = '';
            
            let productsTemplatePriceNew = `<div class="item-product__price">${productsPrice}</div> `
            let productsTemplatePriceOld = `<div class="item-product__price item-product__price_old">${productsPriceOld}</div> `
            
            productsTemplatePrices += productsTemplatePricesStart;
            productsTemplatePrices += productsTemplatePriceNew;
            if (productsPriceOld) {
                productsTemplatePrices += productsTemplatePriceOld
            }
            productsTemplatePrices += productsTemplatePricesEnd


            let productTemplateActions = `<div class="item-product__actions actions-product">
                    <div class="actions-product__body">
                        <a class="actions-product__button _btn _white" href="">Add to cart</a>
                        <a class="actions-product__link" href="${productsShareUrl}">
                            <img src="assets/images/iconsfont/share.svg" alt="">
                            Share
                        </a>
                        <a class="actions-product__link" href="${productsLikeUrl}">
                            <img src="assets/images/iconsfont/white.svg" alt="">
                            Like
                        </a>
                    </div>
                </div>`;

            let productsMain = '';
            productsMain += productsTemplateStart;
            productsMain += productsTemplateLabels;
            productsMain += productTemplateImage;
            productsMain += productTemplateBodyStart;
            productsMain += productTemplateContent;
            productsMain += productsTemplatePrices;
            productsMain += productTemplateActions;
            productsMain += productTemplateBodyEnd;
            productsMain += productsTemplateEnd;

            productPlace.insertAdjacentHTML('beforeend', productsMain);
            })

            button.classList.remove('_hold');
            button.remove();
        } else {
            alert('Ошибка' + response.status);
        }
    }
}

// function loadProducts(data) {
//     const productPlace = document.querySelector('.products__items');
    
//     data.product.forEach(item => {
//         const productsId = item.id;        
//         const productsUrl = item.url;        
//         const productsTitle = item.title;        
//         const productsText = item.text;        
//         const productsLabels = item.labels;        
//         const productsImage = item.image;        
//         const productsPrice = item.price;        
//         const productsPriceOld = item.priceOld;        
//         const productsShareUrl = item.shareUrl;        
//         const productsLikeUrl = item.likeUrl;
        

//         let productsTemplateStart = `<article data-pid="${productsId}" class="products__item item-product">`
//         let productsTemplateEnd = `</article>`

//         let productsTemplateLabels = '';

//         if(productsLabels) {
//             let productsTemplateLabelsStart = `<div class="item-product__labels">`
//             let productsTemplateLabelsEnd = `</div>`
//             let productsTemplateLabelsContent = '';

//             productsLabels.forEach(item => {
//                 productsTemplateLabelsContent += `<div class="item-product__label item-product__label_${item.type}">${item.value}</div>`
//             })

//             productsTemplateLabels += productsTemplateLabelsStart;
//             productsTemplateLabels += productsTemplateLabelsContent;
//             productsTemplateLabels += productsTemplateLabelsEnd;
//         }

//         let productTemplateImage = `<a class="item-product__image -ibg" href="${productsUrl}">
//             <img src="assets/images/products/${productsImage}" alt="${productsTitle}"></a>`

//         let productTemplateBodyStart = `<div class="item-product__body">`
//         let productTemplateBodyEnd = `</div>`

//         let productTemplateContent = `<div class="item-product__content">
//             <h5 class="item-product__title">${productsTitle}</h5>
//             <div class="item-product__text">${productsText}</div>
//             </div>`

//             let productsTemplatePricesStart = `<div class="item-product__prices">`
//             let productsTemplatePricesEnd = `</div>`

//             let productsTemplatePrices = '';
            
//             let productsTemplatePriceNew = `<div class="item-product__price">Rp ${productsPrice}</div> `
//             let productsTemplatePriceOld = `<div class="item-product__price item-product__price_old">Rp ${productsPriceOld}</div> `
            
//             productsTemplatePrices += productsTemplatePricesStart;
//             productsTemplatePrices += productsTemplatePriceNew;
//             if (productsPriceOld) {
//                 productsTemplatePrices += productsTemplatePriceOld
//             }
//             productsTemplatePrices += productsTemplatePricesEnd


//             let productTemplateActions = `<div class="item-product__actions actions-product">
//                     <div class="actions-product__body">
//                         <a class="actions-product__button _btn _white" href="">Add to cart</a>
//                         <a class="actions-product__link" href="${productsShareUrl}">
//                             <img src="assets/images/iconsfont/share.svg" alt="">
//                             Share
//                         </a>
//                         <a class="actions-product__link" href="${productsLikeUrl}">
//                             <img src="assets/images/iconsfont/white.svg" alt="">
//                             Like
//                         </a>
//                     </div>
//                 </div>`;

//             let productsMain = '';
//             productsMain += productsTemplateStart;
//             productsMain += productsTemplateLabels;
//             productsMain += productTemplateImage;
//             productsMain += productTemplateBodyStart;
//             productsMain += productTemplateContent;
//             productsMain += productsTemplatePrices;
//             productsMain += productTemplateActions;
//             productsMain += productTemplateBodyEnd;
//             productsMain += productsTemplateEnd;

//             productPlace.insertAdjacentHTML('beforeend', productsMain);



//         let template = `<article data-pid="${productsId}" class="products__item item-product">
//         <div class="item-product__labels">
//             <div class="item-product__label item-product__label_sale">-30%</div>
//         </div>

//         <a class="item-product__image -ibg" href="">
//             <img src="assets/images/products/01.jpg" alt="">
//         </a>

//         <div class="item-product__body">
//             <div class="item-product__content">
//                 <h5 class="item-product__title">Syltherine</h5>
//                 <div class="item-product__text">Stylish cafe chair</div>
//             </div>

//             <div class="item-product__prices">
//                 <div class="item-product__price">Rp 2.500.000</div> 
//                 <div class="item-product__price item-product__price_old">Rp 3.500.000</div> 
//             </div>

//             <div class="item-product__actions actions-product">
//                 <div class="actions-product__body">
//                     <a class="actions-product__button _btn _white" href="">Add to cart</a>
//                     <a class="actions-product__link" href="">
//                         <img src="assets/images/iconsfont/share.svg" alt="">
//                         Share
//                     </a>
//                     <a class="actions-product__link" href="">
//                         <img src="assets/images/iconsfont/white.svg" alt="">
//                         Like
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </article>`

//     })
// }

function updateCard(productButton, productId, productAdd = true) {
    const cart = document.querySelector('.cart-header');
    const cartIcon = cart.querySelector('.cart-header__icon');
    const cartQuantity = cartIcon.querySelector('span');
    const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
    const cartList = document.querySelector('.cart-list');


    // Add
    if(productAdd) {
        if(cartQuantity) {
            cartQuantity.innerHTML = ++cartQuantity.innerHTML;
        } else {
            cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
        }
    } else {
        const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
        cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;

        if(!parseInt(cartProductQuantity.innerHTML)) {
            cartProduct.remove()
        }

        const cartQuantityValue = --cartQuantity.innerHTML;

        if(cartQuantityValue) {
            cartQuantity.innerHTML = cartQuantityValue;
        } else {
            cartQuantity.remove();
            document.querySelector('.cart-header__body').classList.remove('_active');
        }
    }

    if (!cartProduct) {
        const product = document.querySelector(`[data-pid="${productId}"]`);
        const cartProductImage = product.querySelector('.item-product__image').innerHTML;
        const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
        const cartProductContent = `
            <a href="#" class="cart-list__image -ibg">${cartProductImage}</a>
            <div class="cart-list__body">
                <a href="#" class="cart-list__title">${cartProductTitle}</a>
                <div class="cart-list__quantity">Quantity: <span>1</span></div>
                <a href="#" class="cart-list__delete">Delete</a>
            </div>
        `;
        cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`)
    } else {
        const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
        cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
    }

    productButton.classList.remove('_hold');
}

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

        // Products

        if (targetElement.classList.contains('products__more')) {
            getProducts(targetElement);
            e.preventDefault();
        }

        if (targetElement.classList.contains('actions-product__button')) {
            const productId = targetElement.closest('.item-product').dataset.pid
            addToCart(targetElement, productId);
            e.preventDefault();
        }

        if (targetElement.classList.contains('cart-image-img')) {
            if(document.querySelector('.cart-list').children.length > 0) {
                document.querySelector('.cart-header__body').classList.toggle('_active');   
            }
            e.preventDefault();
        }

        if (targetElement.classList.contains('cart-list__delete')) {
            const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
            updateCard(targetElement, productId, false);
            e.preventDefault();
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

    // AddToCart

    function addToCart(productButton, productId) {
        if(!productButton.classList.contains('_hold')) {
            productButton.classList.add('_hold');
            productButton.classList.add('_fly');

            const card = document.querySelector('.cart-header__icon');
            const product = document.querySelector(`[data-pid="${productId}"]`);
            const productImage = product.querySelector('.item-product__image');

            const productImageFly = productImage.cloneNode(true);

            const productImageFlyWidth = productImage.offsetWidth;
            const productImageFlyHeight = productImage.offsetHeight;
            const productImageFlyTop = productImage.getBoundingClientRect().top;
            const productImageFlyLeft = productImage.getBoundingClientRect().left;

            productImageFly.setAttribute('class', "_flyImage -ibg");

            productImageFly.style.cssText = `
            left: ${productImageFlyLeft}px;
            top: ${productImageFlyTop}px;
            height: ${productImageFlyHeight}px;
            width: ${productImageFlyWidth}px;`;

            document.body.append(productImageFly);

            const cartFlyLeft = card.getBoundingClientRect().left;
            const cartFlyTop = card.getBoundingClientRect().top;

            productImageFly.style.cssText = 
            `
                left: ${cartFlyLeft}px;
                top: ${cartFlyTop}px;
                width: 0;
                height: 0;
                opacity: 0;
            `;

            productImageFly.addEventListener('transitionend', function () {
                if(productButton.classList.contains('_fly')) {
                    productImageFly.remove();
                    updateCard(productButton, productId);
                    productButton.classList.remove('_fly');
                }
            });

            // function updateCard(productButton, productId, productAdd = true) {
            //     const cart = document.querySelector('.cart-header');
            //     const cartIcon = cart.querySelector('.cart-header__icon');
            //     const cartQuantity = cartIcon.querySelector('span');
            //     const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
            //     const cartList = document.querySelector('.cart-list');


            //     // Add
            //     if(productAdd) {
            //         if(cartQuantity) {
            //             cartQuantity.innerHTML = ++cartQuantity.innerHTML;
            //         } else {
            //             cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
            //         }
            //     } else {
            //         const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
            //         cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;

            //         if(!parseInt(cartProductQuantity.innerHTML)) {
            //             cartProduct.remove()
            //         }

            //         const cartQuantityValue = --cartQuantity.innerHTML;

            //         if(cartQuantityValue) {
            //             cartQuantity.innerHTML = cartQuantityValue;
            //         } else {
            //             cartQuantity.remove();
            //             cart.classList.remove('_active');
            //         }
            //     }

            //     if (!cartProduct) {
            //         const product = document.querySelector(`[data-pid="${productId}"]`);
            //         const cartProductImage = product.querySelector('.item-product__image').innerHTML;
            //         const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
            //         const cartProductContent = `
            //             <a href="#" class="cart-list__image -ibg">${cartProductImage}</a>
            //             <div class="cart-list__body">
            //                 <a href="#" class="cart-list__title">${cartProductTitle}</a>
            //                 <div class="cart-list__quantity">Quantity: <span>1</span></div>
            //                 <a href="#" class="cart-list__delete">Delete</a>
            //             </div>
            //         `;
            //         cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`)
            //     } else {
            //         const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
            //         cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
            //     }

            //     productButton.classList.remove('_hold');
            // }
        }
    }

    const furniture = document.querySelector('.furniture__body');

    if(furniture) {
        const furnitureItems = document.querySelector('.furniture__items');
        const furnitureColumns = document.querySelectorAll('.furniture__column');

        const speed = furniture.dataset.speed;

        let posX = 0;
        let coordXprocent = 0;

        function setMouseGalleryStyle () {
            let furnitureItemsWidth = 0;

            furnitureColumns.forEach(element => {
                furnitureItemsWidth += element.offsetWidth;
            });

            const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
            const distX = Math.floor(coordXprocent - posX);

            posX = posX + (distX * speed);
            let position = furnitureDifferent / 200 * posX;

            furnitureItems.style.cssText = `transform: translate3d(${-position}, 0, 0);`;

            if (Math.abs(distX) > 0) {
                requestAnimationFrame(setMouseGalleryStyle);
            } else {
                furniture.classList.remove('_init');
            }
        }

        furniture.addEventListener('mousemove', function(e) {
            const furnitureWidth = furniture.offsetWidth;

            const coordX = e.pageX - furnitureWidth/2;

            coordXprocent = coordX / furnitureWidth * 200;

            if(!furniture.classList.contains('_init')) {
                requestAnimationFrame(setMouseGalleryStyle);
                furniture.classList.add('_init'); 
            }
        })
    }
    
}




