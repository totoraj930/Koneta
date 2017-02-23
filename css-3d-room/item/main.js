var $action_button;
$(function () {
	$action_button = $(".action_button");
	$action_button.on("click", onClickActionButton);
});

function onClickActionButton() {
	var action = $(this).attr("data-action");
	console.log(action);
	if ((action+"").match(/^s\-/)) {
		$("#room").removeClass("s-front");
		$("#room").removeClass("s-back");
		$("#room").removeClass("s-top");
		$("#room").removeClass("s-bottom");
		$("#room").removeClass("s-right");
		$("#room").removeClass("s-left");
		$("#room").addClass(action);
	}
}
