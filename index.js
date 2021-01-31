'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const prefix = process.env.DC_Prefix;

const message = require("./handler/MessageHandler.js");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let casino = message.MessageHandler(msg);
});

client.login(process.env.DC_TOKEN);