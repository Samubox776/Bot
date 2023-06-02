const { SlashCommandBuilder } = require("discord.js");
const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mod-add-role")
    .setDescription("🔨 Añadele un rol a cualquier usuario")
    .addRoleOption((option) =>
      option.setName("rol").setDescription("Rol a dar").setRequired(true)
    )
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("Usuario al que se le otorgara")
        .setRequired(true)
    ),
  async execute(interaction, client, Discord) {
    const permisos = interaction.member.permissions.has("MANAGE_ROLES");
    if (!permisos)
      return interaction.reply({
        content: "No tienes permisos suficientes para ejecutar este comando",
      });
    const Role = interaction.options.getRole("rol");
    const usuario = interaction.options.getMember("usuario");
    usuario.roles.add(Role);
    const embed = new EmbedBuilder()
      .setDescription("Al parecer ya tienes este rol")
      .setColor("#e4d83c");
    if (usuario.roles.cache.has(Role.id)) {
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    const embedverify = new EmbedBuilder()

      .setDescription("He dado el rol correctamente")

      .setColor("#e4d83c")

      .setTimestamp();

    interaction.reply({ embeds: [embedverify], ephemeral: true });
  },
};
