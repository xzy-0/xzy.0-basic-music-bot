const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(` You're not in a voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed2 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(` You're not in my voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed3 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(` No music currently playing !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed4 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - The current music has just been **skipped** !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    if (!message.member.voice.channel) return message.channel.send(embed1);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

    if (!client.player.getQueue(message)) return message.channel.send(embed3);

    const success = client.player.skip(message);

    if (success) message.channel.send(embed4);
};


module.exports.help = {
    name: "skip",
    aliases: [],
    category: "Music",
    description: "To skip current song",
    usage: "",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
