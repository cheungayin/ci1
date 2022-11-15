$(document).ready(function () {

	$(".item_title").click(function () {
		var this_id = $(this).attr("data-id");
		if ($(this).hasClass("on")) {
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

	$(".area").click(function () {
		if ($(this).hasClass("item_open")) {
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