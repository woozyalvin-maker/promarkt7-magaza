/**
 * ProMarkt7 Theme JavaScript
 */

(function($) {
    'use strict';
    
    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function() {
        $('.mobile-menu-overlay').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    
    $('.mobile-menu-close, .mobile-menu-overlay').on('click', function(e) {
        if (e.target === this) {
            $('.mobile-menu-overlay').removeClass('active');
            $('body').css('overflow', '');
        }
    });
    
    // Sticky Header
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });
    
    // Add to Cart AJAX (for custom buttons)
    $('.add-to-cart-btn').on('click', function(e) {
        e.preventDefault();
        
        var $button = $(this);
        var productId = $button.data('product-id');
        
        if (!productId) return;
        
        $button.prop('disabled', true).text('Ekleniyor...');
        
        $.ajax({
            type: 'POST',
            url: wc_add_to_cart_params.ajax_url,
            data: {
                action: 'woocommerce_ajax_add_to_cart',
                product_id: productId,
                quantity: 1
            },
            success: function(response) {
                if (response.error) {
                    alert(response.error);
                } else {
                    // Update cart count
                    var cartCount = $('.cart-count');
                    if (cartCount.length) {
                        var count = parseInt(cartCount.text()) + 1;
                        cartCount.text(count);
                    } else {
                        $('.cart-icon').append('<span class="cart-count">1</span>');
                    }
                    
                    // Update button
                    $button.text('Sepete Eklendi!').addClass('added');
                    
                    // Reset button after 2 seconds
                    setTimeout(function() {
                        $button.prop('disabled', false)
                               .text('Sepete Ekle')
                               .removeClass('added');
                    }, 2000);
                }
            },
            error: function() {
                alert('Bir hata oluştu. Lütfen tekrar deneyin.');
                $button.prop('disabled', false).text('Sepete Ekle');
            }
        });
    });
    
    // Smooth Scroll for Anchor Links
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });
    
    // Product Image Gallery
    $('.product-images .thumbnail').on('click', function() {
        var newSrc = $(this).data('full-image');
        $('.product-images .main-image img').attr('src', newSrc);
        $('.product-images .thumbnail').removeClass('active');
        $(this).addClass('active');
    });
    
    // Quantity Buttons
    $('.quantity-btn-minus').on('click', function() {
        var $input = $(this).siblings('input[type="number"]');
        var value = parseInt($input.val());
        if (value > 1) {
            $input.val(value - 1).trigger('change');
        }
    });
    
    $('.quantity-btn-plus').on('click', function() {
        var $input = $(this).siblings('input[type="number"]');
        var value = parseInt($input.val());
        var max = $input.attr('max');
        if (!max || value < parseInt(max)) {
            $input.val(value + 1).trigger('change');
        }
    });
    
    // Search Bar Focus
    $('.search-field').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        $(this).parent().removeClass('focused');
    });
    
    // Back to Top Button (optional enhancement)
    var $backToTop = $('<button class="back-to-top" aria-label="Yukarı çık"><i class="fas fa-arrow-up"></i></button>');
    $('body').append($backToTop);
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $backToTop.addClass('visible');
        } else {
            $backToTop.removeClass('visible');
        }
    });
    
    $backToTop.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });
    
})(jQuery);

// Add custom styles for back to top button
var style = document.createElement('style');
style.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }
`;
document.head.appendChild(style);