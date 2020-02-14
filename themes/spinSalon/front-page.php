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
			<div class="main-content-container">
				
				<?php $args = array( 'p' => 37 ) ?>

				<?php $the_query = new WP_Query( $args ); ?>

						<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
						<div class= "front-page-intro hidden">
							<h2><?php the_title(); ?></h2>
							<?php the_content(); ?>
						</div>
						<?php endwhile; ?>

						<?php wp_reset_postdata(); ?>

						<div class= "business-info-container">
							<div class= "js-container hidden">
								<div class= "contact-container">
									<h2>Contact us</h2>
									<?php
										if ( is_active_sidebar( 'contact_info' ) ) : //check the sidebar if used.
											dynamic_sidebar( 'contact_info' );  // show the sidebar.
										endif;
									?>
								</div>

								<div class= "hours-container">
									<h2>When to find us</h2>
									<?php
										if ( is_active_sidebar( 'business_hours' ) ) : //check the sidebar if used.
											dynamic_sidebar( 'business_hours' );  // show the sidebar.
										endif;
									?>
								</div>
							</div>
						</div>

						<div class= "location-container hidden">
							<h2>Where to find us</h2>

							<p>20475 Lougheed Hwy, Maple Ridge, BC V2X 9B6</p>
						</div>
					
				<div class="content-container">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0205173007294!2d-122.65598558485352!3d49.21913798319285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4648f62a4ef%3A0xa22de3c43e915452!2sSpin%20Hair%20Salon!5e0!3m2!1sen!2sca!4v1581209188958!5m2!1sen!2sca" frameborder="0"></iframe>
				</div>
			</div>
		</main>
	</div>

<?php get_footer(); ?>