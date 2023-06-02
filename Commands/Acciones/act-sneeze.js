const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-sneeze")
    .setDescription("🎭 Estornuda"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/Ud_iHRSqaK0AAAAC/furry-sneeze.gif",
      "https://d.furaffinity.net/art/jibbinkodiyak/1493075545/1493075545.jibbinkodiyak_jib_sneezey.gif",
    ];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** ha estornudado`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
