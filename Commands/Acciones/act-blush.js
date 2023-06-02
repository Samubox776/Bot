const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-bluhs")
    .setDescription("🎭 Sonrojate"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/tmC-bz8vf6cAAAAC/cutie-wolf.gif",
      "https://media.tenor.com/DkRz324vhxUAAAAC/dragon-blushing.gif",
      "https://media.tenor.com/heSO8HBklbEAAAAC/furry-cute.gif",
      "https://media.tenor.com/Qezj_1I6XFwAAAAM/griffon-blush.gif",
    ];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** está sonrojado/a`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
