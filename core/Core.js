const fs = require('fs');
const path = require("path");

class Core {
    constructor() {
        this.modulePath = './modules/';
        this.activeModules = [];
        this.activeCommands = [];
    }
    init() {
        this.dirs = fs.readdirSync(this.modulePath).map(dir => {
            return path.join(this.modulePath, dir);
        }).filter(this.isDir);

        for (let i = 0; i < this.dirs.length; i++){
            if (fs.existsSync( this.dirs[i] + "/config.json")){
                this.verifyConfig(this.readConfig(this.dirs[i] + "/config.json"), this.dirs[i]);
            }
        }
    }

    readConfig(configPath) {
        try {
            let data = fs.readFileSync(configPath, 'utf8');
            try {
                return JSON.parse(data);
            } catch (e) {
                console.log(e);
            }
        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    }

    verifyConfig(data, dirPath) {
        try {
            if (data.entry !== "" && data.moduleName !== "") {
                if (fs.existsSync(dirPath + "\\" + data.entry.toString())) {

                    console.log("../" + dirPath + "/" + data.entry.toString())
                    let stressModule = require("../" + dirPath + "/" + data.entry.toString());
                    let stressClass = new stressModule();

                    if (!data.commands) {
                        delete data.commands;
                    } else {
                        let commands = [data.moduleName, data.commands];
                        this.activeCommands.push(commands);
                    }
                    this.activeModules.push(data);
                }
            }
        } catch (e){
            console.log(e);
        }
    }

    isDir = fileName =>{
        return fs.lstatSync(fileName).isDirectory();
    }

    get Modules(){
        return this.activeModules;
    }

    get Commands(){
        return this.activeCommands;
    }
}

module.exports = Core;