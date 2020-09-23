const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let isMuted = false;

    function newGame(name, server) {
        message.channel
        .send(`Номер комнаты: ${name}\nВыбранный сервер: ${server}\n
        Кликни на эмодзи MUTE/UNMUTE для вкл/откл микрофонов!`)
        .then( function (gameMessage) {
            gameMessage.react('🔇').then(()=> {
                gameMessage.react('🔊');
            });
                 gameMessage.awaitReactions((reaction, user) => user.id == message.author.id && 
                 (reaction.emoji.name == '🔇' || reaction.emoji.name == '🔊'),{ max: 1, time: 600000 })
                 .then( function() {
                        let channel = message.member.voiceChannel;   
                        if (reaction.emoji.name == '🔇') {
                            isMuted = true;
                            for (let member of channel.members) {member[1].setMute(isMuted)}
                        } else {
                            isMuted = false;
                            for (let member of channel.members) {member[1].setMute(isMuted)}
                        }
                        newGame(name, server);
                 }).catch(() => { message.reply('извините, ошибка смены микрофонов'); });

        }).catch(() => { message.reply('извините, ошибка вкл/откл микрофонов'); });
    }

    if(command === 'помощь' || command=== 'help') message.reply('слушай, я русский бот, если что, так что разговаривай со мной по-русски\n'+
        '1) !привет -> здороваюсь в ответ\n'+
        '2) !любовь -> покажу свою любовь\n'+
        '3) !цыц -> помогает всех заткнуть\n'+
        '4) !алло -> разрешает снова болтать\n'+
        '5) !поиграем -> создана для игры в Among Us по Discord');
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
    if(command === 'поиграем' || command === 'погнали' || command === 'поехали'){
        message.reply('давайте! Напишите номер комнаты!');
        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 600000})
                .then(collected => {
                    message.reply(`спасибо! Ваш номер: ${collected.first().content}`);
                    message.reply(` какой сервер выбран?`);
                    message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 600000})
                        .then(collected1 => {
                            message.reply(`спасибо! Ваш номер: ${collected1.first().content}`);
                            message.channel.send('3');
                            message.channel.send('2');
                            message.channel.send('1');
                            message.channel.send('ИГРА НАЧАЛАСЬ!');
                            newGame(collected.first().content, collected1.first().content);
                        });
                    
                }).catch(() => { message.reply('извините, но 30 секунд прошло, а ответа я так и не дождался('); });
    }
});


client.login(process.env.BOT_TOKEN);