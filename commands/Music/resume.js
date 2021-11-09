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
        .setDescription(`You're not in my voice channel !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed3 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`No music currently playing !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed4 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`The music is already playing !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    if (!message.member.voice.channel) return message.channel.send(embed1);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

    if (!client.player.getQueue(message)) return message.channel.send(embed3);

    if (!client.player.getQueue(message).paused) return message.channel.send(embed4);

    const success = client.player.resume(message);
    const embed5 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - Song ${client.player.getQueue(message).playing.title} resumed !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
    if (success) message.channel.send(embed5);

};


module.exports.help = {
    name: "resume",
    aliases: [],
    category: "Music",
    description: "Puts the current music back on",
    usage: "",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
