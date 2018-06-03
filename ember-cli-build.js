'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss'
    },

    babel: {
      presets: ['stage-0'],
      plugins: [
        'transform-class-properties',
        'transform-object-rest-spread',
      ],
    },

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    }
  })

  return app.toTree()
}
