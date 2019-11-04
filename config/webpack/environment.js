const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    Bootstrap: 'bootstrap/dist/js/bootstrap.min.js',
		jQuery: 'jquery/src/jquery',
		Bloodhound: 'typeahead.js/dist/typeahead.bundle.js' // полный путь к вашей библиотеке
  })
)

module.exports = environment
