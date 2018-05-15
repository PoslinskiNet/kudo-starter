'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss'
    },
    babel: {
      plugins: [
        'transform-class-properties',
        'transform-react-jsx',
        'transform-object-rest-spread'
      ]
    }
  });

  app.import({
    development: 'node_modules/react/umd/react.development.js',
    production: 'node_modules/react/umd/react.production.min.js'
  });

  app.import({
    development: 'node_modules/react-dom/umd/react-dom.development.js',
    production: 'node_modules/react-dom/umd/react-dom.production.min.js'
  });

  app.import('vendor/shims/react.js');
  app.import('vendor/shims/react-dom.js');

  return app.toTree();
};
