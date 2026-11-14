<?php
/**
 * Plugin Name: iShowi · Metge Mir 24
 * Description: Showroom iShowi de la promoció Metge Mir 24 (Sabadell). Serveix el showroom a /metge-mir/ amb les dades de assets/data/promocion.json (futur: iShowi Hub).
 * Version: 0.7.0
 * Author: BoomBizz · iShowi
 * License: Proprietary
 */
if (!defined('ABSPATH')) exit;
define('MM24_SLUG', 'metge-mir');
define('MM24_VER', '0.7.0');

add_action('init', function () {
    add_rewrite_rule('^' . MM24_SLUG . '/?$', 'index.php?mm24=1', 'top');
});
add_filter('query_vars', function ($v) { $v[] = 'mm24'; return $v; });

add_action('template_redirect', function () {
    if (!get_query_var('mm24')) return;
    $file = plugin_dir_path(__FILE__) . 'assets/index.html';
    if (!file_exists($file)) { status_header(500); exit('Showroom no trobat'); }
    $html = file_get_contents($file);
    $base = esc_url(plugin_dir_url(__FILE__) . 'assets/');
    // Les rutes del showroom són relatives: un <base> les fa apuntar a la carpeta del plugin.
    $html = str_replace('<head>', "<head>\n<base href=\"{$base}\">", $html);
    // Fins a la publicació oficial, la pàgina queda fora de Google (el <meta robots> ja és noindex).
    if (!get_option('mm24_public')) header('X-Robots-Tag: noindex, nofollow');
    status_header(200);
    header('Content-Type: text/html; charset=utf-8');
    echo $html;
    exit;
});

register_activation_hook(__FILE__, function () {
    add_rewrite_rule('^' . MM24_SLUG . '/?$', 'index.php?mm24=1', 'top');
    flush_rewrite_rules();
});
register_deactivation_hook(__FILE__, 'flush_rewrite_rules');
