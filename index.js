'use strict';

//Required modules
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const messageHandler = require("./handler/MessageHandler.js");
const Core = require("./core/bot.js")

client.on('ready', () => {
    Core.init();
    console.log(`Logged in as ${client.user.tag}!`);
});

//Message Event triggers the MessageHandler
client.on('message', msg => {
    new messageHandler(msg).init();
});

module.exports = Core;

client.login(process.env.DC_TOKEN);