const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-dance")
    .setDescription("🎭 Baila"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/yUzzCath6YUAAAAC/jxzy89-furry.gif",
      "https://media.tenor.com/BfH5FcdijcQAAAAi/furry-dance.gif",
      "https://media.tenor.com/2mW997E6na0AAAAM/takkin-dancing.gif",
    ];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** está bailando`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
