const Core = require('./Core');

class Bot extends Core {
    constructor() {
        super();
        super.init();
        return this;
    }

    init(){
        this.modules = super.Modules;
        this.commands = super.Commands;
        console.log(this.commands)
    }

    checkCmd(cmd){
        cmd = cmd.toString();

        let module, splicedModule, entry, found = false;
        for (let i = 0; i < this.commands.length; i++){
            if (found){
                break;
            }
            module = this.commands[i][0];
            splicedModule = this.commands[i].toString().split(",");

            if(splicedModule.indexOf(cmd) >= 0){
                found = true;
                break;
            } else {
                found = false;
            }
        }

        if(module !== null && found){
            for(let i = 0; i < this.modules.length; i++ ) {
                if (this.modules[i].moduleName.toString() === module) {
                    entry = this.modules[i].moduleName + "\\" + this.modules[i].entry;
                    return entry;
                }
            }
        }
        return null;
    }
}

const bot = new Bot();
module.exports = bot;