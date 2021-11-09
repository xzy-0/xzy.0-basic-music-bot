const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`You're not in a voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed2 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`You're not in my voice channel!`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed3 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`I'm not playing anything?`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    if (!message.member.voice.channel) return message.reply(embed1);
    if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply(embed2);

    const queue = client.player.getQueue(message);
    if (!queue) return message.reply(embed3);

    const current = queue.playing;

    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    const embed = new Discord.MessageEmbed()
        .setTitle("Now Playing!")
        .addField("📋 Title:", current.title, true)
        .addField("💬 Author:", current.author, true)
        .addField("👤 Queued by:", current.requestedBy.tag, true)
        .addField("📜 Views:", current.views, true)
        .addField(`⏲️ Duration:`, current.duration, true)
        .addField(`✅ Filters activated:`, filters.length, true)
        .addField(` Progress:`, client.player.createProgressBar(message, { timecodes: true, length: 15 }))
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
        .setColor("#121212");

    if (current.thumbnail) embed.setThumbnail(current.thumbnail);

    message.reply(embed);

};


module.exports.help = {
    name: "np",
    aliases: ["nowplaying"],
    category: "Music",
    description: "See music in progress",
    usage: "<query>",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
