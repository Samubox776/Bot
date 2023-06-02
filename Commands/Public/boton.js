const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("boton").setDescription("no se"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`test`)
        .setLabel(`Menú`)
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId(`test2`)
        .setLabel(`Pagina 1`)
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId(`test3`)
        .setLabel(`Pagina 2`)
        .setStyle(ButtonStyle.Success)
    );

    const embed = new EmbedBuilder()
      .setTitle(`Menú`)
      .setDescription(`Menú de nose`);

    const embed1 = new EmbedBuilder()
      .setTitle(`Menú 2`)
      .setDescription(`aun no se`);

    const embed2 = new EmbedBuilder()
      .setTitle(`Menú 3`)
      .setDescription(`no, aun no se`);

    await interaction.reply({ embeds: [embed], components: [button] });

    const collector = interaction.channel.createMessageComponentCollector();

    collector.on(`collect`, async (i) => {
      if (i.customId === `test`) {
        if (i.user.id !== interaction.user.id) {
          return await i.reply({
            content: `Solo la persona que ejecuto este comando puede usar los botones`,
            ephemeral: true,
          });
        }
        await i.update({ embeds: [embed], components: [button] });
      }

      if (i.customId === `test2`) {
        if (i.user.id !== interaction.user.id) {
          return await i.reply({
            content: `Solo la persona que ejecuto este comando puede usar los botones`,
            ephemeral: true,
          });
        }
        await i.update({ embeds: [embed1], components: [button] });
      }

      if (i.customId === `test3`) {
        if (i.user.id !== interaction.user.id) {
          return await i.reply({
            content: `Solo la persona que ejecuto este comando puede usar los botones`,
            ephemeral: true,
          });
        }
        await i.update({ embeds: [embed2], components: [button] });
      }
    });
  },
};
