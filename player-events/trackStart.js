const Discord = require('discord.js');

module.exports = (client, message, track) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Track Started!')
	.setDescription(` - Now playing ${track.title} into ${message.member.voice.channel.name} ...`)
	.setURL(track.url)
	.setThumbnail(track.thumbnail)
	.setFooter('Xzy.0 MusicBot')
	.setColor("#121212")
	.setTimestamp();
    message.channel.send(embed);

};
