module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
