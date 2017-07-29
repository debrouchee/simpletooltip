/*
 *  Simpletooltip - v1.0.0
 *
 *  Copyright (c) 2017 Dennis Dohle
 *  Last changes: 13.01.2017
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	/* Strict mode offers a few nice features to help your plug-in */
	"use strict";

	var $simpletooltip = null;

	function init($el) {
		$el.hover(function(event) {
			show( $(this), event );
		}, function() {
			remove();
		});
	}

	function show($el, event) {
		remove();
		$el.attr('data-simpletooltip', 'true');
		var text = $el.attr('title');
		if (!text) return;
		$el.attr('title', '');
		var tipX = event.pageX + 18;
		var tipY = event.pageY + 18;
		$simpletooltip = $('<div id="simpletooltip">' + text + '</div>');
		$simpletooltip.data({
			'$el': $el,
			'title': text
		});
		$('body').append($simpletooltip);
		var tipWidth = $simpletooltip.width();
		$simpletooltip.width(tipWidth);
		$simpletooltip.css('left', tipX).css('top', tipY).fadeIn('medium');

		$el.off('mousemove').on('mousemove', function(event) {
			move(event);
		});
	}

	function remove() {
		if ($simpletooltip !== null && $simpletooltip.length > 0) {
			if ($simpletooltip.data('title')) {
				var $el = $simpletooltip.data('$el');
				$el.attr('title', $simpletooltip.data('title'));
			}
			$simpletooltip.remove();
		}
	}

	function move(event) {
		var tipX = event.pageX + 18;
		var tipY = event.pageY + 18;
		var tipWidth = $simpletooltip.outerWidth(true);
		var tipHeight = $simpletooltip.outerHeight(true);
		if(tipX + tipWidth > $(window).scrollLeft() + $(window).width()) { tipX = event.pageX - tipWidth; }
		if($(window).height()+$(window).scrollTop() < tipY + tipHeight) { tipY = event.pageY - tipHeight; }
		$simpletooltip.css('left', tipX).css('top', tipY).fadeIn('medium');
	}

	/* Öffentlicher Direkt-Methodenaufruf */
	$.simpletooltip = {
		show: function(el, event) {
			show($(el), event);
		},
		remove: function() {
			remove();
		}
	};

	/* Öffentliche Initialisierungs-Methode mittels selectors */
	$.fn.simpletooltip = function () {
		var $el = this.not('[data-simpletooltip]');
		if ($el.length > 0) {
			init($el);
		}
	};

})( jQuery, window, document );