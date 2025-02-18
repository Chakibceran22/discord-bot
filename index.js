import { Client, IntentsBitField, REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
const client = new Client({
  intents:[
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})


client.on('ready',(cl) => {
  console.log(`Logged in as ${cl.user.username}`)
})
client.on("messageCreate", async(message) => {
  if(message.author.bot) return;
  if ( message.content.toLowerCase().match(/^\bh\w*/i)) {
    await message.reply('pong')
  }
})

client.on('interactionCreate', async(interaction) => {
    if( !interaction.isChatInputCommand()) {
      return
    }
    if( interaction.commandName === 'test'){
      interaction.reply("hey how are you doing today")
    }
})
client.login(process.env.TOKEN)

