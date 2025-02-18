import {  REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const commands = [{
    name: "test",
    description: "Replies with hey"
}]


const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

( async() => {
    try {
        console.log("this is to register slash commands")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {  body : commands}
        )

        console.log(" slash commadn registered")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
})();