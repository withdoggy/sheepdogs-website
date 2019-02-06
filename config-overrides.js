const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: {
    '@primary-color': '#CDBD98',
    '@secondary-color': '#9D8B65',
    '@text-color': '#231C10',
    '@text-color-secondary': '#6E5247',
    '@heading-color': '#5B5757',
    '@layout-header-background': '#DEB462',
    '@btn-primary-bg': '#41413A',
    '@link-color': '#00000'
   },
 }),
);