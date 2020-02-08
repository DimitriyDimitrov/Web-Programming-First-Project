// Scroll to Top button and Hover Effect //
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

	function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

  // Slider in first Section //
	$('.slider').bxSlider({
	    mode: 'horizontal'
	});

