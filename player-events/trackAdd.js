const Discord = require('discord.js');


module.exports = (client, message, queue, track) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Track Added!')
	.setDescription(` - ${track.title} has been added to the queue !`)
	.setFooter('Xzy.0 MusicBot')
	.setColor("#121212")
	.setTimestamp();
    message.channel.send(embed);

};
