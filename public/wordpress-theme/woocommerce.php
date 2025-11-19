<?php
/**
 * WooCommerce Template
 * Handles all WooCommerce pages (shop, cart, checkout, etc.)
 */
get_header();
?>

<div class="woocommerce-wrapper">
    <div class="container py-8">
        <?php woocommerce_content(); ?>
    </div>
</div>

<?php
get_footer();
?>