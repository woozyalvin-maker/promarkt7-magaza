<?php
/**
 * Standard Page Template
 */
get_header();
?>

<div class="page-wrapper">
    <div class="container py-8">
        <?php
        while (have_posts()) : the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="entry-image mb-4">
                        <?php the_post_thumbnail('large'); ?>
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