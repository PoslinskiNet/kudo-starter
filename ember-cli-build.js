'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [
        'transform-class-properties',
        'transform-react-jsx'
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

  return app.toTree();
};
