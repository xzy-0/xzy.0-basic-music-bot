const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription(`You're not in a voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed2 = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription(`You are not in the same voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed3 = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription(`No music currently playing !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed4 = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription(`There is only one song in the queue.`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed5 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - The queue has just been **removed** !`)
        .setFooter(client.user.username + ' Music System')
        .setColor('GREEN')
        .setTimestamp();

    if (!message.member.voice.channel) return message.channel.send(embed);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

    if (!client.player.getQueue(message)) return message.channel.send(embed3);

    if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(embed4);

    client.player.clearQueue(message);

    message.channel.send(embed5);

};


module.exports.help = {
    name: "clear-queue",
    aliases: [],
    category: "Music",
    description: "Deletes the next music in queue",
    usage: "[]",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
