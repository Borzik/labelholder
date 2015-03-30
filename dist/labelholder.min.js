/*
 *  labelholder - v0.1.4
 *  Floatlabels for Bootstrap.
 *  https://github.com/Borzik/labelholder
 *
 *  Made by Felix Borzik
 *  Under MIT License
 */

(function(){!function(a){var b,c,d;return d="labelholder",c={events:"keyup blur change",elements:["input[type=text]","input[type=password]","input[type=email]","input[type=number]","input[type=date]","input[type=tel]","input[type=url]","textarea"].join(", ")},b=function(b,d){this.element=b,this.settings=a.extend({},c,d),this.init()},b.prototype={init:function(){return this.$element=a(this.element),this.$element.hasClass("has-labelholder")?void 0:(this.$element.addClass("has-labelholder"),this.$input=this.$element.find(this.settings.elements),this.setDataPlaceholder(),this.$input.on(this.settings.events,function(a){return function(b){return a.checkValue(b)}}(this)),this.checkValue())},setDataPlaceholder:function(){var a;return a=this.$input.attr("placeholder"),a||(a="You forgot to add placeholder attribute!"),this.$element.data("label")?void 0:this.$element.attr("data-label",a)},checkValue:function(a){var b;if(!a||(b=a.keyCode||a.which,9!==b))return this.$element.toggleClass("floating",""!==this.$input.val())}},a.fn[d]=function(c){return this.each(function(){return a.data(this,"plugin_"+d)?void 0:a.data(this,"plugin_"+d,new b(this,c))})}}(jQuery,window,document)}).call(this);