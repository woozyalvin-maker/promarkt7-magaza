</main><!-- #main-content -->

<footer class="site-footer">
    <div class="footer-content">
        <div class="container">
            <div class="footer-widgets">
                <!-- Footer Widget 1 - Kurumsal -->
                <div class="footer-widget-area">
                    <?php if (is_active_sidebar('footer-1')) : ?>
                        <?php dynamic_sidebar('footer-1'); ?>
                    <?php else : ?>
                        <h3>Kurumsal</h3>
                        <ul>
                            <li><a href="<?php echo esc_url(home_url('/hakkimizda')); ?>">Hakkımızda</a></li>
                            <li><a href="<?php echo esc_url(home_url('/iletisim')); ?>">İletişim</a></li>
                            <li><a href="<?php echo esc_url(home_url('/sss')); ?>">Sık Sorulan Sorular</a></li>
                            <li><a href="<?php echo esc_url(home_url('/gizlilik-politikasi')); ?>">Gizlilik Politikası</a></li>
                        </ul>
                    <?php endif; ?>
                </div>
                
                <!-- Footer Widget 2 - Müşteri Hizmetleri -->
                <div class="footer-widget-area">
                    <?php if (is_active_sidebar('footer-2')) : ?>
                        <?php dynamic_sidebar('footer-2'); ?>
                    <?php else : ?>
                        <h3>Müşteri Hizmetleri</h3>
                        <ul>
                            <li><a href="<?php echo esc_url(home_url('/kargo-teslimat')); ?>">Kargo ve Teslimat</a></li>
                            <li><a href="<?php echo esc_url(home_url('/iade-degisim')); ?>">İade ve Değişim</a></li>
                            <li><a href="<?php echo esc_url(home_url('/odeme-secenekleri')); ?>">Ödeme Seçenekleri</a></li>
                        </ul>
                    <?php endif; ?>
                </div>
                
                <!-- Footer Widget 3 - Kategoriler -->
                <div class="footer-widget-area">
                    <?php if (is_active_sidebar('footer-3')) : ?>
                        <?php dynamic_sidebar('footer-3'); ?>
                    <?php else : ?>
                        <h3>Kategoriler</h3>
                        <?php if (class_exists('WooCommerce')) :
                            $categories = get_terms(array(
                                'taxonomy' => 'product_cat',
                                'hide_empty' => true,
                                'number' => 4,
                            ));
                            if (!empty($categories)) : ?>
                                <ul>
                                    <?php foreach ($categories as $category) : ?>
                                        <li>
                                            <a href="<?php echo esc_url(get_term_link($category)); ?>">
                                                <?php echo esc_html($category->name); ?>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif;
                        endif; ?>
                    <?php endif; ?>
                </div>
                
                <!-- Footer Widget 4 - İletişim -->
                <div class="footer-widget-area">
                    <?php if (is_active_sidebar('footer-4')) : ?>
                        <?php dynamic_sidebar('footer-4'); ?>
                    <?php else : ?>
                        <h3>İletişim</h3>
                        <ul class="contact-info-list">
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span><?php echo get_theme_mod('promarkt7_address', 'Mahmutlar mahallesi Barbaros Caddesi No 31/B Alanya'); ?></span>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>
                                <span><?php echo get_theme_mod('promarkt7_phone', '+90 (538) 258 21 58'); ?></span>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <span><?php echo get_theme_mod('promarkt7_email', 'info@promarkt7.com'); ?></span>
                            </li>
                        </ul>
                        
                        <!-- Social Media -->
                        <div class="social-links">
                            <?php 
                            $instagram = get_theme_mod('promarkt7_instagram', '#');
                            if ($instagram && $instagram !== '#') : ?>
                                <a href="<?php echo esc_url($instagram); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p>&copy; <?php echo date('Y'); ?> ProMarkt7. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </div>
</footer>

<!-- WhatsApp Button -->
<?php 
$whatsapp = get_theme_mod('promarkt7_whatsapp', '+905382582158');
if ($whatsapp && $whatsapp !== '') : ?>
    <a href="https://wa.me/<?php echo esc_attr(preg_replace('/[^0-9]/', '', $whatsapp)); ?>" 
       class="whatsapp-button" 
       target="_blank" 
       rel="noopener noreferrer"
       aria-label="WhatsApp ile iletişime geç">
        <i class="fab fa-whatsapp"></i>
    </a>
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>