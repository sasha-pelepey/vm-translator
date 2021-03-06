module.exports = {
  ...require('./push-command-parser'),
  ...require('./pop-command-parser'),
  ...require('./arithmetic-command-parser'),
  ...require('./comment-command-parser'),
  ...require('./goto-parser'),
  ...require('./if-goto-parser'),
  ...require('./label-parser'),
  ...require('./call-command-parser'),
  ...require('./function-command-parser'),
  ...require('./return-command-parser')
}
