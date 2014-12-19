var feed = new Instafeed({
	get: 'tagged',
	tagName: 'unasketch',
	resolution: 'standard_resolution',
	limit: "300",
	clientId: 'b9bc28b31ab44a399a0d1399c09edd70',
	template: '<li class="sketch"><a href="{{link}}"><img src="{{image}}" /></a></li>'
});

document.querySelector('.menu-btn').addEventListener('click', function(){
  Array.prototype.forEach.call(document.querySelectorAll('.sidebar, body, .menu-btn'), function(e) { e.classList.toggle('menu-open') })
} , false);

feed.run();