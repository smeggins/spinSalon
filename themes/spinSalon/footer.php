
			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class= "footer-hours-container">
					<h2>When to find us</h2>
					<?php
						if ( is_active_sidebar( 'business_hours' ) ) : //check the sidebar if used.
							dynamic_sidebar( 'business_hours' );  // show the sidebar.
						endif;
					?>
				</div>
				<div class="site-navigation-footer">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'header-nav' ) ); ?>
				</div>
				<div class = "footer-contact-location-container">
					<div class= "footer-contact-us-container">
						<h2>Contact us</h2>
						<?php
							if ( is_active_sidebar( 'contact_info' ) ) : //check the sidebar if used.
								dynamic_sidebar( 'contact_info' );  // show the sidebar.
							endif;
						?>
					</div>
					<div class= "footer-location-container">
						<h2>Where to find us</h2>

						<p>20475 Lougheed Hwy, Maple Ridge,<br> BC V2X 9B6</p>
					</div>
				</div>
			</footer>
		</div><!-- #page -->
		<?php wp_footer(); ?>
	</body>
</html>
