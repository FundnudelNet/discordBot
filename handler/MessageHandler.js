const Casino = require("../events/MessageEvent");
const Discord = require('discord.js');

function MessageHandler(msg){
    let content = msg.content.split(" ");
    if (content[0].startsWith("#")){
        if (content[1] >= 5){
            switch (content[0]){
                case "#blackjack":
                case "#bj":
                    let casino = new Casino(content[1]).blackjack();
                    if (casino >= content[1]){
                    let embed = new Discord.MessageEmbed()
                        .setTitle("Gamble Bot")
                        .setDescription("You've won " + casino + "$.")
                        .setColor(0xff0000);
                    msg.channel.send(embed);
                    } else {
                        let embed = new Discord.MessageEmbed()
                            .setTitle("Gamble Bot")
                            .setDescription("You've lost and our Casino says: thank you")
                            .setColor(0xff0000);
                        msg.channel.send(embed);
                    }
            }
        } else {
            let embed = new Discord.MessageEmbed()
                .setTitle("Gamble Bot")
                .setDescription("This command is missing some arguments. Consider checking these arguments and try again.")
                .setColor(0xff0000);
            msg.channel.send(embed);
        }
    }
}

exports.MessageHandler = MessageHandler;