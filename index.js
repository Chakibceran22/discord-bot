require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === "!info") {
    // Create an embedded message
    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("Bot Info")
      .setDescription("Click the button below to learn more!")
      .setThumbnail(client.user.displayAvatarURL());

    // Create a button
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("more_info")
        .setLabel("More Info")
        .setStyle(ButtonStyle.Primary)
    );

    await message.reply({ embeds: [embed], components: [row] });
  }
});

// Handle button clicks
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "more_info") {
    await interaction.reply("This bot was made using **Node.js** and **Discord.js**! 🚀");
  }
});

client.login(process.env.TOKEN);
