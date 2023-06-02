const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mod-mute")
    .setDescription("🔨 Mutea la usuario que eligas")
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario a mutear`)
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName(`tiempo`)
        .setDescription(`Tiempo del mute en minutos`)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName(`razon`).setDescription(`Razón del mute`)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const user = interaction.options.getUser(`usuario`);
    const tiempo = interaction.options.getInteger(`tiempo`);
    const { guild } = interaction;

    let razon = interaction.options.getString(`razon`);
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!razon) razon = "No hay razón";
    if (user.id === interaction.user.id)
      return interaction.reply({
        content: `No puedes mutearte a ti mismo`,
        ephemeral: true,
      });
    if (user.id === client.user.id)
      return interaction.reply({
        content: `No puedes mutearme a mi`,
        ephemeral: true,
      });
    if (
      member.roles.highest.position >= interaction.member.roles.highest.postion
    )
      return interaction.reply({
        content: `No puedes mutear a alguien con un rol igual o superior al tuyo`,
        ephemeral: true,
      });
    if (!member.kickable)
      return interaction.reply({
        content: `No puedo mutear a alguien con un rol superior al mio`,
        ephemeral: true,
      });
    if (tiempo > 10000)
      return interaction.reply({
        content: `El tiempo no puede superar los 10.000 minutos`,
        ephemeral: true,
      });

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `${guild.name}`,
        iconURL: `${
          guild.iconURL({ dynamic: true }) ||
          "https://cdn.discordapp.com/attachments/1053464482095050803/1053464952607875072/PRywUXcqg0v5DD6s7C3LyQ.png"
        }`,
      })
      .setTitle(`${user.tag} ha sido muteado en el servidor`)
      .setColor(`#e4d83c`)
      .setTimestamp()
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
      .addFields(
        { name: `Razón`, value: `${razon}`, inline: true },
        { name: `Tiempo`, value: `${tiempo}`, inline: true }
      );

    await member.timeout(tiempo * 60 * 1000, razon).catch(console.error);

    interaction.reply({ embeds: [embed] });
  },
};
