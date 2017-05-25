function loadNewQuote() {
	$.ajax({
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		success: function(data) {
			var quote = data[0].content;
			var author = data[0].title;
      
			$('#quote').html(quote);
			$('#author').html('-'+author);
		},
		error: function() {
			$('#quote').html("error getting quote");
		},
		cache: false
	});
}

$(document).ready(function() {
  $(".container-fluid").delegate("#quoteButton",'click', function()   {
	loadNewQuote();
  });
	loadNewQuote();
});