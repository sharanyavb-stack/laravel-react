const path = require('path');

module.exports = {
//   entry: './src/index.js',  // Entry point for your React app
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   },
devServer: {
    compress: false,  // Disable WebSocket compression
    client: {
      webSocketURL: 'ws://localhost:3000/ws', // Ensure the WebSocket URL is correct
    },
    // Optionally, disable hot module replacement (HMR) if you're facing HMR-related issues
    hot: false,
    liveReload: true,
  },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
};
