exports.run = (options) => {
    const client = options.client;
    
    client.voiceConnections.first().channel.leave();
}