const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-angry")
    .setDescription("🎭 Enojate"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/PMmXXdJjRYQAAAAC/ghosttwf-angy.gif",
      "https://media.tenor.com/N8EtjGRm_90AAAAC/vyx-furry.gif",
      "https://media.tenor.com/ae-83ZUJ5vAAAAAC/furry-furry-angry.gif",
      "https://media.tenor.com/LknFqxijQCUAAAAC/upset-ugh.gif",
    ];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** está enojado/a`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
