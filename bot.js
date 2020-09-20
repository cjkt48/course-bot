const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    switch (command) {
        case prefix + 'help':
        case prefix + 'помощь':
            message.reply('Я русский бот если что, так что разговаривай со мной по-русски\n'+
            '1) !привет -> здороваюсь в ответ'+
            '2) !любовь -> покажу свою любовь'+
            '3) !цыц -> помогает всех заткнуть))))'+
            '4) !алло -> разрешает снова болтать');
            break;
        case prefix + 'привет':
            message.reply('приветствую вас!');
            break;
        case prefix + 'любовь':
            message.channel.send('▄██▄██▄░██░░░▄█▀▀█▄░█▌░░▐█░██▀▀▀░▄██▄██▄\n▀█████▀░██░░▐█▌░░▐█▌▐█░░█▌░██▀▀░░▀█████▀\n ░░▀█▀░░░██▄▄░▀█▄▄█▀░░▀██▀░░██▄▄▄░░░▀█');
            break;
        case prefix + 'цыц':
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {member[1].setMute(true)}
            break;
        case prefix + 'алло':
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {member[1].setMute(false)}
            break;
        case prefix + 'поиграем':
            message.channel.send('Давайте! Напишите номер комнаты')
                    .then(function (message) {
                        message.react("👍")
                        message.react("👎")
                    });
            break;
        case prefix + 'проба':
            message.channel.send('Номер комнаты: *******\nОтреагируйте на мое сообщение ✅ для вкл микро и ❎ для выкл микро соотв');
            message.react('👍').then(r => {
                message.react('👎');
            });
            break;  
    }
});

client.login(process.env.BOT_TOKEN);