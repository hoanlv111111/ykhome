/* Validation form */
ValidationFormSelf("validation-newsletter");
ValidationFormSelf("validation-cart");
ValidationFormSelf("validation-user");
ValidationFormSelf("validation-contact");

/* Exists */
$.fn.exists = function () {
    return this.length;
};

/* Paging ajax */
if ($(".paging-product").exists()) {
    loadPagingAjax("ajax/ajax_news.php?perpage=6", '.paging-product');
}

$(".paging-product-index").each(function () {
    let idl = $(this).attr('data-id');
    loadPagingAjax("ajax/ajax_product_paging.php?perpage=12", '.paging-product-index', '#load_pro_', idl);
});
/* Paging category ajax 
    if($(".paging-product-category").exists()){
        $(".paging-product-category").each(function(){
            var list = $(this).data("list");
            var cat = $(this).data("cat");
            var item = $(this).data("item");
            var namelist = $(this).data("namelist");
            loadPagingAjax("ajax/ajax_product.php?perpage=8&idList="+list+"&idCat="+cat+"&idItem="+item+"&namelist="+namelist,'.paging-product-category-'+cat);
        });

        $('.boxproitem_item').click(function(){
            var list = $(this).data("list");
            var cat = $(this).data("cat");
            var item = $(this).data("item");
            var namelist = $(this).data("namelist");
            loadPagingAjax("ajax/ajax_product.php?perpage=8&idList="+list+"&idCat="+cat+"&idItem="+item+"&namelist="+namelist,'.paging-product-category-'+cat);
        });
    }
*/

/* Back to top */
NN_FRAMEWORK.BackToTop = function () {
    $(window).scroll(function () {
        if (!$('.scrollToTop').length) $("body").append('<div class="scrollToTop"><img src="' + GOTOP + '" alt="Go Top"/></div>');
        if ($(this).scrollTop() > 100) $('.scrollToTop').fadeIn();
        else $('.scrollToTop').fadeOut();
    });

    $('body').on("click", ".scrollToTop", function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
};

/* Alt images */
NN_FRAMEWORK.AltImages = function () {
    $('img').each(function (index, element) {
        if (!$(this).attr('alt') || $(this).attr('alt') == '') {
            $(this).attr('alt', WEBSITE_NAME);
        }
    });
};

/* Fix menu */
NN_FRAMEWORK.FixMenu = function () {
    $(window).scroll(function () {
        let hei = $('#menu_top').height();
        if ($(window).scrollTop() >= hei) {
            $("#menu_top").addClass('fixed');
            $(".logofix img").css({maxHeight: '46px'});
            $(".header_name_des").css({display: 'none'});
            $(".all_totle").css({display: 'none'});
        }
        else {         
            $("#menu_top").removeClass('fixed');
            $(".logofix img").css({maxHeight: 'unset'});
            $(".header_name_des").css({display: 'block'});
            $(".all_totle").css({display: 'block'});
        }
    });
};

/* Tools */
NN_FRAMEWORK.Tools = function () {
    if ($(".toolbar").exists()) {
        $(".footer").css({ marginBottom: $(".toolbar").innerHeight() });
    }
};

/* Popup */
NN_FRAMEWORK.Popup = function () {
    if ($("#popup").exists()) {
        $('#popup').modal('show');
    }
};

/* Wow */
NN_FRAMEWORK.WowAnimation = function () {

    new WOW().init();
};

/* Toc */
NN_FRAMEWORK.Toc = function () {
    if ($(".toc-list").exists()) {
        $(".toc-list").toc({
            content: "div#toc-content",
            headings: "h2,h3,h4"
        });

        if (!$(".toc-list li").length) $(".meta-toc").hide();

        $('.toc-list').find('a').click(function () {
            var x = $(this).attr('data-rel');
            goToByScroll(x);
        });
    }
};

/* Simply scroll */
NN_FRAMEWORK.SimplyScroll = function () {
    if ($(".roll_news ul").exists()) {
        $(".roll_news ul").simplyScroll({
            customClass: 'vert',
            orientation: 'vertical',
            // orientation: 'horizontal',
            auto: true,
            manualMode: 'auto',
            pauseOnHover: 1,
            speed: 1,
            loop: 1
        });
    }
    if ($(".roll_news1 ul").exists()) {
        $(".roll_news1 ul").simplyScroll({
            customClass: 'vert',
            orientation: 'vertical',
            //orientation: 'horizontal',
            auto: true,
            manualMode: 'auto',
            pauseOnHover: 1,
            speed: 1,
            loop: 1
        });
    }
};

/* Tabs */
NN_FRAMEWORK.Tabs = function () {
    if ($(".ul-tabs-pro-detail").exists()) {
        $(".ul-tabs-pro-detail li").click(function () {
            var tabs = $(this).data("tabs");
            $(".content-tabs-pro-detail, .ul-tabs-pro-detail li").removeClass("active");
            $(this).addClass("active");
            $("." + tabs).addClass("active");
        });
    }
};

/* Search */
NN_FRAMEWORK.Search = function () {
    if ($(".icon-search").exists()) {
        $(".icon-search").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(".search-grid").stop(true, true).animate({ opacity: "0", width: "0px" }, 200);
            } else {
                $(this).addClass('active');
                $(".search-grid").stop(true, true).animate({ opacity: "1", width: "230px" }, 200);
            }
            document.getElementById($(this).next().find("input").attr('id')).focus();
            $('.icon-search i').toggleClass('fa fa-search fa fa-times');
        });
    }
};

