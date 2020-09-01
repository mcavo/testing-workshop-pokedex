module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@interfaces': './src/interfaces',
          '@screens': './src/app/screens',
          '@navigationHelper': './src/app/components/AppNavigator/helper',
          '@assets': './src/app/assets',
          '@testsUtils': './tests/utils'
        }
      }
    ]
  ]
};
