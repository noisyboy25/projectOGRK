const ytdl = require('ytdl-core')
const streamOptions = { seek : 0, volume : 0.25}

exports.run = (options) => {
    const client = options.client;
    const message = options.message;
    const args = options.args;
    const link = args[0];
    
    if (link) {
        let voiceChannel = message.guild.channels.find('type', 'voice');
        
        voiceChannel.join().then(connection => {
            const broadcast = client.createVoiceBroadcast();
            const stream = ytdl(link, {filter: 'audioonly'});
            broadcast.playStream(stream, streamOptions);
            for (const connection of client.voiceConnections.values()) {
                connection.playBroadcast(broadcast);
            }
            stream.once('end', () => voiceChannel.leave());
        }).catch((e) => {
            message.reply("Bad link!");
            voiceChannel.leave();
        });
    }
}

/*
case cmd[0] === config.prefix + "voice":
      let voiceChannel = message.guild.channels.find("type", "voice");
      voiceChannel.join().then(connection => {
          const broadcast = client.createVoiceBroadcast();
          const stream = ytdl('https://www.youtube.com/watch?v=oorajmbSJUM', {filter: 'audioonly'})
      broadcast.playStream(stream, streamOptions);
      for (const connection of client.voiceConnections.values()) {
        connection.playBroadcast(broadcast);
      }
      });
      break;
case cmd[0] === config.prefix + "stop":
      message.guild.channels.find("type", "voice").leave();
      break;
*/