const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server-icon")
    .setDescription("🖼️ Muestra el icono del servidor."),

  execute(interaction) {
    const icono = interaction.guild.iconURL({ size: 2048, dynamic: true });

    const embed2 = new EmbedBuilder()
      .setDescription("No hay icono en este servidor")
      .setColor(`#e4d83c`);

    if (!icono) return interaction.channel.send({ embeds: [embed2] });

    const embed = new EmbedBuilder()
      .setTitle(`Icono del servidor`)
      .setColor(`#e4d83c`)
      .setImage(icono);

    interaction.reply({ embeds: [embed] });
  },
};
