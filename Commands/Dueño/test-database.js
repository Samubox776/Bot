const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");

const testing = require("../../Schemas/test");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("test-database")
    .setDescription("Testea mi database"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    testing.findOne({ GuildID: interaction.guild.id }).then((data) => {
      if (!data) {
        testing.create({
          GuildID: interaction.guild.id,
          UserID: interaction.user.id,
        });
      } else {
        console.log(data);
      }
    });
  },
};
