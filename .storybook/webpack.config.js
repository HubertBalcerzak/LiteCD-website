const path = require('path');

module.exports = async ({ config }) => {
  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../')
  });
  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '$/assets': path.resolve(__dirname, '../src/assets'),
    '$/hooks': path.resolve(__dirname, '../src/hooks'),
    '$/types': path.resolve(__dirname, '../@types'),
  }

  return config;
};
