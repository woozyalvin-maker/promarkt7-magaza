<?php
/**
 * Main Index Template
 */
get_header();
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <h1>Spor Gıdası ve Fitness Ürünleri</h1>
            <p class="hero-subtitle">En kaliteli protein tozları, amino asitler ve spor ekipmanları</p>
            <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="btn btn-primary btn-lg">
                Ürünleri İncele
            </a>
        </div>
    </div>
</section>

<!-- Featured Categories -->
<?php if (class_exists('WooCommerce')) : 
    $featured_categories = get_terms(array(
        'taxonomy' => 'product_cat',
        'hide_empty' => true,
        'number' => 4,
    ));
    
    if (!empty($featured_categories)) : ?>
        <section class="categories-section py-16">
            <div class="container">
                <h2 class="section-title text-center mb-4">Popüler Kategoriler</h2>
                <div class="grid grid-cols-4">
                    <?php foreach ($featured_categories as $category) : 
                        $thumbnail_id = get_term_meta($category->term_id, 'thumbnail_id', true);
                        $image = wp_get_attachment_url($thumbnail_id);
                        ?>
                        <a href="<?php echo esc_url(get_term_link($category)); ?>" class="category-card card">
                            <?php if ($image) : ?>
                                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($category->name); ?>">
                            <?php endif; ?>
                            <h3><?php echo esc_html($category->name); ?></h3>
                            <p class="text-muted"><?php echo $category->count; ?> Ürün</p>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    <?php endif;
endif; ?>

<!-- Featured Products -->
<?php if (class_exists('WooCommerce')) : ?>
    <section class="featured-products-section py-16">
        <div class="container">
            <h2 class="section-title text-center mb-4">Öne Çıkan Ürünler</h2>
            <div class="grid grid-cols-4">
                <?php
                $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => 8,
                    'meta_query' => array(
                        array(
                            'key' => '_featured',
                            'value' => 'yes'
                        )
                    )
                );
                $featured_products = new WP_Query($args);
                
                if ($featured_products->have_posts()) :
                    while ($featured_products->have_posts()) : $featured_products->the_post();
                        global $product;
                        ?>
                        <div class="product-card card">
                            <a href="<?php the_permalink(); ?>">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('product-thumb'); ?>
                                <?php endif; ?>
                                
                                <div class="product-info">
                                    <span class="product-brand text-muted"><?php echo esc_html(get_post_meta(get_the_ID(), '_product_brand', true)); ?></span>
                                    <h3 class="product-title"><?php the_title(); ?></h3>
                                    
                                    <?php if ($product->is_on_sale()) : ?>
                                        <div class="product-price">
                                            <span class="price-old"><?php echo wc_price($product->get_regular_price()); ?></span>
                                            <span class="price-display"><?php echo $product->get_price_html(); ?></span>
                                        </div>
                                    <?php else : ?>
                                        <div class="product-price">
                                            <span class="price-display"><?php echo $product->get_price_html(); ?></span>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </a>
                            <button class="btn btn-primary add-to-cart-btn" data-product-id="<?php echo get_the_ID(); ?>">
                                Sepete Ekle
                            </button>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>
<?php endif; ?>

<!-- Features Section -->
<section class="features-section py-16">
    <div class="container">
        <div class="grid grid-cols-4">
            <div class="feature-card card text-center">
                <i class="fas fa-shipping-fast feature-icon"></i>
                <h3>Hızlı Kargo</h3>
                <p class="text-muted">500₺ üzeri ücretsiz kargo</p>
            </div>
            <div class="feature-card card text-center">
                <i class="fas fa-shield-alt feature-icon"></i>
                <h3>Güvenli Ödeme</h3>
                <p class="text-muted">SSL sertifikalı güvenli alışveriş</p>
            </div>
            <div class="feature-card card text-center">
                <i class="fas fa-undo feature-icon"></i>
                <h3>Kolay İade</h3>
                <p class="text-muted">14 gün içinde ücretsiz iade</p>
            </div>
            <div class="feature-card card text-center">
                <i class="fas fa-headset feature-icon"></i>
                <h3>7/24 Destek</h3>
                <p class="text-muted">Müşteri hizmetleri her zaman yanınızda</p>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>