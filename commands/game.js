exports.run = (options) => {
    const client = options.client;
    const args = options.args;
    
	client.user.setGame(args[0]);
}
