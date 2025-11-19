<?php
/**
 * ProMarkt7 Theme Functions
 */

// Theme Setup
function promarkt7_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // WooCommerce Support
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Ana Menü', 'promarkt7'),
        'footer' => __('Footer Menü', 'promarkt7'),
    ));
    
    // Image sizes
    add_image_size('product-thumb', 300, 300, true);
    add_image_size('product-large', 800, 800, true);
}
add_action('after_setup_theme', 'promarkt7_setup');

// Enqueue Styles and Scripts
function promarkt7_scripts() {
    // Main stylesheet
    wp_enqueue_style('promarkt7-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom CSS
    wp_enqueue_style('promarkt7-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');
    
    // Custom JS
    wp_enqueue_script('promarkt7-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Font Awesome (for icons)
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
}
add_action('wp_enqueue_scripts', 'promarkt7_scripts');

// Register Widget Areas
function promarkt7_widgets_init() {
    // Main Sidebar
    register_sidebar(array(
        'name'          => __('Ana Sidebar', 'promarkt7'),
        'id'            => 'sidebar-1',
        'description'   => __('Ana sidebar widget alanı', 'promarkt7'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    // Shop Sidebar
    register_sidebar(array(
        'name'          => __('Mağaza Sidebar', 'promarkt7'),
        'id'            => 'shop-sidebar',
        'description'   => __('Mağaza sayfası sidebar alanı', 'promarkt7'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    // Footer Widget Areas
    for ($i = 1; $i <= 4; $i++) {
        register_sidebar(array(
            'name'          => sprintf(__('Footer Widget %d', 'promarkt7'), $i),
            'id'            => 'footer-' . $i,
            'description'   => sprintf(__('Footer widget alanı %d', 'promarkt7'), $i),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h3 class="widget-title">',
            'after_title'   => '</h3>',
        ));
    }
}
add_action('widgets_init', 'promarkt7_widgets_init');

// Theme Customizer
function promarkt7_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('promarkt7_contact', array(
        'title'    => __('İletişim Bilgileri', 'promarkt7'),
        'priority' => 30,
    ));
    
    // Phone
    $wp_customize->add_setting('promarkt7_phone', array(
        'default'   => '+90 (538) 258 21 58',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('promarkt7_phone', array(
        'label'    => __('Telefon', 'promarkt7'),
        'section'  => 'promarkt7_contact',
        'type'     => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('promarkt7_email', array(
        'default'   => 'info@promarkt7.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('promarkt7_email', array(
        'label'    => __('E-posta', 'promarkt7'),
        'section'  => 'promarkt7_contact',
        'type'     => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('promarkt7_address', array(
        'default'   => 'Mahmutlar mahallesi Barbaros Caddesi No 31/B Alanya',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('promarkt7_address', array(
        'label'    => __('Adres', 'promarkt7'),
        'section'  => 'promarkt7_contact',
        'type'     => 'textarea',
    ));
    
    // WhatsApp
    $wp_customize->add_setting('promarkt7_whatsapp', array(
        'default'   => '+905382582158',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('promarkt7_whatsapp', array(
        'label'    => __('WhatsApp', 'promarkt7'),
        'section'  => 'promarkt7_contact',
        'type'     => 'text',
    ));
    
    // Instagram
    $wp_customize->add_setting('promarkt7_instagram', array(
        'default'   => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('promarkt7_instagram', array(
        'label'    => __('Instagram URL', 'promarkt7'),
        'section'  => 'promarkt7_contact',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'promarkt7_customize_register');

// WooCommerce - Product Columns
function promarkt7_loop_columns() {
    return 4;
}
add_filter('loop_shop_columns', 'promarkt7_loop_columns');

// WooCommerce - Products per page
function promarkt7_products_per_page() {
    return 12;
}
add_filter('loop_shop_per_page', 'promarkt7_products_per_page', 20);

// Remove WooCommerce default styles
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

// Custom breadcrumb delimiter
function promarkt7_breadcrumb_delimiter($defaults) {
    $defaults['delimiter'] = ' <i class="fas fa-chevron-right" style="font-size: 0.75rem; margin: 0 0.5rem;"></i> ';
    return $defaults;
}
add_filter('woocommerce_breadcrumb_defaults', 'promarkt7_breadcrumb_delimiter');

// SEO Meta Tags
function promarkt7_seo_meta_tags() {
    if (is_singular()) {
        $post_id = get_the_ID();
        $description = get_the_excerpt($post_id);
        $title = get_the_title($post_id);
        $image = get_the_post_thumbnail_url($post_id, 'full');
        
        if (empty($description)) {
            $description = wp_trim_words(get_the_content($post_id), 30);
        }
        
        echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
        echo '<meta property="og:title" content="' . esc_attr($title) . '">' . "\n";
        echo '<meta property="og:description" content="' . esc_attr($description) . '">' . "\n";
        
        if ($image) {
            echo '<meta property="og:image" content="' . esc_url($image) . '">' . "\n";
        }
    }
}
add_action('wp_head', 'promarkt7_seo_meta_tags');

// Add custom body classes
function promarkt7_body_classes($classes) {
    if (is_singular()) {
        $classes[] = 'single-' . get_post_type();
    }
    
    if (class_exists('WooCommerce')) {
        if (is_shop() || is_product_category() || is_product_tag()) {
            $classes[] = 'woocommerce-page';
        }
    }
    
    return $classes;
}
add_filter('body_class', 'promarkt7_body_classes');

// Custom Excerpt Length
function promarkt7_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'promarkt7_excerpt_length');

// Custom Excerpt More
function promarkt7_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'promarkt7_excerpt_more');

// WooCommerce Customization
if (class_exists('WooCommerce')) {
    // Remove default WooCommerce styles
    add_filter('woocommerce_enqueue_styles', '__return_false');
    
    // Change number of products per page
    function promarkt7_products_per_page() {
        return 12;
    }
    add_filter('loop_shop_per_page', 'promarkt7_products_per_page', 20);
    
    // Change number of related products
    function promarkt7_related_products_args($args) {
        $args['posts_per_page'] = 4;
        $args['columns'] = 4;
        return $args;
    }
    add_filter('woocommerce_output_related_products_args', 'promarkt7_related_products_args');
}

// Custom Post Types (if needed)
function promarkt7_custom_post_types() {
    // Blog Post Type (already built-in, but you can customize)
    
    // Testimonials Post Type (optional)
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'promarkt7'),
            'singular_name' => __('Testimonial', 'promarkt7'),
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-testimonial',
    ));
}
add_action('init', 'promarkt7_custom_post_types');

// Theme Options (can be expanded with ACF or similar)
function promarkt7_customize_register($wp_customize) {
    // Contact Info Section
    $wp_customize->add_section('promarkt7_contact', array(
        'title' => __('İletişim Bilgileri', 'promarkt7'),
        'priority' => 30,
    ));
    
    // Phone
    $wp_customize->add_setting('promarkt7_phone', array(
        'default' => '+90 (538) 258 21 58',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('promarkt7_phone', array(
        'label' => __('Telefon', 'promarkt7'),
        'section' => 'promarkt7_contact',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('promarkt7_email', array(
        'default' => 'info@promarkt7.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('promarkt7_email', array(
        'label' => __('E-posta', 'promarkt7'),
        'section' => 'promarkt7_contact',
        'type' => 'text',
    ));
    
    // Address
    $wp_customize->add_setting('promarkt7_address', array(
        'default' => 'Mahmutlar mahallesi Barbaros Caddesi No 31/B Alanya',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('promarkt7_address', array(
        'label' => __('Adres', 'promarkt7'),
        'section' => 'promarkt7_contact',
        'type' => 'textarea',
    ));
    
    // Instagram
    $wp_customize->add_setting('promarkt7_instagram', array(
        'default' => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('promarkt7_instagram', array(
        'label' => __('Instagram URL', 'promarkt7'),
        'section' => 'promarkt7_contact',
        'type' => 'url',
    ));
    
    // WhatsApp
    $wp_customize->add_setting('promarkt7_whatsapp', array(
        'default' => '+905382582158',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('promarkt7_whatsapp', array(
        'label' => __('WhatsApp Numarası', 'promarkt7'),
        'section' => 'promarkt7_contact',
        'type' => 'text',
    ));
}
add_action('customize_register', 'promarkt7_customize_register');

// Security: Remove WordPress Version
function promarkt7_remove_version() {
    return '';
}
add_filter('the_generator', 'promarkt7_remove_version');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Add async/defer to scripts
function promarkt7_add_async_defer($tag, $handle) {
    if ('promarkt7-main' === $handle) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'promarkt7_add_async_defer', 10, 2);
?>