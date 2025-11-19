<?php
/**
 * 404 Error Page Template
 */
get_header();
?>

<section class="error-404-section py-16">
    <div class="container">
        <div class="error-404-content" style="text-align: center; max-width: 600px; margin: 0 auto;">
            <h1 style="font-size: 6rem; color: var(--primary); margin-bottom: 1rem;">404</h1>
            <h2 class="mb-4">Sayfa Bulunamadı</h2>
            <p class="text-muted mb-4">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
                Ana sayfaya dönebilir veya arama yapabilirsiniz.
            </p>
            
            <!-- Search Form -->
            <div style="margin-bottom: 2rem;">
                <?php get_search_form(); ?>
            </div>
            
            <!-- Back to Home Button -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary btn-lg">
                <i class="fas fa-home"></i> Ana Sayfaya Dön
            </a>
            
            <!-- Popular Categories -->
            <?php if (class_exists('WooCommerce')) :
                $categories = get_terms(array(
                    'taxonomy' => 'product_cat',
                    'hide_empty' => true,
                    'number' => 4,
                ));
                
                if (!empty($categories)) : ?>
                    <div style="margin-top: 3rem;">
                        <h3 class="mb-4">Popüler Kategoriler</h3>
                        <div class="grid grid-cols-2" style="gap: 1rem;">
                            <?php foreach ($categories as $category) : ?>
                                <a href="<?php echo esc_url(get_term_link($category)); ?>" class="btn btn-outline">
                                    <?php echo esc_html($category->name); ?>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif;
            endif; ?>
        </div>
    </div>
</section>

<?php
get_footer();
?>
