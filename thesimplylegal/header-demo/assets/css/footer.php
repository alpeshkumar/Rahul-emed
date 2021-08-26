<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Flat_Fee_Steve
 */

?>
<?php 
if(is_page_template( 'custom-pages/services-child.php' )){

$blue_section = get_field('blue_section','option');
$title = $blue_section['title'];
$sub_title = $blue_section['sub_title'];
$button_title = $blue_section['button_title'];
$button_link = $blue_section['button_link'];
?>
<section class="sws-section">
	<div class="container">
		<div class="row">
			<div class="start-working-steven">
				<div>
					<?php 
					if(!empty($title)){
						echo '<h5>'.$title.'</h5>';
					}
					if(!empty($sub_title)){
						echo '<p>'.$sub_title.'</p>';
					}
					?>
				</div>
				<?php 
				if(!empty($button_title)){
				?>
				<div class="btn-red">
					<span class="eff-red"></span>
					<a href="<?php echo $button_link; ?>"><?php echo $button_title; ?></a>
				</div>
				<?php } ?>
			</div>
		</div>
	</div>
</section>
<?php } ?>

<footer class="footer-section">
    <div class="container">
        <div class="row">
			<?php 
			$first_column_widget_title = get_field('first_column_widget_title','option');
			$title = $first_column_widget_title['title']; 
			
			$phone_number = get_field('phone_number','option');
			$email = get_field('email','option');
			$address = get_field('address','option');
			$google_map_address = get_field('google_map_address','option');
			?>
            <div class="col-lg-4 col-md-6 col-sm-12">
				<?php 
				if(!empty($title)){
					echo '<h5>'.$title.'</h5>';
				}
				?>
                
                
				<?php
				if(!empty($address)){
					?>
					<div class="footer-dcs">
						<a href="<?php echo $google_map_address; ?>" target="blank">
							<?php echo $address; ?>
						</a>
					</div>
					<?php
				}
				
				if(!empty($phone_number)){
					?>
					<div class="contact">
						<a href="tel:<?php echo $phone_number; ?>" rel="noopener noreferrer"> <?php echo $phone_number; ?> </a>
					</div>
					<?php
				}
				
				if(!empty($email)){
					?>
					<div class="email">
						<a href="mailto:<?php echo $email; ?>" target="_blank" rel="noopener noreferrer">
							 <?php echo $email; ?>
						 </a>
					</div>
					<?php
				}	
				?>
                
				
                
            </div>
			<?php 
			$second_column_widget_title = get_field('second_column_widget_title','option');
			$title = $second_column_widget_title['title']; 
			$icon = $second_column_widget_title['icon']; 
			$secicon = $second_column_widget_title['second-icon']; 
			
			$img = wp_get_attachment_image_src( $icon, 'full' );
			$image_alt = get_post_meta( $icon, '_wp_attachment_image_alt', true);
			$image_title = get_the_title( $icon );


			$img2 = wp_get_attachment_image_src( $secicon, 'full' );
			$image2_alt = get_post_meta( $secicon, '_wp_attachment_image_alt', true);
			$image2_title = get_the_title( $secicon );
			
			?>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <?php 
				if(!empty($title)){
					echo '<h5>'.$title.'</h5>';
				}
				?>
				<?php      
					wp_nav_menu( 
						array( 
							'menu_class'=> 'useful-link',
							'container' => 'false',
							'menu'    => 'Services Menu Footer',
						) 
					);
				?>
                <div class="realtor-logo">
                    <picture>
                        <img class="img_lazy" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  data-src="<?php echo $img[0]; ?>"  alt="<?php echo $image_alt; ?>" title="<?php echo $image_title ; ?>">
                    </picture>                
                    <picture>
                        <img class="img_lazy" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  data-src="<?php echo $img2[0]; ?>"  alt="<?php echo $image2_alt; ?>" title="<?php echo $image2_title ; ?>">
                    </picture>
                </div>
            </div>
			<?php 
			$third_column_widget_title = get_field('third_column_widget_title','option');
			$title = $third_column_widget_title['title']; 
			
			?>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <?php 
				if(!empty($title)){
					echo '<h5>'.$title.'</h5>';
				}
				?>
                <div class="contact-block bottom-border">
					<?php      
						wp_nav_menu( 
							array( 
								'menu_class'=> 'useful-link',
								'container' => 'false',
								'menu'    => 'Useful Links',
							) 
						);
					?>
                </div>
				
            </div>
			<?php 
			$fourth_column_widget_title = get_field('fourth_column_widget_title','option');
			$title = $fourth_column_widget_title['title']; 
			$description = $fourth_column_widget_title['description']; 
			$copyright_text = get_field('copyright_text','option'); 
			
			?>
           <!-- <div class="col-lg-3 col-md-6 col-sm-12">
                <?php 
				if(!empty($title)){
					echo '<h5>'.$title.'</h5>';
				}
				echo $description;
				?>
            </div>-->
        </div>
        <div class="row b-top">
            <div class="col-lg-6">
                <span>
                      ©
                      <script>document.write(new Date().getFullYear());</script> <?php echo $copyright_text; ?>
                </span>
            </div>
            <div class="col-lg-6 text-right">
                <div class="block"><span>Web Design By:</span>
                    <a class="techark-logo" href="https://gotechark.com/" target="_blank">
					<img class="img_lazy" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  data-src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo_teckark.svg" alt="techark-logo">
					</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
