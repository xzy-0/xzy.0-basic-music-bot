const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const embednoinvoice = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription(`You're not in a voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
    const embednosong = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription(`No songs currently playing !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
    const embedshuffle = new Discord.MessageEmbed()
        .setTitle('Shuffled!')
        .setDescription(`✅ - Queue shuffled **${client.player.getQueue(message).tracks.length}** song(s) !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
    if (!message.member.voice.channel) return message.channel.send(embednoinvoice);

    if (!client.player.getQueue(message)) return message.channel.send(embednosong);

    client.player.shuffle(message);

    return message.channel.send(embedshuffle);
};


module.exports.help = {
    name: "shuffle",
    aliases: [],
    category: "Music",
    description: "Mix The queue",
    usage: "",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
