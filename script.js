function randomColorValue() {
  return Math.floor((Math.random() * 255));
}

function loadNewBackgroundAndTextColor() {
  var bred = randomColorValue();
  var bgreen = randomColorValue();
  var bblue = randomColorValue();
  var tred = 255 - bred;
  var tgreen = 255 - bgreen;
  var tblue = 255 - bblue;
  $("body").css("background-color", "rgba(" + bred + ", " + bgreen + ", " + bblue + ", " + ".9" + ")");
  $("#area").css("border", "3px solid black");
}

function loadNewQuote() {
	$.ajax({
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		success: function(data) {
			var quote = data[0].content;
			var author = data[0].title;
      
      $('#quote').addClass('animated fadeIn');
	    $('#quote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		    $('#quote').removeClass('animated fadeIn');
      });
      $('#author').addClass('animated fadeIn');
	    $('#author').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		    $('#author').removeClass('animated fadeIn');
	    });
      
			$('#quote').html(quote);
			$('#author').html('- '+author);
		},
		error: function() {
			$('#quote').html("error getting quote");
			$('#author').html("hey don't blame me");
		},
		cache: false
	});
}

$(document).ready(function() {
	loadNewQuote();
	loadNewBackgroundAndTextColor();
	$("#quoteButton").on('click', function() {
		loadNewQuote();
		loadNewBackgroundAndTextColor();
	});
	$("#infoButton").on('click', function() {
		$('#quote').html("Created by <a href=\"https://justinbkoo.github.io/\">Justin Koo</a> using <a href=\"https://quotesondesign.com/api-v4-0/\"><em>Quotes on Design</em></a> API");
		$('#author').html("Copyright &copy 2017 Justin Koo");
	});	
});