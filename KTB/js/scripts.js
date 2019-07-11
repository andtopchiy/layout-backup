$(document).ready(function(){
    $('.main-menu').slicknav({
        label: '',
        prependTo:'.main-menu'
    });

});


$("#container-parallax").mousemove(function(e) {
    parallaxIt(e, ".slide", -100);
    parallaxIt(e, ".container-parallax img", -30);
});

function parallaxIt(e, target, movement) {
    var $this = $("#container-parallax");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}
