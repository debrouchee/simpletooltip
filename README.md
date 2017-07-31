# simpletooltip
Simple jQuery Tooltip

***

### Requirements

* jQuery >=1.6

***

### Installation

Bower:

```
bower install debrouchee/simpletooltip --save-dev
```

Or download js/simpletooltip.min.js and include the script on your page like shown below.

***

### Usage

Include script:

```html
<script src="simpletooltip.min.js"></script>
```

Markup (example):

```html
<a href="index.html" title="<strong>Morn says:</strong><br>It's not revolutionary but a tiny little helper!" class="tooltip">What says Morn?</a>
```

Initialize:

```javacript
$(function() {
  $('.tooltip').simpletooltip();
});
```

Initialize (for work with dynamic DOM-Manipulation):

```javacript
$(document).on({
  mouseenter: function(event) {
    $.simpletooltip.show(el, event)`;`
  },
  mouseleave: function() {
    $.simpletooltip.remove();
  }
}, '.tooltip');
```

