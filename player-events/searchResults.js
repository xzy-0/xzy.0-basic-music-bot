const Discord = require('discord.js');


module.exports = (client, message, query, tracks) => {
		message.channel.send({
       		embed: {
            color: 'BLUE',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Xzy.0 MusicBot' },
            color: "#121212",
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};
