<?php
/**
 * Product Archive Template
 */
get_header();
?>

<!-- Shop Header -->
<section class="shop-header py-16" style="background-color: var(--muted);">
    <div class="container">
        <div class="shop-title-content text-center">
            <h1>
                <?php
                if (is_shop()) {
                    echo 'Tüm Ürünler';
                } elseif (is_product_category()) {
                    single_term_title();
                } elseif (is_product_tag()) {
                    single_term_title('Etiket: ');
                } else {
                    echo 'Ürünler';
                }
                ?>
            </h1>
            <?php
            if (is_product_category() && term_description()) {
                echo '<div class="category-description text-muted" style="max-width: 600px; margin: 1rem auto 0;">' . term_description() . '</div>';
            }
            ?>
        </div>
    </div>
</section>

<section class="shop-content py-16">
    <div class="container">
        <div style="display: grid; grid-template-columns: 250px 1fr; gap: 2rem;">
            <!-- Sidebar Filters -->
            <aside class="shop-sidebar">
                <!-- Categories -->
                <div class="widget" style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Kategoriler</h3>
                    <?php
                    $categories = get_terms(array(
                        'taxonomy' => 'product_cat',
                        'hide_empty' => true,
                    ));
                    if (!empty($categories)) : ?>
                        <ul style="list-style: none; padding: 0;">
                            <?php foreach ($categories as $category) : ?>
                                <li style="margin-bottom: 0.5rem;">
                                    <a href="<?php echo esc_url(get_term_link($category)); ?>">
                                        <?php echo esc_html($category->name); ?> (<?php echo $category->count; ?>)
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>
                
                <!-- Price Filter -->
                <?php if (is_active_sidebar('shop-sidebar')) : ?>
                    <?php dynamic_sidebar('shop-sidebar'); ?>
                <?php endif; ?>
            </aside>
            
            <!-- Products Grid -->
            <div class="shop-products">
                <!-- Toolbar -->
                <div class="shop-toolbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">
                    <div class="products-count text-muted">
                        <?php
                        $total = $wp_query->found_posts;
                        echo sprintf('%d ürün gösteriliyor', $total);
                        ?>
                    </div>
                    <?php woocommerce_catalog_ordering(); ?>
                </div>
                
                <?php if (have_posts()) : ?>
                    <div class="grid grid-cols-3">
                        <?php while (have_posts()) : the_post();
                            global $product;
                            ?>
                            <div class="product-card card">
                                <a href="<?php the_permalink(); ?>">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 250px; object-fit: cover; border-radius: var(--radius); margin-bottom: 1rem;')); ?>
                                    <?php endif; ?>
                                    
                                    <!-- Badges -->
                                    <div style="position: absolute; top: 1rem; left: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                        <?php if ($product->is_on_sale()) : ?>
                                            <span class="discount-badge">İNDİRİM</span>
                                        <?php endif; ?>
                                        <?php if ($product->is_featured()) : ?>
                                            <span class="new-badge">ÖNE ÇIKAN</span>
                                        <?php endif; ?>
                                    </div>
                                    
                                    <div class="product-info">
                                        <h3 class="product-title"><?php the_title(); ?></h3>
                                        
                                        <?php if ($product->is_on_sale()) : ?>
                                            <div class="product-price">
                                                <span class="price-old"><?php echo wc_price($product->get_regular_price()); ?></span>
                                                <span class="price-display"><?php echo wc_price($product->get_sale_price()); ?></span>
                                            </div>
                                        <?php else : ?>
                                            <div class="product-price">
                                                <span class="price-display"><?php echo $product->get_price_html(); ?></span>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </a>
                                
                                <button class="btn btn-primary add-to-cart-btn" 
                                        data-product-id="<?php echo get_the_ID(); ?>"
                                        style="width: 100%; margin-top: 1rem;">
                                    Sepete Ekle
                                </button>
                            </div>
                        <?php endwhile; ?>
                    </div>
                    
                    <!-- Pagination -->
                    <div class="pagination" style="margin-top: 3rem; text-align: center;">
                        <?php
                        the_posts_pagination(array(
                            'mid_size' => 2,
                            'prev_text' => '<i class="fas fa-arrow-left"></i> Önceki',
                            'next_text' => 'Sonraki <i class="fas fa-arrow-right"></i>',
                        ));
                        ?>
                    </div>
                    
                <?php else : ?>
                    <div class="no-products text-center" style="padding: 3rem 0;">
                        <h2>Ürün Bulunamadı</h2>
                        <p class="text-muted">Aradığınız kriterlere uygun ürün bulunmamaktadır.</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>
