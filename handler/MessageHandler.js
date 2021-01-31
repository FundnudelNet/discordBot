const Casino = require("../events/MessageEvent");
const Discord = require('discord.js');

/*  Function MessageHandler()
|   Used to process messages and route these messages to the modules
|   Params: msg: the message discord.js received
|   Returns: /
|   TODO:Add a separate MessageBuilder and remove the embed message from the code
|   TODO:Add more modules
 */

function MessageHandler(msg){
    let content = msg.content.split(" ");
    if (content[0].startsWith(process.env.DC_Prefix)){
        if (content[1] >= 5){
            //Register commands and route messages forward
            switch (content[0]){
                case process.env.DC_Prefix + "blackjack":
                case process.env.DC_Prefix + "bj":
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

//Export the function as a module
exports.MessageHandler = MessageHandler;