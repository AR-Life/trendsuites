$(function () {
    $(".haber").bootstrapNews({
        newsPerPage: 1,
        autoplay: true,
        pauseOnHover: true,
        navigation: false,
        direction: 'down',
        newsTickerInterval: 4000,
        onToDo: function () {
            //console.log(this);
        }
    });



    $(".owl-carousel").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $(".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fas fa-chevron-right"></i>')
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    sliderUpdate();
});


var hash = document.location.hash;
var prefix = "tab_";
if (hash) {
    $('.nav-tabs a[href=' + hash.replace(prefix, "") + ']').tab('show');
}

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
});

$(window).load(function () {
    $('#room-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 180,
        itemMargin: 5,
        asNavFor: '#room-gallery'
    });
    $('#room-carousel3').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 180,
        itemMargin: 5,
        asNavFor: '#room-gallery'
    });
    $('#room-carousel4').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 180,
        itemMargin: 5,
        asNavFor: '#room-gallery'
    });
    $('#room-gallery').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#room-carousel"
    });
    $('#gallery-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 367,
        itemMargin: 0,
        asNavFor: '#foto-gallery'
    });

    $('#foto-gallery').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#gallery-carousel"
    });
});

$(document).ready(function () {
    $('#slides').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    $('#slides2').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    $('#slides3').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    $('#slides4').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
});




function sliderUpdate() {
    setTimeout(function () {
        $('#room-carousel3').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 180,
            itemMargin: 5,
            asNavFor: '#room-gallery3'
        });

        $('#room-gallery3').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#room-carousel3"
        });
    }, 200);
    setTimeout(function () {
        $('#room-carousel4').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 180,
            itemMargin: 5,
            asNavFor: '#room-gallery4'
        });

        $('#room-gallery4').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#room-carousel4"
        });
    }, 200);
    setTimeout(function () {
        $('#room-carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 180,
            itemMargin: 5,
            asNavFor: '#room-gallery'
        });

        $('#room-gallery').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#room-carousel"
        });
    }, 200);
}







$(".mapBtn").click(function (e) {
    e.preventDefault();
    $('.gmap-wrap').slideToggle(1000);
    $('.mapBtn').toggleClass('gmap-button-hover');
});


$(document).ready(function () {
    var map;
    var myCenter = new google.maps.LatLng(36.865325, 30.635438);
    var marker = new google.maps.Marker({
        position: myCenter,
        lat: 36.865325,
        lng: 30.635438,
        icon: "img/gmap-icon.png"
    });

    google.maps.event.addDomListener(window, 'load', initialize);

    google.maps.event.addDomListener(window, "resize", resizeMap());

    $(".mapBtn").click(function () {
        resizeMap();
    });
    var infowindow = new google.maps.InfoWindow({
        content: "<p class='mapText'><b>Trend Suites<\/b><br\/>Altınkum Mahallesi 416 Sokak No:15 Konyaaltı - Antalya<\/p> <img src='/assets/img/logo.png' width='100' class='mapImage'>",
        maxWidth: 500
    });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });


    function resizeMap() {
        if (typeof map == "undefined") return;
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    }
});

/*
$(document).ready(function() {
    $('#giris_tarihi').daterangepicker({ singleDatePicker: true }, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
});
$(document).ready(function() {
    $('#cikis_tarihi').daterangepicker({ singleDatePicker: true }, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
});*/

$(document).ready(function () {

    /*	$('#kons_icerik li').mouseover(function(){
            $('#kons_icerik li').removeClass('playing');
            $(this).addClass('playing');
                var i = '.playing i';
                $('.playing').transition({
                      perspective: '150px',
                      rotateY: '360deg',
                      duration:1000
                });
    
                $('.playing i').hide();
                $('.playing span').css('display','inline-block');
    
    
        });
    
    
    
        $('#kons_icerik li').mouseout(function(){
    
            $(this).css('transform','none');
            $('.playing span').hide();
            $('.playing i').show();
    
        });
    
        */

    $('#kons_icerik li').mouseover(function () {
        $('#kons_icerik li').removeClass('playing');
        $(this).addClass('playing');

    });
    $('#kons_icerik li').mouseout(function () {
        $('#kons_icerik li').removeClass('playing');

    });




});



$('.mapClose').click(function () {
    if ($(this).css("margin-right") == "0px") {
        $('#mapsearch').animate({
            "margin-right": '300px'
        });
        $('.mapClose').animate({
            "margin-right": '300px'
        });
    }
    else {
        $('#mapsearch').animate({
            "margin-right": '0px'
        });
        $('.mapClose').animate({
            "margin-right": '0px'
        });
    }
});
