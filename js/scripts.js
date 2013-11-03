var feed = new Instafeed({
	get: 'tagged',
	tagName: 'unasketch',
	resolution: 'standard_resolution',
	clientId: 'b9bc28b31ab44a399a0d1399c09edd70',
	template: '<li class="sketch"><a href="{{link}}"><img src="{{image}}" /></a></li>'
});
feed.run();

$('.menu-btn').on('click', function(){
	console.log('menu clicked');
	$('.sidebar, body, .menu-btn').toggleClass('menu-open');
});