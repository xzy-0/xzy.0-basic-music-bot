const Discord = require('discord.js');

module.exports = (client, message, queue) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Queue End!')
	.setDescription(` - Music stopped as there is no more music in the queue !`)
	.setFooter('Xzy.0 MusicBot')
	.setColor("#121212")
	.setTimestamp();
    message.channel.send(embed);

};
