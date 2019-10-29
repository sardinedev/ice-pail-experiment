const sass = require('sass');

module.exports = function(file) {
  // const env = process.env.NODE_ENV;
  // console.log(env);
  // if (env === 'prod' || env === 'production') {
  // }
  let { css } = sass.renderSync({ file, outputStyle: 'compressed' });

  return css.toString('utf8');
};
