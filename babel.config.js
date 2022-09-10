module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/utils': './src/utils',
          '~/assets': './src/assets',
          '~/services': './src/services',
          '~/stores': './src/stores',
          '~/actions': './src/actions',
          '~/hooks': './src/hooks',
        },
      },
    ],
    ['babel-plugin-root-import', { rootPathSuffix: 'src' }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
