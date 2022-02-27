 <?php
/**
* Plugin Name: Librairie de blocs customisés Wordpress
* Description: Cette extension propose à ses utilisateurs de nouveaux blocs pour l'éditeur Gutenberg !
* Author: Pierre Lejeune
* Author URI: https://pierrelejeune.fr
* Version: 0.1
*/
if( !defined( 'WPINC' ) ) { die; } // On vérifie que notre extension se trouve bien dans un répertoire Wordpress

/**
 *  On renseigne les dépendances de notre extension. Elles seront créées plus tard.
 * */
function load_bloccustomises_gutenberg_dependencies() {
	$dir = plugin_dir_url(__FILE__) . 'build';
	wp_enqueue_script( "bloccustomises-plugin", "$dir/index.js", [ 'wp-blocks', 'wp-dom' ] , false, true );
}
add_action( 'enqueue_block_editor_assets', 'load_bloccustomises_gutenberg_dependencies', 100 );