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

    if (message.content === prefix + 'цыц') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
        }
    }
    
    if(message.content === prefix + 'алло'){
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(false)
        }
    }

});

client.login(process.env.BOT_TOKEN);