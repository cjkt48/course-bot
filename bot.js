const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'помощь' || command=== 'help') message.reply('Я русский бот если что, так что разговаривай со мной по-русски\n'+
        '1) !привет -> здороваюсь в ответ\n'+
        '2) !любовь -> покажу свою любовь\n'+
        '3) !цыц -> помогает всех заткнуть\n'+
        '4) !алло -> разрешает снова болтать');
    if(command === 'привет') message.reply('приветствую вас!');
    if(command === 'любовь') message.channel.send('▄██▄██▄░██░░░▄█▀▀█▄░█▌░░▐█░██▀▀▀░▄██▄██▄\n▀█████▀░██░░▐█▌░░▐█▌▐█░░█▌░██▀▀░░▀█████▀\n ░░▀█▀░░░██▄▄░▀█▄▄█▀░░▀██▀░░██▄▄▄░░░▀█');
    if(command === 'цыц') {
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {member[1].setMute(true)}
    }   
    if(command === 'алло') {
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {member[1].setMute(false)}
    }
    if(command === 'поиграем'){
        message.reply('Давайте! Напишите номер комнаты')
                .then(function (nmessage) {
                    nmessage.react("👍")
                    nmessage.react("👎")
                });
    }
    if(command === 'проба'){
        message.channel.send('Номер комнаты: *******\nОтреагируйте на мое сообщение ✅ для вкл микро и ❎ для выкл микро соотв');
        message.react('👍').then(r => {
            message.react('👎');
        });
    }
});


client.login(process.env.BOT_TOKEN);