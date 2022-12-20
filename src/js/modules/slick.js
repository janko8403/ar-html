export default function slick() {

    $('.slick-slider').slick({
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button"><img src="img/prev.png"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button"><img src="img/next.png"></button>',
        autoplay: false,
        // dots: true,
        // customPaging : function(slider, i) {
        //     return '<a href="#"><img src="slide-dot.png" /></a>';
        // }
    });
   
}