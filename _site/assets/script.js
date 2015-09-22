$(function() {
	if($('.localnav').length) {
		$('h3').each(function() {
			var id = $(this).attr('id'),
				text = $(this).text();
			$a = '<a href="#'+id+'">'+text+'</a>';
			$li = $('<li class="list-group-item"></li>').append($a);
			$('.localnav').append($li);

			$('a[href="#'+id+'"]').on('click', function(e) {
				e.preventDefault();

				$('html, body').animate({
		        	scrollTop: $("#"+id).offset().top - $('#navbar').height()
		    	}, 1000);

				history.pushState(null, text, '#'+id);
			})
		})
	}

	console.log(location.href.indexOf('#'))

	if(location.href.indexOf('#') != -1) {
		var id = location.href.split('#');
		$('html, body').scrollTop($("#"+id[1]).offset().top - $('#navbar').height());
	}
})