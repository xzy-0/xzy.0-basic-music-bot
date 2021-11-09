const Discord = require('discord.js');

module.exports = (client, message, queue) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Xzy.0Bot Disconnected!')
	.setDescription(` - Music stopped as i have been disconnected from the channel !`)
	.setFooter('Xzy.0 MusicBot')
	.setColor("#121212")
	.setTimestamp();
    message.channel.send(embed);

};
