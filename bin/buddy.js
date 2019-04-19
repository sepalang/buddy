#!/usr/bin/env node
console.log("Buddy!")
const argv = process.argv.slice(2)

switch(argv.splice(0,1)[0]){
  case "init":
    require("../src/init-cli")(argv);
    break;
}
 