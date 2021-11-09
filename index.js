const { CLient, Colection} = require('discord.js');
const { token, prefix } = require(./config);
const { readdirSync } = require('fs')
const fs = require('fs')
const player { Player } = require('discord-player')
const client = new Client
client commands = new Collection();
const layer = new Player(client, {
  enableLive: true,
  autoSelfDeaf: true,
  leaveOnEnd: true,
  leaveOnCooldown: 4000,
  leaveOnEmpty: true,
  LeaveOnStop: false
});

client.player = player
const loadCommands = (dir = './commands/') => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'))
        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`)
            client.commands.set(getFileName.help.name, getFileName)
        }
    });
}
fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`), eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});
const loadEvents = (dir = './events/') => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'))
        for (const event of events) {
            const evt = require(`${dir}/${dirs}/${event}`)
            const evtName = event.split(".")[0]
            client.on(evtName, evt.bind(null, client))
        }
    });
}
loadEvents()
loadCommands()



client.login(token)
