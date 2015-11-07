/**
 * See (http://jquery.com/).
 * @name jQuery
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details. This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name widget
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details. This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf jQuery
 */

/**
 * See (http://jquery.com/)
 * @name bolt
 * @class
 * @memberOf jQuery.widget
 * @param {object} $ - Global jQuery object
 */
(function ($) {
    'use strict';

    /**
     * Bolt select.
     *
     * @class select
     * @memberOf jQuery.widget.bolt
     * @license http://opensource.org/licenses/mit-license.php MIT License
     * @author rarila
     */
    $.widget('bolt.select', /** @lends jQuery.widget.bolt.select */ {
        /**
         * The constructor of the select widget.
         *
         * @private
         */
        _create: function () {
            var select = this.element.find('select'),
                buttonAll = this.element.find('.select-all'),
                buttonNone = this.element.find('.select-none'),
                setButtonState;

            // Initialize the select-all button.
            buttonAll.prop('title', buttonAll.text().trim());
            buttonAll.on('click', function () {
                select.find('option').prop('selected', true).trigger('change');
                this.blur();
            });

            // Initialize the select-none button.
            buttonNone.prop('title', buttonNone.text().trim());
            buttonNone.on('click', function () {
                select.val(null).trigger('change');
                this.blur();
            });

            // Enable/disable buttons.
            setButtonState = function () {
                var options = select.find('option'),
                    count = options.length,
                    selected = options.filter(':selected').length,
                    empty = select.prop('multiple') ? selected === 0 : select.val() === '';

                buttonAll.prop('disabled', selected === count);
                buttonNone.prop('disabled', empty);
            };

            setButtonState();
            select.on('change', setButtonState);
        }
    });
})(jQuery);
