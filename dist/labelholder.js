/*
 *  labelholder - v0.0.3
 *  Floatlabels for Bootstrap.
 *  https://github.com/Borzik/labelholder
 *
 *  Made by Felix Borzik
 *  Under MIT License
 */

(function() {
  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = 'labelholder';
    defaults = {
      events: 'keyup blur change',
      elements: 'input[type=text], input[type=date], textarea'
    };
    Plugin = function(element, options) {
      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    };
    Plugin.prototype = {
      init: function() {
        this.$element = $(this.element);
        this.$element.addClass('has-labelholder');
        this.$input = this.$element.find(this.settings.elements);
        this.setDataPlaceholder();
        this.$input.on(this.settings.events, (function(_this) {
          return function(e) {
            return _this.checkValue(e);
          };
        })(this));
        return this.checkValue();
      },
      setDataPlaceholder: function() {
        var label;
        label = this.$input.attr('placeholder');
        if (!label) {
          label = 'You forgot to add placeholder attribute!';
        }
        if (!this.$element.data('label')) {
          return this.$element.attr('data-label', label);
        }
      },
      checkValue: function(e) {
        var keyCode;
        if (e) {
          keyCode = e.keyCode || e.which;
          if (keyCode === 9) {
            return;
          }
        }
        return this.$element.toggleClass('floating', this.$input.val() !== '');
      }
    };
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
