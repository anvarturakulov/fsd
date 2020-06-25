
$(function(){
    // $('.btn').on('click',function(){
    //     document.getElementById('input_login').value = "";
    // });
    
    // $('.menu__btn').on('click',function(){
    //   $('.header__menu').slideToggle();
    // });

    $(".room__rating-stars").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,
        ratedFill: "#BC9CFF",
        starWidth: '24px',
        //starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm0-2h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z"/></svg>'
        //starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>'
          //starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
        // "starSvg": "<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">"+
        //          "<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
        //                    " 4.246-3.611-2.625-3.612 2.625"+
        //                    " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
        //                    " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
        //                    " 7.416 5.388-2.833-8.718"+
        //                    " 7.417-5.389h-9.167l-2.833-8.718z"></path>"+
        //         "</svg>"
      });
    
    $(".room__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows:false,
    });


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

});