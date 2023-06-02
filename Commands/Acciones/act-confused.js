const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("act-confused")
    .setDescription("🎭 ¿Estas confundido/a?"),

  async execute(interaction) {
    const array = [
      "https://media.tenor.com/OhnBwux4KEYAAAAC/furry-confusion.gif",
      "https://media.tenor.com/iOUsjL2-0j0AAAAC/furry-confused.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5srusKM0zdErw-WydYvjaGsBMo3C7sYACcsHAwy1kqX8yQgq0O3LJr7mBRjI0dsnlTM&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cJXyWG13lLMCAik3M_QF3R45iFRbvut46GGLihykNVal2ju7GRNmQLdIOTk88NqzL2E&usqp=CAU",
    ];

    const embed = new EmbedBuilder()
      .setDescription(`**${interaction.user.username}** está confundido/a`)
      .setColor(`#e4d83c`)
      .setImage(`${array[Math.floor(Math.random() * array.length)]}`);

    interaction.reply({ embeds: [embed] });
  },
};
