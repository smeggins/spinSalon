<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

            <?php
            $args = array('post_type' => 'salon_services', 'posts_per_page' => -1 );

            $the_query = new WP_Query( $args );
            ?>

            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

            <?php get_template_part( 'template-parts/content', 'services' ); ?>
            
            <?php wp_reset_postdata(); ?>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
