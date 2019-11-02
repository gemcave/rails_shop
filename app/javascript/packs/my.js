$.ajaxSetup({
	headers: {
			'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
	}
});

/* Search */
var products = new Bloodhound({
	datumTokenizer: Bloodhound.tokenizers.whitespace,
	queryTokenizer: Bloodhound.tokenizers.whitespace,
	remote: {
			wildcard: '%QUERY',
			url: '/search?query=%QUERY'
	}

});

products.initialize();

$("#typeahead").typeahead({
	// hint: false,
	highlight: true
},{
	name: 'products',
	display: 'title',
	limit: 10,
	source: products
});

$('#typeahead').bind('typeahead:select', function(ev, suggestion) {
	// console.log(suggestion);
	window.location = '/product/' + encodeURIComponent(suggestion.id);
});