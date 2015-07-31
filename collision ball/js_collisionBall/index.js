var container = $('.container'),
	number = 40,
	center = 190,
	unit = 9.7,
	animationArea = 380,
	duration = 300,
	colors = ['#e35bd5', '#5bd5e3', '#e3c35b', '#e35b5b'];

	// Append circles to the DOM
	for(var i = 0; i < number; i++) {
		container.append('<div class="circle"></div>');
	}
	var circles = $('.circle');

	// Animate the circles
	function animate() {
		circles
			// Top-left to bottom
			.velocity({
				translateY: function(i) {
					return (i * unit);
				},
				translateX: 0,
			}, {duration: duration, easing: 'easeOutElastic', delay: 50})

			.velocity({
				translateY: animationArea,
				translateX: 0,
				borderColor: colors[0],
				backgroundColor: colors[0]
			}, {duration: duration, easing: 'easeOutElastic'})

			// Bottom-left to right
			.velocity({
				translateY: animationArea,
				translateX: function(i) {
					return (i * unit);
				},
			}, {duration: duration, easing: 'easeOutElastic'})

			.velocity({
				translateY: animationArea,
				translateX: animationArea,
				borderColor: colors[1],
				backgroundColor: colors[1]
			}, {duration: duration, easing: 'easeOutElastic'})

			// Bottom-right to top
			.velocity({
				translateY: function(i) {
					return unit * number - Math.round(i * unit);
				},
				translateX: animationArea,
			}, {duration: duration, easing: 'easeOutElastic'})

			.velocity({
				translateY: 0,
				translateX: animationArea,
				borderColor: colors[2],
				backgroundColor: colors[2]
			}, {duration: duration, easing: 'easeOutElastic'})

			// Top-right to left
			.velocity({
				translateY: 0,
				translateX: function(i) {
					return unit * number - Math.round(i * unit);
				}
			}, {duration: duration, easing: 'easeOutElastic'})

			.velocity({
				translateY: 0,
				translateX: 0,
				borderColor: colors[3],
				backgroundColor: colors[3]
			}, {duration: duration, easing: 'easeOutElastic'});

	}

animate();

setInterval(function(){
	animate();
}, duration * 8);