<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div id="page" class="hfeed site">
			<a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( 'Skip to content' ); ?></a>

			<header id="masthead" class="site-header" role="banner">
				<?php if( is_front_page() || is_page( 'about' )): ?>
				<?php echo 	'<div class= "fp-header absoluted">'; ?>
				<?php else: ?>
				<?php echo '<div class= "fp-header">'; ?>
				<?php endif; ?>
					<h1 id="hero-title"> SPIN SALON </h1>
					<div class= "menu-button">
							<svg width="100%" height="100%">
								<rect x="0" y="25%" rx="3" ry="3" width="100%" height="10%"></rect>;
								<rect x="0" y="50%" rx="3" ry="3" width="100%" height="10%"></rect>;
								<rect x="0" y="75%" rx="3" ry="3" width="100%" height="10%"></rect>;
							</svg>
					</div>
					<div class= "nav-container">
						<div class="nav-container-border">
							<nav id="site-navigation" class="main-navigation" role="navigation">
								<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'header-nav' ) ); ?>
							</nav>
						</div>
					</div>
				</div>
			</header>

			<div id="content" class="site-content">

			<?php get_sidebar(); ?>

