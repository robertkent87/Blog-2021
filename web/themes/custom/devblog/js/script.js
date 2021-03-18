(function ($, Drupal, drupalSettings) {
    'use strict';

    Drupal.behaviors.mybehavior = {
        attach: function (context, settings) {
            /* ======= Highlight.js Plugin ======= */
            /* Ref: https://highlightjs.org/usage/ */
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    };

})(jQuery, Drupal, drupalSettings);