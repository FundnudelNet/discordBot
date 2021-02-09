const Bot = require('./bot');

class Module {
    addCommand(cmd){
        Bot.createCmd(cmd);
    }
}

module.exports = Module;