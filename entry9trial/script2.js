$(document).ready(function(){

	$(".item_title").click(function(){
		var this_id = $(this).attr("data-id");
		if ($(this).hasClass("on")){
			$(this).removeClass('on');
			$(".topitem_box").removeClass("show");
			$("#" + this_id).removeClass("on");

			return false;

		};
		$(".item_title").removeClass("on");
		$(this).addClass("on");
		$(".topitem").removeClass("on");
		$("#" + this_id).addClass('on');
		$(".topitem_box").addClass('show');

	});
	$(".back").click(function(){
		$(".topitem_box").removeClass('show');
		$(".topitem").removeClass('on');

	});

	$(".item_title").hover(function(){
			var this_id = $(this).attr("data-id");
			$('.item_title').removeClass("hov");
			$(this).addClass("hov");

			$(".topitem").removeClass('hov');
			$("#" + this_id).addClass('hov');
			$(".topitem_box").toggleClass('hov');

		})
		.mouseleave(function(){
			var this_id = $(this).attr("data-id");
			$(this).removeClass("hov");
			$("#" + this_id).removeClass('hov');


		});

	$(".area").click(function(){
		if ($(this).hasClass("item_open")){
			$(this).removeClass("item_open");
			$(this).addClass("item");
			return false;
		};
		$(".area").removeClass("item_open");
		$(".area").addClass("item");
		$(this).removeClass("item");
		$(this).addClass("item_open");
	});
});