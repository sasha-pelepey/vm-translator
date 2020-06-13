module.exports = {
  ...require('./push-command-factory'),
  ...require('./arithmetic-command-factory'),
  ...require('./comment-command-factory'),
  ...require('./push-command'),
  ...require('./pop-command'),
  ...require('./and-command'),
  ...require('./add-command'),
  ...require('./sub-command'),
  ...require('./eq-command'),
  ...require('./or-command'),
  ...require('./neg-command'),
  ...require('./gt-command'),
  ...require('./lt-command'),
  ...require('./not-command'),
  ...require('./comment-command'),
};
