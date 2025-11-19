<?php
/**
 * Sidebar Template
 */
if (!is_active_sidebar('sidebar-1')) {
    return;
}
?>

<aside class="widget-area" style="padding: 2rem; background-color: var(--muted); border-radius: var(--radius);">
    <?php dynamic_sidebar('sidebar-1'); ?>
</aside>
