const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    let command = message.content.split(' ')[0].slice(1);
    let args = message.content.replace(prefix + command, '').trim();

    switch (command) {
        case prefix + 'help':
        case prefix + 'помощь':
            message.reply('Я русский бот если что, так что разговаривай со мной по-русски\n'+
            '1) !привет -> здороваюсь в ответ\n'+
            '2) !любовь -> покажу свою любовь\n'+
            '3) !цыц -> помогает всех заткнуть\n'+
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
            message.reply('Давайте! Напишите номер комнаты')
                    .then(function (nmessage) {
                        nmessage.react("👍")
                        nmessage.react("👎")
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