const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', async m => {
    if(!m.author.bot) {m.reply(('s'+('h'.repeat(Math.floor(Math.random()*1000)))));}});
client.login(TOKEN);
