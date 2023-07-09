$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:4000, // Set auto slide duration in milliseconds
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1100: {
            items: 6,
        },
        1400: {
            items: 6,
            // loop: false,
        }
    }

})


// go top 
const goTopButton = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > (window.innerHeight * 0.25)) {
    goTopButton.style.display = 'block';
  } else {
    goTopButton.style.display = 'none';
  }
});


