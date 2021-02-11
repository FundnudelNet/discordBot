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
    }
}

const bot = new Bot();
module.exports = bot;