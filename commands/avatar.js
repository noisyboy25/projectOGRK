exports.run = (options) => {
    const client = options.client;
    const message = options.message;
    
    let image = message.mentions.users.first()?
    message.mentions.members.first().user.avatarURL:
    message.author.avatarURL;

    console.log(image);
    if (image) message.channel.send(image);
    else message.reply("no avatar!");
}