/* Videos */
NN_FRAMEWORK.Videos = function () {

    if ($(".video").exists()) {
        $('[data-fancybox="video"]').fancybox({
            // transitionEffect: "fade",
            // transitionDuration: 800,
            // animationEffect: "fade",
            // animationDuration: 800,
            // arrows: false,
            // infobar: false,
            // toolbar: false,
            // hash: false
        });
    }
};

/* Owl */
NN_FRAMEWORK.OwlPage = function () {
    if ($(".owl-slideshow").exists()) {
        $('.owl-slideshow').owlCarousel({
            items: 1,
            rewind: true,
            autoplay: false,
            loop: false,
            lazyLoad: false,
            mouseDrag: false,
            touchDrag: false,
            animateIn: 'animate__animated animate__fadeInLeft',
            animateOut: 'animate__animated animate__fadeOutRight',
            margin: 0,
            smartSpeed: 500,
            autoplaySpeed: 3500,
            nav: false,
            dots: false
        });
        $('.prev-slideshow').click(function () {
            $('.owl-slideshow').trigger('prev.owl.carousel');
        });
        $('.next-slideshow').click(function () {
            $('.owl-slideshow').trigger('next.owl.carousel');
        });
    }
    if ($(".owl-video").exists()) {
        $('.owl-video').owlCarousel({
            items: 1,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            // animateIn: 'animate__animated animate__fadeInLeft',
            // animateOut: 'animate__animated animate__fadeOutRight',
            margin: 0,
            smartSpeed: 500,
            autoplaySpeed: 3500,
            nav: false,
            dots: false
        });
        $('.prev-slideshow').click(function () {
            $('.owl-slideshow').trigger('prev.owl.carousel');
        });
        $('.next-slideshow').click(function () {
            $('.owl-slideshow').trigger('next.owl.carousel');
        });
    }

    if ($(".owl-dv").exists()) {
        $('.owl-dv').owlCarousel({
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                300: {
                    items: 2,
                    margin: 10,
                },
                600: {
                    items: 3,
                    margin: 10,
                },
                900: {
                    items: 4,
                    margin: 10,
                }
            }
        });
        /*$('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });*/
    }
    if ($(".owl-congtrinh").exists()) {
        $('.owl-congtrinh').owlCarousel({
            rewind: true,
            autoplay: false,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                300: {
                    items: 2,
                    margin: 10,
                },
                600: {
                    items: 3,
                    margin: 10,
                },
                900: {
                    items: 4,
                    margin: 10,
                }
            }
        });
        /*$('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });*/
    }
    if ($(".owl-baogia").exists()) {
        $('.owl-baogia').owlCarousel({
            rewind: true,
            autoplay: false,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                400: {
                    items: 2,
                    margin: 10,
                },
                800: {
                    items: 3,
                    margin: 10,
                }
            }
        });
        /*$('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });*/
    }
    if ($(".auto_video").exists()) {
        $('.auto_video').owlCarousel({
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                450: {
                    items: 1,
                    margin: 10,
                },
                800: {
                    items: 1,
                    margin: 10,
                },
                1000: {
                    items: 1,
                    margin: 20,
                },
                1030: {
                    items: 1,
                    margin: 30,
                }
            }
        });
        /*$('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });*/
    }
    if ($(".auto_dcategory").exists()) {
        $('.auto_dcategory').owlCarousel({
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                450: {
                    items: 2,
                    margin: 10,
                },
                800: {
                    items: 3,
                    margin: 10,
                },
                1000: {
                    items: 4,
                    margin: 20,
                },
                1030: {
                    items: 4,
                    margin: 30,
                }
            }
        });
        /*$('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });*/
    }
    if ($(".auto_social").exists()) {
        $('.auto_social').owlCarousel({
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                450: {
                    items: 2,
                    margin: 10,
                },
                800: {
                    items: 3,
                    margin: 10,
                },
                1000: {
                    items: 3,
                    margin: 20,
                },
                1030: {
                    items: 3,
                    margin: 30,
                }
            }
        });
        /*$('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });*/
    }




};

