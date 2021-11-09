const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const embednoinvoice = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription(`You're not in a voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
    if (!message.member.voice.channel) return message.channel.send(embednoinvoice);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    await message.member.voice.channel.leave()

    const left = new Discord.MessageEmbed()
        .setTitle('Left The Voice Channel')
        .setDescription(`✅ **Successfully left the voice channel!**`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
    return message.channel.send(left)

};


module.exports.help = {
    name: "Leave",
    aliases: [],
    category: "Music",
    description: "Leave the voice channel",
    usage: "[]",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
