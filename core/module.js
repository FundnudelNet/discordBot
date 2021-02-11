let Bot;
function initBot() {
     Bot = require('./bot');
}

class Module {
    init(){
        initBot();
    }
    addCommand(Object = Object, cmd = Array()){
        try {
            for (let i = 0; i < cmd.length; i++){
                cmd[i].toLowerCase();
            }
        } catch (e){
            return "There was an error parsing the commands."
        }
        if(Object != null && cmd != null) {
            Bot.createCmd(Object, cmd);
        }
    }
}

module.exports = Module;