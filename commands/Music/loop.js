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
        .setDescription(`No music currently playing !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed3 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - Repeat mode **disabled** !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed4 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - Repeat mode **enabled** the whole queue will be repeated endlessly !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed5 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - Repeat mode **disabled** !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed6 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - Repeat mode **enabled** the current music will be repeated endlessly !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();


    if (!message.member.voice.channel) return message.channel.send(embed1);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(embed2);

    if (args.join(" ").toLowerCase() === 'queue') {
        if (client.player.getQueue(message).loopMode) {
            client.player.setLoopMode(message, false);
            return message.channel.send(embed3);
        } else {
            client.player.setLoopMode(message, true);
            return message.channel.send(embed4);
        };
    } else {
        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(embed5);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(embed6);
        };
    }

};


module.exports.help = {
    name: "loop",
    aliases: [],
    category: "Music",
    description: "To enable or disable the repeat function",
    usage: "[]",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
