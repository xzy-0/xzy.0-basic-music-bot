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
        .setDescription(`Please enter the volume amount to set!`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    const embed5 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`Volume amount must be in range of \`0-100\`!`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();

    if (!message.member.voice.channel) return message.reply(embed1);
    if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply(embed2);

    const queue = client.player.getQueue(message);
    if (!queue) return message.reply(embed3);

    const amount = args[0];
    if (!amount || isNaN(amount)) return message.reply(embed4);
    if (parseInt(amount) < 0 || parseInt(amount) > 100) return message.reply(embed5);

    queue.player.setVolume(message, parseInt(amount));
    const embed6 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`✅ - Volume changed to **${queue.volume}%**!`)
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
    message.reply(embed6);
};


module.exports.help = {
    name: "volume",
    aliases: [],
    category: "Music",
    description: "To set music volume",
    usage: "",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
