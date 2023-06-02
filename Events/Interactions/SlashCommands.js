const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "El comando esta desactualizado",
        ephermal: true,
      });

    if (command.developer && interaction.user.id !== "1007718032417751081")
      return interaction.reply({
        content: "Este comando solo lo puede ejecutar mi dueño",
        ephermal: true,
      });

    command.execute(interaction, client);
  },
};
