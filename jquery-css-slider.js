/**
 * CSS Slider. Simple tool for providing css hooks
 * @version 1.3
 *
 * @dependency jQuery 1.8.2
 * @dependency jQuery UI 1.9.0
 *
 * @author Matt Goucher ( matt[at]mattgoucher[dot]com )
 * @author Justin Jones ( justin[at]jstnjns[dot]com )
 **/

(function($){

    $.widget('css.slider', {

        options: {
            auto:                 true,
            loop:                 true,
            interval:             3000,
            hoverPause:           true,
            initialSlide:         0,
            navigation:           false,
            nextAndPrev:          true,
            sliderClass:          'css-slider',
            slideClass:           'css-slide',
            nextClass:            'css-next',
            prevClass:            'css-prev',
            activeClass:          'css-active',
            oldClass:             'css-old',
            disabledClass:        'css-disabled',
            navigationClass:      'css-slider-navigation',
            navigationItemClass:  'css-slider-navigation-item',
            onTransition:         function() {}
        },

        _create: function() {
            var self = this;

            // Set Current Slide
            self.current = self.options.initialSlide;

            // Slider
            self.slider = self.element.addClass( self.options.sliderClass );

            // Slides
            self.slides = self.element.children().addClass( self.options.slideClass );

            // Build out the next and previous buttons.
            if ( self.options.nextAndPrev ) {

                // Next Button Setup
                self.nextButton = $('<a>', {
                    'class': self.options.nextClass,
                    'text':  'Next'
                }).hover(
                    function(){
                        self.stopTimer();
                    },
                    function(){
                        self.startTimer();
                    }
                ).click(function(e){
                    e.preventDefault();

                    // Go To Next Slide
                    self.to( self.current + 1 );
                }).insertAfter( self.slider );

                // Previous Button Setup
                self.previousButton = $('<a>', {
                    'class': self.options.prevClass,
                    'text':  'Previous'
                }).hover(
                    function(){
                        self.stopTimer();
                    },
                    function(){
                        self.startTimer();
                    }
                ).click(function(e){
                    e.preventDefault();

                    // Go To Next Slide
                    self.to( self.current - 1 );
                }).insertAfter( self.slider );

            }

            // Build out slider navigation
            if ( self.options.navigation ) {
                self.navigation = $('<ul>', {
                    'class': self.options.navigationClass
                }).hover(
                    function(){
                        self.stopTimer();
                    },
                    function(){
                        self.startTimer();
                    }
                );
                self.slides.each(function(i){
                    self.navigation.append(
                        $('<li>', {
                            'class': self.options.navigationItemClass,
                            'text':  'slide-' + (i+1)
                        }).click(function(){
                            self.to(i);
                        })
                    );
                });
                self.navigation.insertAfter( self.slider );
            }


        },

        _init: function() {
            this.to( this.current );

            // Bind events for timer
            this.options.auto && this.start( this.options.hoverPause );
        },

        to: function( i ) {

            var self = this;

            // Call the transition callback
            // pass in the to slide for extra fun
            this.options.onTransition(i);

            // Loopable
            if ( this.options.loop ) {

                // Go to the opposite side of the slider
                if ( i < 0 ) {

                    // Last slide
                    return this.to( this.slides.length - 1 );

                } else if ( i > this.slides.length - 1 ) {

                    // First slide
                    return this.to(0);

                }

            // Not loopable
            } else {

                // Disable The Buttons
                if ( i >= this.slides.length - 1 ) {
                    this.nextButton.addClass(this.options.disabledClass);
                } else {
                    this.nextButton.removeClass(this.options.disabledClass);
                }

                if( i <= 0 ){
                    this.previousButton.addClass(this.options.disabledClass);
                } else {
                    this.previousButton.removeClass(this.options.disabledClass);
                }

            }

            // Stop Slider from moving
            if( i > this.slides.length - 1 || i < 0 ) {
                return false;
            }

            this.slides
                .removeClass( this.options.activeClass + ' ' + this.options.oldClass )
                .eq(i)
                    .addClass( this.options.activeClass )
                    .end()
                .slice(0, i)
                    .addClass( this.options.oldClass );

            // Activate the selected slide navigation
            self.navigation && $(self.navigation.children()[i]).addClass('active').siblings().removeClass('active');

            this.current = i;

            this._trigger('to');
        },

        next: function() {
            this.to( this.current + 1 );
        },

        previous: function(){
            this.to( this.current - 1 );
        },

        start: function( hoverPause ) {
            var self = this;

            // Start Timer Initially
            self.startTimer();

            // Bind hover events to start/stop timer
            hoverPause && self.slider.hover(
                function(){
                    self.stopTimer();
                },
                function(){
                    self.startTimer();
                }
            );

        },

        startTimer: function() {
            var self = this;
            if ( !this.options.auto ) { return; }
            this.timer = setInterval(function() {
                self.next();
            }, this.options.interval );
        },

        stopTimer:  function() {
            if ( !this.options.auto ) { return; }
            clearInterval( this.timer );
        },

        destroy: function() {

            // Use the destroy method to reverse everything your plugin has applied
            $.Widget.prototype.destroy.call(this);

            this.nextButton.remove();
            this.previousButton.remove();
        }


    });


}(jQuery));
