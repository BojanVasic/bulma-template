      (function() {
          var burger = document.querySelector('.burger');
          var nav = document.querySelector('#'+burger.dataset.target);

          burger.addEventListener('click', function(){
          burger.classList.toggle('is-active');
          nav.classList.toggle('is-active');
        });
        })();
	  
		$(".owl-carousel").owlCarousel({
				autoplay: !0,
				autoplayTimeout: 5e3,
				autoplayHoverPause: !0,
				items: 4,
				lazyLoad: !0,
				margin: 20,
				navText: ["Prev", "Next"],
				loop: !0,
				responsive: {
					0: {
						items: 2,
						nav: !0,
						slideBy: 2
					},
					600: {
						items: 3,
						nav: !0,
						slideBy: 3
					},
					1e3: {
						items: 4,
						nav: !0,
						slideBy: 4
					}
				}
			}) 
			
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });			