var win,
	wrap,
	doc;

$(function() {
	win = $(window);
	wrap = $('.wrapper');
	doc = $(document);
	
	initMenu();
	// activate owl carousel
	if(wrap.find('.owl-carousel')[0]) {
		initOwl();
	}
	// item hovers
	initItemHovers();
})

function initMenu() {
	var mnav = wrap.find('.main-nav'),
		btn = mnav.find('button');
	
	btn.click(function() {
		mnav.toggleClass('menu-show');
	});	
}

// owl carousel
function initOwl() {
	wrap.find('.top-story .owl-carousel').owlCarousel({
		margin:0,
		nav:true,
		dots: true,
		navText:['<div class="bg-white"></div><span class="fa fa-chevron-left"></span>', '<div class="bg-white"></div><span class="fa fa-chevron-right"></span>'],
		items:1,
		loop: true,
		responsive:{
			0:{
				nav:false
			},
			768:{
				nav:true
			}
		}
	})
	wrap.find('.featured .owl-carousel').owlCarousel({
		loop:false,
		margin:5,
		nav:false,
		dots: true,
		navText:['<span>prev</span>', '<span>next</span>'],
		pullDrag: false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:3,
				dots: false
			}
		}
	})
}

function initItemHovers() {
	var elem = wrap.find('.widget_ultimate_posts, .side-listing, .featured, .main-listing, .rel-tiles, .top-story'),
		elItems = elem.find('.item');
		
	elItems.each(function(ind) {
        var $this = $(this);
		
		$this.hover(function() {
			hovering(true, $this);
		}, function() {
			hovering(false, $this);
		});
    });
	function hovering(cond, elem) {
		var val = cond ? 0.5 : 1;
		TweenLite.to(elem, 0.4, {css:{'opacity': val}, ease:Quad.easeOut});
	}
}