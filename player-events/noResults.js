const Discord = require('discord.js');

module.exports = (client, message, query) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('No Results!')
	.setDescription(` - No results found on YouTube for ${query} !`)
	.setFooter('Xzy.0 MusicBot')
	.setColor("#121212")
	.setTimestamp();
    message.channel.send(embed);

};
