$( function() {
	var bulbs = $(".js-lightbulb");

	bulbs.on('click', function(event) {
		bulbs.removeClass('bulb-on');
		$(event.currentTarget).addClass('bulb-on');
	});
	
})