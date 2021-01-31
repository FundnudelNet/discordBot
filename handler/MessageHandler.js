const Casino = require("../modules/Casino");
const Discord = require('discord.js');

/*  Function MessageHandler()
|   Used to process messages and route these messages to the modules
|   Params: msg: the message discord.js received
|   Returns: /
|   TODO:Add more modules
 */

class MessageHandler {
    constructor(msg) {
        this.msg = msg;
        this.embed;
    }

    init() {
        let content = this.msg.content.split(" ");
        if (content[0].startsWith(process.env.DC_Prefix)) {
            if (content[1] >= 5) {
                //Register commands and route messages forward
                switch (content[0]) {
                    case process.env.DC_Prefix + "blackjack":
                    case process.env.DC_Prefix + "bj":
                        this.embed = new Casino(content[1]).blackjack();

                }
                this.msg.channel.send(this.embed);
            } else {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Gamble Bot")
                    .setDescription("This command is missing some arguments. Consider checking these arguments and try again.")
                    .setColor(0xff0000);
                this.msg.channel.send(embed);
            }
        }
    }
}

//Export the function as a module
module.exports = MessageHandler;