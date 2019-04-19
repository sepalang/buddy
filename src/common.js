const { join } = require("path");

module.exports = {
  cwd:process.cwd(),
  initTemplatePath:join(__dirname,"../templates/init-template")
}