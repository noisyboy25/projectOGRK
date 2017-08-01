exports.run = (client,message, args) => {
	client.user.setGame(args[0]);
}
