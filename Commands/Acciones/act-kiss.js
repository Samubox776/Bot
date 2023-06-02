const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-kiss")
    .setDescription("🎭 Besa a un usuario")
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario que quieres besar`)
        .setRequired(true)
    ),

  async execute(interaction, message) {
    const array = [
      "https://media.tenor.com/zmePYEbT44AAAAAC/furry.gif",
      "https://i.imgur.com/ApV7HF5.gif",
      "https://media.tenor.com/De3QYQo2v-AAAAAC/cute-pokemon.gif",
      "https://pa1.narvii.com/7877/e5ed848662d2d5606750031ceb3533f06051679er1-450-666_00.gif",
    ];

    const user = interaction.options.getUser(`usuario`);

    const embed = new EmbedBuilder()
      .setDescription(
        `**${interaction.user.username}** ha besado a ${user.tag}`
      )
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
