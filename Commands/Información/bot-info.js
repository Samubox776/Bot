const {
  EmbedBuilder,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  Client,
  ChannelType,
  UserFlags,
  PermissionFlagsBits,
  version,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bot-info")
    .setDescription("Mira la información de Tonyx")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    await client.application.fetch();
    const formatter = new Intl.ListFormat("en-GB", {
      style: "long",
      type: "conjunction",
    });
    const getChannelTypeSize = (type) =>
      client.channels.cache.filter((channel) => type.includes(channel.type))
        .size;
    const embed = new EmbedBuilder()
      .setTitle(`Estadísticas de ${client.user.username}`)
      .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
      .addFields(
        {
          name: "❱ DESCRIPCIÓN:",
          value: `${client.application.description || "Nada"}`,
        },
        {
          name: "❱ **INFORMACIÓN GENERAL**",
          value: [
            `👩🏻‍🔧 Nombre: **${client.user.tag}**`,
            `📆 Creado: **<t:${parseInt(
              client.user.createdTimestamp / 1000
            )}:R>**`,
            `👑 Dueño: **${
              client.application.owner
                ? `<@${client.application.owner.id}> (${client.application.owner.tag})`
                : "Nadie"
            }**`,
            `🔗 Comandos: **${client.commands.size}**`,
          ].join("\n"),
        },
        {
          name: "❱ **ESTADÍSTICAS DEL SISTEMA**",
          value: [
            `⏰ Tiempo Activo: **<t:${parseInt(
              client.readyTimestamp / 1000
            )}:R>**`,
            `📡 Latencia: **${client.ws.ping}ms**`,
            `👩🏻‍🔧 Versión Node.js: **${process.version}**`,
            `🛠 Versión Discord.js: **${version}**`,
          ].join("\n"),
          inline: true,
        },
        {
          name: "❱ **ESTADÍSTICAS DE SERVIDORES**",
          value: [
            `👨‍👩‍👧‍👦 Usuarios: **${client.users.cache.size}**`,
            `😏 Emojis: **${client.emojis.cache.size}**`,
            `💬 Canales de texto: **${getChannelTypeSize([
              ChannelType.GuildText,
              ChannelType.GuildForum,
              ChannelType.GuildNews,
            ])}**`,
            `🔊 Canales de Voz: **${getChannelTypeSize([
              ChannelType.GuildVoice,
              ChannelType.GuildStageVoice,
            ])}**`,
          ].join("\n"),
          inline: false,
        }
      )
      .setColor("#e4d83c");
    interaction.channel.send({ embeds: [embed] });
  },
};