/* Owl pro detail */
NN_FRAMEWORK.OwlProDetail = function () {
    if ($(".owl-thumb-pro").exists()) {
        $('.owl-thumb-pro').owlCarousel({
            items: 4,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 3,
                    margin: 10
                },
                500: {
                    items: 4,
                    margin: 10
                }
            }
        });
        $('.prev-thumb-pro').click(function () {
            $('.owl-thumb-pro').trigger('prev.owl.carousel');
        });
        $('.next-thumb-pro').click(function () {
            $('.owl-thumb-pro').trigger('next.owl.carousel');
        });
    }
};

/* Cart */
NN_FRAMEWORK.loadmap = function () {
    $("body").on("click", ".loadmap", function () {
        $('.loadmap').removeClass('active');
        $(this).addClass('active');
        let id = $(this).attr('data-id');
        $.ajax({
            url: 'ajax/ajax_bando.php',
            type: "POST",
            async: false,
            data: { id: id },
            success: function (result) {
                $('.form-contact').html(result);
            }
        });
    });
}
NN_FRAMEWORK.Cart = function () {
    $("body").on("click", ".addcart", function () {
        var mau = ($(".color-pro-detail input:checked").val()) ? $(".color-pro-detail input:checked").val() : 0;
        var size = ($(".size-pro-detail input:checked").val()) ? $(".size-pro-detail input:checked").val() : 0;
        var id = $(this).data("id");
        var action = $(this).data("action");
        var quantity = ($("#quantity").val()) ? $("#quantity").val() : 1;

        if (id) {
            $.ajax({
                url: 'ajax/ajax_cart.php',
                type: "POST",
                dataType: 'json',
                async: false,
                data: { cmd: 'add-cart', id: id, mau: mau, size: size, quantity: quantity },
                success: function (result) {
                    if (action == 'addnow') {
                        $('.count-cart').html(result.max);
                        $.ajax({
                            url: 'ajax/ajax_cart.php',
                            type: "POST",
                            dataType: 'html',
                            async: false,
                            data: { cmd: 'popup-cart' },
                            success: function (result) {
                                $("#popup-cart .modal-body").html(result);
                                $('#popup-cart').modal('show');
                            }
                        });
                    } else if (action == 'buynow') {
                        window.location = CONFIG_BASE + "gio-hang";
                    }
                }
            });
        }
    });

    $("body").on("click", ".del-procart", function () {
        if (confirm(LANG['delete_product_from_cart'])) {
            var code = $(this).data("code");
            var ship = $(".price-ship").val();

            $.ajax({
                type: "POST",
                url: 'ajax/ajax_cart.php',
                dataType: 'json',
                data: { cmd: 'delete-cart', code: code, ship: ship },
                success: function (result) {
                    $('.count-cart').html(result.max);
                    if (result.max) {
                        $('.price-temp').val(result.temp);
                        $('.load-price-temp').html(result.tempText);
                        $('.price-total').val(result.total);
                        $('.load-price-total').html(result.totalText);
                        $(".procart-" + code).remove();
                    } else {
                        $(".wrap-cart").html('<a href="" class="empty-cart text-decoration-none"><i class="fa fa-cart-arrow-down"></i><p>' + LANG['no_products_in_cart'] + '</p><span>' + LANG['back_to_home'] + '</span></a>');
                    }
                }
            });
        }
    });

    $("body").on("click", ".counter-procart", function () {
        var $button = $(this);
        var input = $button.parent().find("input");
        var id = input.data('pid');
        var code = input.data('code');
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") quantity = parseFloat(oldValue) + 1;
        else if (oldValue > 1) quantity = parseFloat(oldValue) - 1;
        $button.parent().find("input").val(quantity);
        update_cart(id, code, quantity);
    });

    $("body").on("change", "input.quantity-procat", function () {
        var quantity = $(this).val();
        var id = $(this).data("pid");
        var code = $(this).data("code");
        update_cart(id, code, quantity);
    });

    if ($(".select-city-cart").exists()) {
        $(".select-city-cart").change(function () {
            var id = $(this).val();
            load_district(id);
            load_ship();
        });
    }

    if ($(".select-district-cart").exists()) {
        $(".select-district-cart").change(function () {
            var id = $(this).val();
            load_wards(id);
            load_ship();
        });
    }

    if ($(".select-wards-cart").exists()) {
        $(".select-wards-cart").change(function () {
            var id = $(this).val();
            load_ship(id);
        });
    }

    if ($(".payments-label").exists()) {
        $(".payments-label").click(function () {
            var payments = $(this).data("payments");
            $(".payments-cart .payments-label, .payments-info").removeClass("active");
            $(this).addClass("active");
            $(".payments-info-" + payments).addClass("active");
        });
    }

    if ($(".color-pro-detail").exists()) {
        $(".color-pro-detail").click(function () {
            $(".color-pro-detail").removeClass("active");
            $(this).addClass("active");

            var id_mau = $("input[name=color-pro-detail]:checked").val();
            var idpro = $(this).data('idpro');

            $.ajax({
                url: 'ajax/ajax_color.php',
                type: "POST",
                dataType: 'html',
                data: { id_mau: id_mau, idpro: idpro },
                success: function (result) {
                    if (result != '') {
                        $('.left-pro-detail').html(result);
                        MagicZoom.refresh("Zoom-1");
                        NN_FRAMEWORK.OwlProDetail();
                    }
                }
            });
        });
    }

    if ($(".size-pro-detail").exists()) {
        $(".size-pro-detail").click(function () {
            $(".size-pro-detail").removeClass("active");
            $(this).addClass("active");
        });
    }

    if ($(".quantity-pro-detail button").exists()) {
        $(".quantity-pro-detail button").click(function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 1) var newVal = parseFloat(oldValue) - 1;
                else var newVal = 1;
            }
            $button.parent().find("input").val(newVal);
        });
    }
};

/* Ready */
$(document).ready(function () {
    NN_FRAMEWORK.loadmap();
    NN_FRAMEWORK.Tools();
    NN_FRAMEWORK.Popup();
    NN_FRAMEWORK.WowAnimation();
    NN_FRAMEWORK.AltImages();
    NN_FRAMEWORK.BackToTop();
    NN_FRAMEWORK.FixMenu();
    NN_FRAMEWORK.OwlPage();
    NN_FRAMEWORK.OwlProDetail();
    NN_FRAMEWORK.Toc();
    NN_FRAMEWORK.Cart();
    NN_FRAMEWORK.SimplyScroll();
    NN_FRAMEWORK.Tabs();
    NN_FRAMEWORK.Videos();
    NN_FRAMEWORK.Search();

});