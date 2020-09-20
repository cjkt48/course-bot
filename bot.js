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
        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000})
                .then(collected => {
                    message.reply(`спасибо! Ваш номер: ${collected.first().content}`);
                    message.channel.send('3');
                    message.channel.send('2');
                    message.channel.send('1');
                    message.channel.send('ИГРА НАЧАЛАСЬ!');
                    message.channel
                        .send(`Номер комнаты: ${collected.first().content}\n
                        Кликни на эмодзи PLAY для начала игры, а затем вкл/откл микрофоны!`)
                        .then( function (gameMessage) {
                            gameMessage.react('▶️');
                            let isMuted = false;
                            // while (true){
                            //     gameMessage.awaitReactions((reaction, user) => user.id == gameMessage.author.id && 
                            //     (reaction.emoji.name == '▶️' || reaction.emoji.name == '🔇' || reaction.emoji.name == '🔊'),{ max: 1, time: 600000 })
                            //     .then(() => {
                            //                 isMuted = !isMuted;
                            //                 let channel = message.member.voiceChannel;
                            //                 for (let member of channel.members) {member[1].setMute(isMuted)}
                            //                 gameMessage.reactions.removeAll().catch(() => message.reply(', извините, не удалось стереть эмоции'));
                            //                 if (!isMuted) { 
                            //                         gameMessage.react('🔇');
                            //                 } else {
                            //                         gameMessage.react('🔊');
                            //                 }
                            //     }).catch(() => {
                            //     message.reply('извините, ошибка смены микрофонов');    
                            // });
                            // }
                        }).catch(() => { message.reply('извините, ошибка вкл/откл микрофонов'); });
                }).catch(() => { message.reply('извините, но 30 секунд прошло, а ответа я так и не дождался('); });
    }
});


client.login(process.env.BOT_TOKEN);