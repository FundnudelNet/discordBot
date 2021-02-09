const Core = require('./Core');

class Bot extends Core {
    constructor() {
        super();
        this.modules = [];
        this.commands = [];
        return this;
    }

    init(){
        this.modules = super.init();
        console.log(this.modules);
    }
    createCmd(cmd){
        return;
    }
}

const bot = new Bot();
module.exports = bot;