const environment_variables =  require('./config/environment_variables')
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NAME': JSON.stringify(process.env.ENV),
        'process.env.VARIABLE': JSON.stringify(environment_variables[process.env.ENV]),
      })
    );

    return config;
  },
};
