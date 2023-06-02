const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("🎱 Pregunta algo a la bola mágica")
    .addStringOption((option) =>
      option
        .setName(`pregunta`)
        .setDescription(`Escribe tu pregunta`)
        .setRequired(true)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const pregunta = interaction.options.getString(`pregunta`);

    let respuestas = [
      "Si",
      "No",
      "Tal vez",
      "Creo que no",
      "Creo que si",
      "Tenlo por seguro",
      "No lo tengas por seguro",
      "No creo",
      "Si creo",
      "No estes seguro/a de eso",
      "Esta 100% seguro/a de eso",
      "Intentalo",
      "Piensalo y di que si",
      "iensalo y di que no",
      "Te recomiendo que lo pienses bien",
      "Si, creo",
      "No, creo",
      "No lo pienses y hazlo",
      "Piensalo y hazlo",
      "Que te dijiera...",
      "No estes seguro/a de eso",
      "Mejor si",
      "Mejor no ",
      "Probablemente si",
      "Probablemente no",
      "Puedes confier en ello",
      "Por supuesto que si!",
      "Por supuesto que no!",
    ];

    const respuesta = Math.floor(Math.random() * respuestas.length);

    const embed = new EmbedBuilder()
      .setTitle("8ball 🎱")
      .setDescription(
        `Pregunta:\n**${pregunta}** \n\nRespuesta:\n**${respuesta}** `
      )
      .setColor(`#e4d83c`)
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
};
