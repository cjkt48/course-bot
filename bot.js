const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '☭';

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === prefix + 'приветствую') {

        message.reply('приветствую вас!');
    }

    if (message.content === prefix + 'любовь') {

        message.channel.send('▄██▄██▄░██░░░▄█▀▀█▄░█▌░░▐█░██▀▀▀░▄██▄██▄\n▀█████▀░██░░▐█▌░░▐█▌▐█░░█▌░██▀▀░░▀█████▀\n ░░▀█▀░░░██▄▄░▀█▄▄█▀░░▀██▀░░██▄▄▄░░░▀█');
    }

});

client.login(process.env.BOT_TOKEN);