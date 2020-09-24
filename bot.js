const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

let name, server;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'помощь' || command=== 'help') message.reply('слушай, я русский бот, если что, так что разговаривай со мной по-русски\n'+
        '1) !привет -> здороваюсь в ответ\n'+
        '2) !любовь -> покажу свою любовь\n'+
        '3) !цыц -> помогает всех заткнуть\n'+
        '4) !алло -> разрешает снова болтать\n'+
        '5) !поиграем -> создана для игры в Among Us по Discord');
    else if(command === 'привет') message.reply('приветствую вас!');
    else if(command === 'любовь') message.channel.send('▄██▄██▄░██░░░▄█▀▀█▄░█▌░░▐█░██▀▀▀░▄██▄██▄\n▀█████▀░██░░▐█▌░░▐█▌▐█░░█▌░██▀▀░░▀█████▀\n ░░▀█▀░░░██▄▄░▀█▄▄█▀░░▀██▀░░██▄▄▄░░░▀█');
    else if(command === 'цыц' || command === 'wsw') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {member[1].setMute(true)}
    }   
    else if(command === 'алло' || command === 'fkkj') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {member[1].setMute(false)}
    }
    else if(command === 'поиграем' || command === 'погнали' || command === 'поехали'){
        let channel = message.member.voiceChannel;
        message.reply('давайте! Напишите номер комнаты!');
        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000})
                .then(collected => {
                    message.reply(`спасибо! Ваш номер: ${collected.first().content}`);
                    name = collected.first().content;
                    message.reply(`какой сервер выбран (Азия, Норф Америка или Европа) ?`);
                    message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000})
                        .then(collected1 => {
                            message.reply(`спасибо! Выбранный сервер: ${collected1.first().content}`);
                            server = collected1.first().content;
                            message.channel.send('3');
                            message.channel.send('2');
                            message.channel.send('1');
                            message.channel.send('ИГРА НАЧАЛАСЬ!');
                            message.channel
                                .send(`Номер комнаты: ${collected.first().content}\nВыбранный сервер: ${collected1.first().content}\nВедущий этой игры:${message.author.username}\n
                                Кликни на эмодзи MUTE/UNMUTE для вкл/откл микрофонов!`)
                                .then( function (gameMessage) {
                                    gameMessage.react('🔇').then(r => {

                                    client.on('messageReactionAdd', (reaction, user) => {
                                        if (user.id == message.author.id) {
                                           for (let member of channel.members) {member[1].setMute(true);}     
                                        }     
                                    });

                                    client.on('messageReactionRemove', (reaction, user) => {
                                        if (user.id == message.author.id) {
                                            for (let member of channel.members) {member[1].setMute(false);}    
                                         }      
                                    }); 

                                });
                                })
                                .catch(() => { message.reply('извините, ошибка вкл/откл микрофонов'); });
                        });
                    
                }).catch(() => { message.reply('извините, но 30 секунд прошло, а ответа я так и не дождался('); });
    }
});


client.login(process.env.BOT_TOKEN);