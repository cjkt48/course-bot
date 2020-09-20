const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {

    console.log('I am ready!');
    client.guilds.get('guild_id').channels.get('channel_id').fetchMessage('message_id');

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
        message.channel.send(Используйте это сообщение для );
    }

});

client.on('messageReactionAdd', (reaction, user) => {
        let message = reaction.message, emoji = reaction.emoji;

        if (emoji.name == '✅') {
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false)
            }
        }

        else if (emoji.name == '❎') {
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(true)
            }
        }

        // Remove the user's reaction
        reaction.remove(user);
});

client.login(process.env.BOT_TOKEN);