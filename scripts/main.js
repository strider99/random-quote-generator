$(document).ready(function () {
	var quote = '';
	var author = '';
	function getQuote () {
		$.ajax({
			headers : {
				'X-Mashape-Key': 'irwLbOHG2fmshDcn5HEVj8j9hJ2vp1M8JOWjsn3RuZ4cjbnI9t',
				Accept: 'application/json'

			},
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
			success : function(response) {
				
				quote = response.quote;
				author = response.author;
				// console.log(quote + ' and the author is ' + author);
				$('#quote').html(quote);
				$('#quote-author').html(author);

			},
			error : function(err){
				console.log("There was an error + ", err);
			}
		});		
		
	}

	getQuote();
	$('#newQuote').on('click',getQuote);

});