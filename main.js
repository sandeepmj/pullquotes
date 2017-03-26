      $(window).scroll(function () {
      	var windowTarget = $('#yoga').offset().top,
      		windowOuterHeight = $('#yoga').outerHeight(),
      		windowHeight = $(window).height(),
      		windowScrollTop = $(this).scrollTop();
      	console.log("The position of scroll is: ", (windowTarget - windowHeight), windowScrollTop);
      	if (windowScrollTop > (windowTarget + windowOuterHeight - windowHeight)) {
      		$('#yoga').fadeIn(3500);
      	}
      });
