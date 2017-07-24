const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

client.on('ready', () => {
    console.log("<ready>")
});

client.on('message', (message) => {
    if (message.author.bot || !message.content.startsWith(config.prefix)) return;
    if (message.content.startsWith(config.prefix+"ping")) message.reply("pong");
});

client.login(config.token);