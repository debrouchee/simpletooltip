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

***

### Usage

HTML:

```html
<a href="index.html" title="<strong>Morn says:</strong><br>It's not revolutionary but a tiny little helper!" class="tooltip">What says Morn?</a>
```

JavaScript:

```javacript
$(function() {
    $('.tooltip').simpletooltip();
});
```

For dynamic DOM-Manipulation:

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

