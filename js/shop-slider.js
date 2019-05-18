$(document).ready(function(){

    var shopSlider = $("#shopSlider");
    shopSlider.owlCarousel({
        items: 3,
        // loop: true,
        dots: false,
        margin: 2,
        smartSpeed: 500,
    });


    $('#shopSiderLeft').click(function() {
        console.log('Left');
        shopSlider.trigger('prev.owl.carousel');
    })

    $('#shopSiderRight').click(function() {
        console.log('Right');
        shopSlider.trigger('next.owl.carousel');
    });

});


    // headerSlider.on('changed.owl.carousel', function(event){
    //     $('.slide-controls-number__active').text(event.item.index +1);
    //     $('.slide-controls-number__total').text(event.item.count)
    // });
