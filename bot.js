const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if (message.content === prefix + 'привет') {

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
    
    if (message.content === prefix + 'поиграем'){
        message.channel.send('Номер комнаты: *******\nОтреагируйте на мое сообщение ✅ для вкл микро и ❎ для выкл микро соотв');
    }
    
    if (message.content === prefix + 'спать'){
        message.reply('The bot will now shut down.\n'
                            + 'Confirm with a thumb up or deny with a thumb down.');

                    // Reacts so the user only have to click the emojis
                    message.react('👍').then(r => {
                            message.react('👎');
                    });

                
    }


});

client.login(process.env.BOT_TOKEN);