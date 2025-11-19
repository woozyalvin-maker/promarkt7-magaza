<?php
/**
 * Single Product Template
 */
get_header();

if (have_posts()) :
    while (have_posts()) : the_post();
        global $product;
?>

<section class="product-detail-section py-16">
    <div class="container">
        <!-- Breadcrumb -->
        <?php if (function_exists('woocommerce_breadcrumb')) : ?>
            <div class="woocommerce-breadcrumb" style="margin-bottom: 2rem;">
                <?php woocommerce_breadcrumb(); ?>
            </div>
        <?php endif; ?>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
            <!-- Product Images -->
            <div class="product-images">
                <?php if (has_post_thumbnail()) : ?>
                    <div class="product-main-image" style="margin-bottom: 1rem;">
                        <?php the_post_thumbnail('large', array('style' => 'width: 100%; border-radius: var(--radius);')); ?>
                    </div>
                <?php endif; ?>
                
                <?php
                $attachment_ids = $product->get_gallery_image_ids();
                if ($attachment_ids) : ?>
                    <div class="product-gallery" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
                        <?php foreach ($attachment_ids as $attachment_id) : ?>
                            <img src="<?php echo wp_get_attachment_url($attachment_id); ?>" 
                                 alt="<?php echo esc_attr(get_the_title()); ?>"
                                 style="width: 100%; height: 100px; object-fit: cover; border-radius: var(--radius); cursor: pointer;">
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Product Info -->
            <div class="product-info">
                <h1 class="product-title" style="font-size: 2rem; margin-bottom: 1rem;">
                    <?php the_title(); ?>
                </h1>
                
                <?php if ($product->get_short_description()) : ?>
                    <div class="product-short-description text-muted" style="margin-bottom: 1.5rem;">
                        <?php echo $product->get_short_description(); ?>
                    </div>
                <?php endif; ?>
                
                <!-- Price -->
                <div class="product-price-section" style="margin-bottom: 2rem;">
                    <?php if ($product->is_on_sale()) : ?>
                        <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 0.5rem;">
                            <span class="price-old"><?php echo wc_price($product->get_regular_price()); ?></span>
                            <span class="price-display"><?php echo wc_price($product->get_sale_price()); ?></span>
                        </div>
                        <span class="discount-badge">
                            -%<?php echo round((($product->get_regular_price() - $product->get_sale_price()) / $product->get_regular_price()) * 100); ?> İndirim
                        </span>
                    <?php else : ?>
                        <span class="price-display"><?php echo $product->get_price_html(); ?></span>
                    <?php endif; ?>
                </div>
                
                <!-- Stock Status -->
                <div class="product-stock" style="margin-bottom: 2rem;">
                    <?php if ($product->is_in_stock()) : ?>
                        <span style="color: var(--success); font-weight: 600;">
                            <i class="fas fa-check-circle"></i> Stokta Var
                        </span>
                    <?php else : ?>
                        <span style="color: var(--destructive); font-weight: 600;">
                            <i class="fas fa-times-circle"></i> Stokta Yok
                        </span>
                    <?php endif; ?>
                </div>
                
                <!-- Add to Cart Form -->
                <div class="product-add-to-cart" style="margin-bottom: 2rem;">
                    <?php woocommerce_template_single_add_to_cart(); ?>
                </div>
                
                <!-- Product Meta -->
                <div class="product-meta" style="border-top: 1px solid var(--border); padding-top: 1.5rem;">
                    <?php if ($product->get_sku()) : ?>
                        <div style="margin-bottom: 0.5rem;">
                            <strong>SKU:</strong> <?php echo $product->get_sku(); ?>
                        </div>
                    <?php endif; ?>
                    
                    <?php
                    $categories = get_the_terms(get_the_ID(), 'product_cat');
                    if ($categories) : ?>
                        <div style="margin-bottom: 0.5rem;">
                            <strong>Kategori:</strong>
                            <?php
                            $cat_links = array();
                            foreach ($categories as $category) {
                                $cat_links[] = '<a href="' . get_term_link($category) . '">' . $category->name . '</a>';
                            }
                            echo implode(', ', $cat_links);
                            ?>
                        </div>
                    <?php endif; ?>
                    
                    <?php
                    $tags = get_the_terms(get_the_ID(), 'product_tag');
                    if ($tags) : ?>
                        <div>
                            <strong>Etiketler:</strong>
                            <?php
                            $tag_links = array();
                            foreach ($tags as $tag) {
                                $tag_links[] = '<a href="' . get_term_link($tag) . '">' . $tag->name . '</a>';
                            }
                            echo implode(', ', $tag_links);
                            ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        
        <!-- Product Tabs -->
        <div class="product-tabs" style="margin-top: 4rem;">
            <?php woocommerce_output_product_data_tabs(); ?>
        </div>
        
        <!-- Related Products -->
        <div class="related-products" style="margin-top: 4rem;">
            <?php woocommerce_output_related_products(); ?>
        </div>
    </div>
</section>

<?php
    endwhile;
endif;

get_footer();
?>
