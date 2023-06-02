const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user-info")
    .setDescription("Mira la información de un usuario")
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario el que quieres ver su información`)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const user = interaction.options.getUser(`usuario`) || interaction.user;
    const miembro = await interaction.guild.members.fetch(user.id);
    let member = await user.fetch({ force: true });

    const embed = new EmbedBuilder()
      .setColor(`#e4d83c`)
      .setAuthor({
        name: `${user.username}`,
        iconURL: `${user.displayAvatarURL({ dynamic: true })}`,
      })
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
      .setImage(user.bannerURL({ size: 512 }))
      .setTitle(`Esta el la informacion de ${user.username}`)
      .addFields(
        { name: `Información general`, value: `**ID:** ${user.id}` },
        {
          name: `Cuenta Creada`,
          value: `<t:${parseInt(user.createdTimestamp / 1000)}:R>`,
          inline: true,
        },
        {
          name: `Se unio al servidor`,
          value: `<t:${parseInt(miembro.joinedAt / 1000)}>`,
          inline: true,
        },
        {
          name: `Banner del usuario`,
          value: user.bannerURL() ? "** **" : "Este usuario no tiene banner",
        }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
