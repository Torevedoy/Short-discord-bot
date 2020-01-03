const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', async msg => {
    if(!msg.author.bot) {msg.reply(('s'+('h'.repeat(Math.floor(Math.random()*100)))));}});
client.login(TOKEN);
