const { cwd, initTemplatePath } = require("./common");

module.exports = (...argv)=>{
  console.log("cwd", cwd, initTemplatePath);
}