<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="author" content="ProMarkt7">
    <meta name="keywords" content="protein tozu, spor gıdası, fitness ürünleri, takviye, whey protein, BCAA, kreatin, amino asit, spor ekipmanları">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php wp_title(); ?> - <?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/og-image.jpg">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title(); ?> - <?php bloginfo('name'); ?>">
    <meta name="twitter:description" content="<?php bloginfo('description'); ?>">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/og-image.jpg">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header sticky-header">
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="contact-info">
                    <i class="fas fa-phone"></i>
                    <span><?php echo get_theme_mod('promarkt7_phone', '+90 (538) 258 21 58'); ?></span>
                </div>
                <span class="free-shipping-text">500₺ Üzeri Siparişlerde - Ücretsiz Kargo</span>
            </div>
        </div>
    </div>
    
    <!-- Main Header -->
    <div class="main-header">
        <div class="container">
            <div class="header-content">
                <!-- Logo -->
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                            <span class="logo-text">ProMarkt</span><span class="logo-number">7</span>
                        </a>
                    <?php endif; ?>
                </div>
                
                <!-- Search Bar - Desktop -->
                <div class="header-search desktop-only">
                    <?php if (class_exists('WooCommerce')) : ?>
                        <form role="search" method="get" class="woocommerce-product-search" action="<?php echo esc_url(home_url('/')); ?>">
                            <input type="search" class="search-field" placeholder="Ürün ara..." value="<?php echo get_search_query(); ?>" name="s" />
                            <input type="hidden" name="post_type" value="product" />
                            <button type="submit" class="search-submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    <?php else : ?>
                        <?php get_search_form(); ?>
                    <?php endif; ?>
                </div>
                
                <!-- Header Actions -->
                <div class="header-actions">
                    <!-- User Account -->
                    <?php if (is_user_logged_in()) : ?>
                        <a href="<?php echo esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))); ?>" class="header-icon">
                            <i class="fas fa-user"></i>
                        </a>
                    <?php else : ?>
                        <a href="<?php echo esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))); ?>" class="header-icon">
                            <i class="fas fa-user"></i>
                        </a>
                    <?php endif; ?>
                    
                    <!-- Shopping Cart -->
                    <?php if (class_exists('WooCommerce')) : ?>
                        <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class="header-icon cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                            <?php 
                            $cart_count = WC()->cart->get_cart_contents_count();
                            if ($cart_count > 0) : ?>
                                <span class="cart-count"><?php echo $cart_count; ?></span>
                            <?php endif; ?>
                        </a>
                    <?php endif; ?>
                    
                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle mobile-menu" aria-label="Menü">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Navigation -->
    <nav class="main-navigation">
        <div class="container">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class'     => 'nav-menu',
                'container'      => false,
                'fallback_cb'    => false,
            ));
            ?>
        </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-content">
            <button class="mobile-menu-close">
                <i class="fas fa-times"></i>
            </button>
            
            <!-- Mobile Search -->
            <div class="mobile-search">
                <?php if (class_exists('WooCommerce')) : ?>
                    <form role="search" method="get" class="woocommerce-product-search" action="<?php echo esc_url(home_url('/')); ?>">
                        <input type="search" class="search-field" placeholder="Ürün ara..." value="<?php echo get_search_query(); ?>" name="s" />
                        <input type="hidden" name="post_type" value="product" />
                        <button type="submit" class="search-submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                <?php endif; ?>
            </div>
            
            <!-- Mobile Navigation -->
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class'     => 'mobile-nav-menu',
                'container'      => false,
                'fallback_cb'    => false,
            ));
            ?>
        </div>
    </div>
</header>

<main id="main-content" class="site-main">