<?php
/**
 * Single Post Template (Blog Posts)
 */
get_header();
?>

<div class="single-post-wrapper">
    <div class="container py-8">
        <?php
        while (have_posts()) : the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header mb-4">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    
                    <div class="entry-meta text-muted">
                        <span class="posted-on">
                            <i class="fas fa-calendar"></i>
                            <?php echo get_the_date(); ?>
                        </span>
                        <span class="author">
                            <i class="fas fa-user"></i>
                            <?php the_author(); ?>
                        </span>
                        <?php if (has_category()) : ?>
                            <span class="categories">
                                <i class="fas fa-folder"></i>
                                <?php the_category(', '); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="entry-image mb-4">
                        <?php the_post_thumbnail('large', array('class' => 'img-fluid')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Pages:', 'promarkt7'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
                
                <?php if (has_tag()) : ?>
                    <footer class="entry-footer mt-4">
                        <div class="tags">
                            <i class="fas fa-tags"></i>
                            <?php the_tags('', ', '); ?>
                        </div>
                    </footer>
                <?php endif; ?>
                
                <?php
                // Post navigation
                the_post_navigation(array(
                    'prev_text' => '<span class="nav-subtitle">' . __('Önceki:', 'promarkt7') . '</span> <span class="nav-title">%title</span>',
                    'next_text' => '<span class="nav-subtitle">' . __('Sonraki:', 'promarkt7') . '</span> <span class="nav-title">%title</span>',
                ));
                ?>
                
                <?php if (comments_open() || get_comments_number()) : ?>
                    <div class="comments-area mt-8">
                        <?php comments_template(); ?>
                    </div>
                <?php endif; ?>
            </article>
            <?php
        endwhile;
        ?>
    </div>
</div>

<?php
get_footer();
?>