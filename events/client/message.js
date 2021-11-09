const { Collection } = require('discord.js')
const { prefix } = require('../../config')
const wait = require('util').promisify(setTimeout);
module.exports = (client, message) => {
    if(message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return;
    if(!message.content.startsWith(`${prefix}`)) return

    if (command.help.args && !args.length) {
        return message.channel.send({
            embed: {
                color: "#121212",
                author: {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({ dynamic: true })
                },
                description: `You are not using the command correctly. \ nDo \`${prefix}help ${commandName}\` to see how to use it.`,
                footer: {
                    text: "Xzy.0Bot - MusicBot",
                    icon_url: client.user.displayAvatarURL()
                }
            }
        })
    }


    if (command.help.botPerms.length > 0) {
        if (!message.guild.me.permissionsIn(message.channel).has(command.help.botPerms)) {
            return message.channel.send(` ${message.author},I do not have the necessary permissions to do this command. \ nI need the following permissions: ${command.help.botPerms.map(perm => `\`${perm}\``).join(', ')}`)
        }
    }

    if (command.help.memberPerms.length > 0) {
        if (!message.member.permissionsIn(message.channel).has(command.help.memberPerms)) {
            return message.channel.send(`${message.author}, you do not have the necessary permissions to do this command!`);
        }
    }

    if (command.help.args && !args.length) {
        return client.commands.get('help').run(client, message, [command.help.name], data);
    }
    if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection())
    }


    const timeNow = Date.now()
    const tStamps = client.cooldowns.get(command.help.name)
    const cdAmount = (command.help.cooldown || 5) * 1000

    if (tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount

        if (timeNow < cdExpirationTime) {
            timeLeft = (cdExpirationTime - timeNow) / 1000
            return message.reply({
                embed: {
                    color: "#121212",
                    title: "You Are Using The Command Too Quickly",
                    description: `:hourglass: | Please Wait **${timeLeft.toFixed(2)} Second(s)** Before Using \`${prefix}${command.help.name}\` Again.`,
                    footer: {
                        text: "Xzy.0Bot - MusicBot",
                        icon_url: client.user.displayAvatarURL()
                    }
                }
            }).then(async (msg)=>{
                await wait(3000)
                msg.delete()
            })
        }
    }

    tStamps.set(message.author.id, timeNow)
    setTimeout(() => tStamps.delete(message.author.id), cdAmount)
    command.run(client, message, args)
}
