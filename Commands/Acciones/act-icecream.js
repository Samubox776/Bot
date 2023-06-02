const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-icecream")
    .setDescription("🎭 Come helado"),

  async execute(interaction) {
    const array = ["https://media.tenor.com/_M7n8jo_cNQAAAAC/furr.gif"];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** está comiendo helado`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
