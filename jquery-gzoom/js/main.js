
$(function(){
    'use strict';
    
    $("#zoom01").gzoom({
        sW: 300,
        sH: 225,
        lW: 1400,
        lH: 1050,
        lighbox: true
    });
    
    $(".zoom_no_lbox").gzoom({
        sW: 300,
        sH: 225,
        lW: 1024,
        lH: 768,
        lightbox: true
    });
        
});

