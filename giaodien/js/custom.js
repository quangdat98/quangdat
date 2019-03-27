if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
$(document).ready(function(){
		$('ul.hd_log li:last-child').css('border','none');
	$('ul.hd_log li i').css('padding-right','4px');
	$('input#seach_sp').css('width','485px').css('height','40px');
	$('button#button-addon2').addClass('seach_bt');
	$('.hd_shop i:first').addClass('icon');
	$('.card-menu h5').css('color','#000');
	$('main .card-menu ul li.border_none').attr('style','border-bottom : none');
});
$(document).ready(function(){
  $("button").click(function(){
      $(".fa-2x").toggle();
  });
});


function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = (offsetX / zoomer.offsetWidth) * 100
  y = (offsetY / zoomer.offsetHeight) * 100
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}






