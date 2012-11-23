# jQuery CSS Slider
A jQuery plugin that gives you hooks to build a slider using CSS transitions and more. Using jQuery &amp; jQuery UI Widgets.

## Setup

### HTML

#### Install Dependencies
```html
<script src="js/libs/jquery.1.8.2.min.js" type="text/javascript"></script>
<script src="js/libs/jqueryui.1.9.0.min.js" type="text/javascript"></script>
<script src="jquery-css-slider.min.js" type="text/javascript"></script>
```

#### Basic Slider Markup
```html
<div id="slider-wrapper">
	<ul id="slider">
		<li class="slide red">One</li>
		<li class="slide ba">Two</li>
		<li class="slide pink">Three</li>
		<li class="slide blue">Four</li>
		...
	</ul>
</div>
```

#### Run The Slider With Your Custom Options
**[See all available options](#options)**
```html
<script type="text/javascript">
	$(function(){
		$('#slider').slider({
			auto:                 true,                         // Slider moves automaticly
			loop:                 true,                         // when user gets to end, go back to slide one
			interval:             2000,                         // Time ( in milliseconds ) between transitions (if auto is true)
			hoverPause:           true,                         // Pause the slider when hovered 
			initialSlide:         0,                            // Which slide to start on ( zero based )
			navigation:           true,                         // Create slider navigation?
			nextAndPrev:          true,                         // Create next and previous buttons?
			sliderClass:          'css-slider',                 // Class that slider gets
			slideClass:           'css-slide',                  // Class that all Slides get
			activeClass:          'css-active',                 // Class that Active slide gets
			oldClass:             'css-old',                    // Class that all "seen" slides get
			nextClass:            'css-next',                   // Next Button
			prevClass:            'css-prev',                   // Prev Button
			disabledClass:        'css-disabled',               // Class to give disabled button
			navigationClass:      'css-slider-navigation',      // Class to give navigation
			navigationItemClass:  'css-slider-navigation-item', // Each navigation item

			// Function called after each slide transition
			onTransition:  function( to_slide ) {
				// 0, 1, 2 ...
				// console.log( to_slide );
			}
		});
	});
</script>
```

#### CSS
See **[included css file](https://raw.github.com/mattgoucher/jQuery-CSS-Slider/master/css/jquery-css-slider.css)**


### Options

#### Basic Options
<table>
	<tr>
		<th class="name">Name</th>
		<th class="type">Type</th>
		<th class="default">Default</th>
		<th class="desc">Description</th>
	</tr>
	<tr>
		<td>auto</td>
		<td>boolean</td>
		<td>true</td>
		<td class="desc">If this option is enabled, the slider will transition automaticly based on the interval option</td>
	</tr>
	<tr>
		<td>loop</td>
		<td>boolean</td>
		<td>true</td>
		<td class="desc">Slider won't stop at last slide, continues to first</td>
	</tr>
	<tr>
		<td>interval</td>
		<td>integer</td>
		<td>3000 (3 seconds)</td>
		<td class="desc">If 'auto' enabled, how long between transitions</td>
	</tr>
	<tr>
		<td>hoverPause</td>
		<td>boolean</td>
		<td>true</td>
		<td class="desc">Stop automatic transition if user hovers on buttons, navigation, or slider itself.</td>
	</tr>
	<tr>
		<td>initialSlide</td>
		<td>integer</td>
		<td>0</td>
		<td class="desc">First slide to see. (zero index)</td>
	</tr>
	<tr>
		<td>navigation</td>
		<td>boolean</td>
		<td>true</td>
		<td class="desc">Enable slide navigation? Buttons</td>
	</tr>
	<tr>
		<td>nextAndPrev</td>
		<td>boolean</td>
		<td>true</td>
		<td class="desc">Enable next and previous buttons?</td>
	</tr>
</table>

#### Element Class Options
These options are useful if you have multiple slider instances
<table>
	<tr>
		<th class="name">Name</th>
		<th class="type">Type</th>
		<th class="default">Default</th>
		<th class="desc">Description</th>
	</tr>
	<tr>
		<td>sliderClass</td>
		<td>string</td>
		<td>css-slider</td>
		<td class="desc">Class to give the slider</td>
	</tr>
	<tr>
		<td>slideClass</td>
		<td>string</td>
		<td>css-slide</td>
		<td class="desc">Class to give each slide</td>
	</tr>
	<tr>
		<td>nextClass</td>
		<td>string</td>
		<td>css-next</td>
		<td class="desc">Class to give the next button</td>
	</tr>
	<tr>
		<td>prevClass</td>
		<td>string</td>
		<td>css-prev</td>
		<td class="desc">Class to give previous button</td>
	</tr>
	<tr>
		<td>activeClass</td>
		<td>string</td>
		<td>css-active</td>
		<td class="desc">Class to give the currently visible slide</td>
	</tr>
	<tr>
		<td>disabledClass</td>
		<td>string</td>
		<td>css-disabled</td>
		<td class="desc">Class to give disabled button elemenets</td>
	</tr>
	<tr>
		<td>navigationClass</td>
		<td>string</td>
		<td>css-slider-navigation</td>
		<td class="desc">Class to give the slider navigation</td>
	</tr>
	<tr>
		<td>navigationItemClass</td>
		<td>string</td>
		<td>css-slider-navigation</td>
		<td class="desc">Class to give each slider navigation item</td>
	</tr>
</table>