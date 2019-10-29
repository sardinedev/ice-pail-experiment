const sass = require('sass');

module.exports = function(file) {
  let { css } = sass.renderSync({ file });

  return css.toString('utf8');
};
