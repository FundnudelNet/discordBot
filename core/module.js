let Bot;
function initBot() {
     Bot = require('./bot');
}

class Module {
    init(){
        initBot();
    }
}

module.exports = Module;