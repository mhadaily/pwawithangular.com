const { getInstalledPathSync } = require('get-installed-path');

const loadersRegex = /postcss-loader/;

const findLoader = (useArray, loaderNamesRegex) => {
  const index = useArray.findIndex(loaderObject => {
    let loaderName = '';

    if (typeof loaderObject === 'string') {
      loaderName = loaderObject;
    } else if ('loader' in loaderObject && typeof loaderObject.loader === 'string') {
      loaderName = loaderObject.loader;
    }

    return loaderName.match(loaderNamesRegex) !== null;
  });

  return index === -1 ? null : index;
};

const insertLoader = (useArray, index, loader) => {
  if (index === null) {
    return;
  }
  useArray.splice(index, 0, loader);
};

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }, { plugins, ...userOptions }) => {
  const config = getConfig();
  const existingRules = config.module.rules;
  const path = getInstalledPathSync('remove-comments-loader', { local: true });
  console.log(path);

  const stripCommentsloader = {
    loader: `${path}/index.js`,
    options: {
      test: /\.(css)$/,
    },
  };

  existingRules.forEach(rule => {
    if (Array.isArray(rule.oneOf)) {
      rule.oneOf.forEach(rule => {
        if (Array.isArray(rule.use)) {
          const index = findLoader(rule.use, loadersRegex);
          insertLoader(rule.use, index, stripCommentsloader);
        }
      });
    }
  });

  actions.replaceWebpackConfig(config);
};
