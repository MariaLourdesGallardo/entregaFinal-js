let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   let swiper = new Swiper('.mySwiper', {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

//   let appendNumber = 4;
//   let prependNumber = 1;
//   document
//     .querySelector('.prepend-2-slides')
//     .addEventListener('click', function (e) {
//       e.preventDefault();
//       swiper.prependSlide([
//         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//       ]);
//     });
//   document
//     .querySelector('.prepend-slide')
//     .addEventListener('click', function (e) {
//       e.preventDefault();
//       swiper.prependSlide(
//         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
//       );
//     });
//   document
//     .querySelector('.append-slide')
//     .addEventListener('click', function (e) {
//       e.preventDefault();
//       swiper.appendSlide(
//         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
//       );
//     });
//   document
//     .querySelector('.append-2-slides')
//     .addEventListener('click', function (e) {
//       e.preventDefault();
//       swiper.appendSlide([
//         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//       ]);
//     });