<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<?php if ( is_home() && ! is_front_page() ) : ?>
				<div>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</div>
			<?php endif; ?>

			<?php while ( have_posts() ) : the_post(); ?>

            <div class="hero-image">
				<?php the_content(); ?>
            </div>

			<?php endwhile; ?>

            <?php endif; ?>

		</main>
	</div>

<?php get_footer(); ?>
