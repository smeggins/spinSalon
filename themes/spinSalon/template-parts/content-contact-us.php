<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package QOD_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-div">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</div><!-- .entry-header -->

	<div class="entry-content page-content">
		<?php the_content(); ?>
    </div><!-- .entry-content -->
</article><!-- #post-## -->


    <div class= "business-info-container-cu">
        <div class= "js-container">
            <div class= "contact-us-container">
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

            <div class= "location-container cu">
                <h2>Where to find us</h2>

                <p>20475 Lougheed Hwy, Maple Ridge, BC V2X 9B6</p>
            </div>
                
            <div class="content-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0205173007294!2d-122.65598558485352!3d49.21913798319285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4648f62a4ef%3A0xa22de3c43e915452!2sSpin%20Hair%20Salon!5e0!3m2!1sen!2sca!4v1581209188958!5m2!1sen!2sca" frameborder="0"></iframe>
            </div>
        </div>
    </div>


