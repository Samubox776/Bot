const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Mira tu avatar")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("👤 Mira el avatar de otro usuario")
        .setRequired(false)
    ),

  execute(interaction) {
    const { options } = interaction;
    const usuario = interaction.options.getUser("usuario") || interaction.user;
    const icon = usuario.displayAvatarURL({ dynamic: true, size: 1024 });
    const tag = usuario.tag;

    const embed = new EmbedBuilder()
      .setDescription(`Avatar de ${usuario.tag}`)
      .setImage(icon)
      .setColor(`#e4d83c`);
    interaction.reply({ embeds: [embed] });
  },
};
