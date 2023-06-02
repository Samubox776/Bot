const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mod-clear")
    .setDescription(
      "🔨 Elimina la cantidad de mensajes que quieras (del 1 al 99)"
    )
    .addIntegerOption((option) =>
      option
        .setName(`cantidad`)
        .setDescription(`Cantidad de mensajes que quieres eliminar`)
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(99)
    )
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario del que quieres elimianr los mensajes`)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const cantidad = interaction.options.getInteger(`cantidad`);
    const user = interaction.options.getUser(`usuario`);

    const mensajes = await interaction.channel.messages.fetch();

    if (user) {
      let i = 0;
      let mensajeeliminar = [];
      mensajes.filter((message) => {
        if (message.author.id === user.id && cantidad > i) {
          mensajeeliminar.push(message);
          i++;
        }
      });

      interaction.channel.bulkDelete(mensajeeliminar, true).then((message) => {
        interaction.reply({
          content: `He eliminado ${message.size} de ${user.tag}`,
        });
      });
    } else {
      interaction.channel.bulkDelete(cantidad, true).then((message) => {
        interaction.reply({ content: `He eliminado ${message.size} mensajes` });
      });
    }
  },
};
