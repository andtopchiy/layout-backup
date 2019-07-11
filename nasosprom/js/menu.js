 $(function () {
        var $oe_menu = $('#catalog-main, #sidebar-menu');
        var $oe_menu_items = $oe_menu.children('li');
        var $oe_overlay = $('#oe_overlay');

        $oe_menu_items.bind('mouseenter', function () {
            var $this = $(this);
            $this.children('div').css('z-index', '9999').stop(true, true).slideDown(200);

        });

        $oe_menu.bind('mouseenter', function () {
            var $this = $(this);
            $oe_overlay.stop(true, true).fadeTo(0, 0.25);
            $this.addClass('hovered');
            $('#header-search').css('opacity', '0.8');
            $('.logo-block').css('opacity', '0.5');
            $('#main-slider').css('opacity', '0.5');

        }).bind('mouseleave', function () {
            var $this = $(this);
            $this.removeClass('hovered');
            $oe_overlay.stop(true, true).fadeTo(300, 0);
            $oe_menu_items.children('div').hide();
            $('.submenu').hide();
            $('#header-search').css('opacity', '1');
            $('.logo-block').css('opacity', '1');
            $('#main-slider').css('opacity', '1');
        })

 });

$(document).ready(function(){
	$.easing.def = "easeInOutQuad";
	$('.drop-right-lvl1').click(function(e){
		var dropDown = $(this).next();
		$('.submenu').not(dropDown).slideUp('middle');		
		dropDown.slideToggle('middle');
		e.preventDefault();
		
	})	
});	
$(document).ready(function(){
	$.easing.def = "easeInOutQuad";
	$('.drop-right-lvl2-a').click(function(e){
		var dropDown = $(this).next();
		$('.submenu-lvl3').not(dropDown).slideUp('middle');		
		dropDown.slideToggle('middle');
		e.preventDefault();
		
	})	
});	

  var $dropdowns = $('.navmenu-brand');
    $dropdowns.click(function() {
        if ( $('#catalog-main-list').hasClass('active-m') ){
            $('#catalog-main-list').toggleClass('active-m');
            $('.icon-mob').toggleClass('active-m');

        } else {
           $('#catalog-main-list').removeClass('active-m');
            $('#catalog-main-list').toggleClass('active-m');
            $('.icon-mob').toggleClass('active-m');
        }
    });

	
	