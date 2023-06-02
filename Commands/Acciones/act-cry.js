const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("act-cry").setDescription("🎭 Llora"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/RDkdaZnAL8YAAAAC/furry-sad.gif",
      "https://media.tenor.com/ZhqTExCaIEEAAAAC/furry-cry.gif",
      "https://media.tenor.com/kJoX6fgmzBYAAAAd/furry-furryfandom.gif",
      "https://media0.giphy.com/media/QtkdHI6aSqwKR7f6sY/200w.gif?cid=82a1493b0h340jgx8mdputhpxakfuruqdnquzv7ogfzdo3iz&rid=200w.gif&ct=g",
      "https://media.tenor.com/d8-ubXwf4m0AAAAC/aimkid-furry.gif",
    ];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** está llorando`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
