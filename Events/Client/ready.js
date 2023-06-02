const { loadEvents, loadCommands } = require("../../Handlers/commandHandler");
const config = require("../../config.json");
const mongoose = require("mongoose");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log("[BOT] Cliente listo");

    await mongoose.connect(config.mongopass, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (mongoose.connect) {
      console.log("[MONGODB] Conectado correctamente");
    }

    loadCommands(client);
  },
};
