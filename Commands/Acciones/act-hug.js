const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-hug")
    .setDescription("🎭 Abraza a un usuario")
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario que quieres abrazar`)
        .setRequired(true)
    ),

  async execute(interaction, message) {
    const array = [
      "https://media.tenor.com/tFjx-XJaNOAAAAAd/furry.gif",
      "https://media.tenor.com/OrJiTqPixtYAAAAC/hugs-love.gif",
      "https://media.tenor.com/hZEYi1oLHPsAAAAC/cute-animals-in-love.gif",
    ];

    const user = interaction.options.getUser(`usuario`);

    const embed = new EmbedBuilder()
      .setDescription(
        `**${interaction.user.username}** ha abrazado a ${user.tag}`
      )
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
