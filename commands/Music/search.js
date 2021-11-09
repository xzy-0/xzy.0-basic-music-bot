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
        .setDescription(`Please indicate the title of a song !`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    if (!message.member.voice.channel) return message.channel.send(embed1);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

    if (!args[0]) return message.channel.send(embed3);

    client.player.play(message, args.join(" "));
};


module.exports.help = {
    name: "search",
    aliases: [],
    category: "Music",
    description: "Searchs for music",
    usage: "",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
