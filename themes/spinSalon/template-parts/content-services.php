<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package QOD_Starter_Theme
 */

?>
<?php $test = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' )?>
<div class="services-container">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="entry-div" style="background-image: url('<?php echo $test[0] ?>')">
			<div class="shadow-box"></div>
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</div><!-- .entry-header -->

		<div class="entry-content page-content">
			<?php the_content(); ?>
			
			
		</div><!-- .entry-content -->
	</article><!-- #post-## -->
</div>
