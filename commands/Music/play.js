const Discord = require('discord.js');
module.exports.run = async (client, message, args) =>{
    const embed1 = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription('You are not in a voice channel!')
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
   const embed2 = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription('You are not in my voice channel!')
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
   const embed3 = new Discord.MessageEmbed()
        .setTitle('A Error Happened!')
        .setDescription('Please include a search query!')
        .setFooter('Xzy.0 MusicBot')
        .setColor("#121212")
        .setTimestamp();
  if (!message.member.voice.channel) return message.reply(embed1);
  if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply(embed2);
  const query = args.join(" ");
    if (!query) return message.reply(embed3);

    await client.player.play(message, query, true);
};

module.exports.help = {
    name: "play",
    aliases: [],
    category: "Music",
    description: "Plays music in a voice channel",
    usage: "<name>",
    cooldown: -1,
    memberPerms: [],
    botPerms: [],
    args: false
}
