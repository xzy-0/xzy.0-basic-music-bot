const Discord = require('discord.js');

module.exports = (client, message, query, tracks, content, collector) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Search Invalid Response!')
	.setDescription(` - You must send a valid number between **1** and **${tracks.length}** !`)
	.setFooter('Xzy.0 MusicBot')
	.setColor("#121212")
	.setTimestamp();
    message.channel.send(embed);

};
