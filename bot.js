const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '☭';

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

    if (message.content === prefix + 'приветствую') {

        message.reply('приветствую вас!');
    }

});

client.login(process.env.BOT_TOKEN);