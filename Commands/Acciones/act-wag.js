const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-wag")
    .setDescription("🎭 Menea tu colita"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/MAVCTKDxiXgAAAAC/furry-fox.gif",
      "https://media.tenor.com/Ca-MGdZwBE8AAAAM/wolf-furry-happy.gif",
      "https://media.tenor.com/FcQUcdZ04j8AAAAM/reddy-furry.gif",
    ];

    const embed = new EmbedBuilder()
      .setDescription(
        `**${interaction.user.username}** está meneando su colita`
      )
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
