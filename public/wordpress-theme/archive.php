<?php
/**
 * Archive Template - Blog Posts
 */
get_header();
?>

<!-- Archive Header -->
<section class="archive-header py-16" style="background-color: var(--muted);">
    <div class="container">
        <div class="archive-title-content text-center">
            <h1 class="archive-title">
                <?php
                if (is_category()) {
                    single_cat_title('Kategori: ');
                } elseif (is_tag()) {
                    single_tag_title('Etiket: ');
                } elseif (is_author()) {
                    echo 'Yazar: ' . get_the_author();
                } elseif (is_day()) {
                    echo 'Arşiv: ' . get_the_date();
                } elseif (is_month()) {
                    echo 'Arşiv: ' . get_the_date('F Y');
                } elseif (is_year()) {
                    echo 'Arşiv: ' . get_the_date('Y');
                } else {
                    echo 'Blog Yazıları';
                }
                ?>
            </h1>
            <?php
            if (is_category() && category_description()) {
                echo '<div class="archive-description text-muted" style="max-width: 600px; margin: 1rem auto 0;">' . category_description() . '</div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Posts Grid -->
<section class="blog-posts-section py-16">
    <div class="container">
        <?php if (have_posts()) : ?>
            <div class="grid grid-cols-3">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('blog-post-card card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 250px; object-fit: cover; border-radius: var(--radius); margin-bottom: 1rem;')); ?>
                            </a>
                        <?php endif; ?>
                        
                        <div class="post-meta text-muted" style="font-size: 0.875rem; margin-bottom: 0.5rem;">
                            <time datetime="<?php echo get_the_date('c'); ?>">
                                <i class="far fa-calendar"></i> <?php echo get_the_date(); ?>
                            </time>
                            <span style="margin: 0 0.5rem;">•</span>
                            <span>
                                <i class="far fa-user"></i> <?php the_author(); ?>
                            </span>
                        </div>
                        
                        <h2 class="post-title" style="font-size: 1.25rem; margin-bottom: 0.75rem;">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>
                        
                        <div class="post-excerpt text-muted" style="margin-bottom: 1rem;">
                            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                        </div>
                        
                        <a href="<?php the_permalink(); ?>" class="btn btn-outline">
                            Devamını Oku <i class="fas fa-arrow-right"></i>
                        </a>
                    </article>
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
            <div class="no-posts text-center" style="padding: 3rem 0;">
                <h2>Yazı Bulunamadı</h2>
                <p class="text-muted">Bu kategoride henüz yazı bulunmamaktadır.</p>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                    Ana Sayfaya Dön
                </a>
            </div>
        <?php endif; ?>
    </div>
</section>

<?php
get_footer();
?>
