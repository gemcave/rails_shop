const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
		jQuery: 'jquery/src/jquery',
		Typeahead: 'typeahead.js/dist/typeahead.js', // полный путь к вашей библиотеке
		Bloodhound: 'typeahead.js/dist/bloodhound.js' // полный путь к вашей библиотеке
  })
)

module.exports = environment
