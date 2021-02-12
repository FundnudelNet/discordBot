const Discord = require('discord.js');
const Bot = require("../core/bot");

/*  Function MessageHandler()
|   Used to process messages and route these messages to the modules
|   Params: msg: the message discord.js received
|   Returns: /
|   TODO:Add more modules
 */

class MessageHandler {
    constructor(msg) {
        this.msg = msg;
    }

    init() {
        let content = this.msg.content.split(" ");
        if (content[0].startsWith(process.env.DC_Prefix)) {
            let cmd = content[0].split(process.env.DC_Prefix);
            cmd = cmd[1];
            let module = Bot.checkCmd(cmd);
            if(module !== null){
                try {
                    module = require("../modules/" + module);
                    new module().init(this.msg);
                } catch (e){
                    console.log(e);
                }
            } else {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Gamble Bot")
                    .setDescription("This command was not found. Please check your input")
                    .setColor(0xff0000);
                this.msg.channel.send(embed);
            }
        }
    }
}

//Export the function as a module
module.exports = MessageHandler;