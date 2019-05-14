var owlsug = $('#owl-sug');
owlsug.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owlsug.trigger('play.owlsug.autoplay',[5000])
})
$('.stop').on('click',function(){
    owlsug.trigger('stop.owlsug.autoplay')
})

var owlwriter = $('#owl-writers');
owlwriter.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplayHoverPause:true
});

