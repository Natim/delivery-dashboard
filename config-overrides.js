const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
var webpack = require("webpack");

// eslint-disable-next-line
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', {libraryName: 'antd', style: true}],
    config,
  );

  config.plugins.push(new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: env.NODE_ENV,
        PUBLIC_URL: env.PUBLIC_URL,
        POLLBOT_SERVICE_URL: env.POLLBOT_SERVICE_URL || "https://pollbot.services.mozilla.com/v1"
      }
  }));

  config = rewireLess(config, env);

  return config;
};
