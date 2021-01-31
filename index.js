'use strict';

//Required modules
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const messageHandler = require("./handler/MessageHandler.js");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//Message Event triggers the MessageHandler
client.on('message', msg => {
    let casino = new messageHandler(msg).init();
});

client.login(process.env.DC_TOKEN);