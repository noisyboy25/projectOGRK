const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const log = (message) => {
    var date = new Date();
    var time = `${date.getHours()}:${date.getMinutes()}`
    console.log(`${time} [${message.guild.name}][${message.channel.name}] ${message.author.tag}: ${message.content}`);
}

client.on('ready', () => {
    console.log("<ready>")
});

client.on('message', (message) => {
    if (message.author.bot || !message.content.startsWith(config.prefix)) return;

    const args = message.content.split(" ");
    const command = args.shift().slice(config.prefix.length).toLocaleLowerCase();

    log(message);

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args)
        console.log(`<${command}>`);
    } catch (error) {
        console.error(error);
        message.reply("No such command!");
    }
});

client.login(config.token);