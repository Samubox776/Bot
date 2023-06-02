const { loadCommands } = require("../");

module.exports = {
  name: "ready",
  once: true,
  execute() {
    console.log("El cliente ya esta listo");
  },
};
