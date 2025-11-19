<?php
/**
 * Search Form Template
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>" style="display: flex; gap: 0.5rem;">
    <input type="search" 
           class="search-field" 
           placeholder="<?php echo esc_attr_x('Ara...', 'placeholder', 'promarkt7'); ?>" 
           value="<?php echo get_search_query(); ?>" 
           name="s"
           style="flex: 1; padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: var(--radius);" />
    <button type="submit" 
            class="btn btn-primary"
            style="padding: 0.75rem 1.5rem;">
        <i class="fas fa-search"></i>
    </button>
</form>
