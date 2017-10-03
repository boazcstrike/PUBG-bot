var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var ping = require('ping');
const fs = require("fs");

var hosts1 = ["13.228.0.251", "46.51.216.14", "46.137.255.254","52.74.0.2", "52.76.0.2"];
var hosts2 = ["52.76.191.252", "52.77.63.252", "52.221.255.252","54.151.128.2", "54.169.0.2"];
var hosts3 = ["54.169.191.253", "54.179.0.2", "54.179.191.252", "54.251.63.255","54.254.128.1"];
var hosts4 = ["54.255.0.2", "122.248.255.254", "175.41.146.190"];
var hosts5 = ["13.54.63.252", "52.62.63.252", "52.64.63.253", "52.64.191.252", "52.65.63.252"];
var hosts6 = ["52.64.63.253", "52.64.191.252", "52.65.63.252", "54.66.0.2", "54.66.191.252"];
var hosts7 = ["54.79.127.252", "54.153.191.252", "54.206.127.254", "54.206.128.2", "54.252.88.8"];
var hosts8 = ["54.253.0.1"];

var hosts = ["13.228.0.251", "46.51.216.14", "46.137.255.254", "52.74.0.2", "52.76.0.2", "52.76.191.252", "52.77.63.252", "52.221.255.252","54.151.128.2", "54.169.0.2", "54.169.191.253", "54.179.0.2", "54.179.191.252", "54.251.63.255","54.254.128.1", "54.255.0.2", "122.248.255.254", "175.41.146.190", "13.54.63.252", "52.62.63.252", "52.64.63.253", "52.64.191.252", "52.65.63.252", "54.66.0.2", "54.66.191.252", "54.79.127.252", "54.153.191.252", "54.206.127.254", "54.206.128.2", "54.252.88.8", "54.253.0.1"];

var msglg = "";

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    // console.log('PUBG-BOT' + ' - (' + bot.id + ') here! I am online!');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong, motherfuckaaa! ../.'
                });
            //!help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '```PUBG SEA servers down?\nType .ping\nType .1 until .4 to view Singapore servers\.5 until .8 to view Australian Servers\.pingt for hosts latency```'
                });
            break;
            // Just add any case commands if you want to..
         }
     }

     if (message.substring(0, 1) == '.') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);

        //.ping
        if(cmd == 'ping'){
            msglg += "```First 18 servers are Singapore Servers, the rest are Australian Servers. (Type .ping again if nothing shows up)";

            hosts.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    msglg += isAlive ? '\n' + host + ': active' : '\n' + host + ' down';
                    msglg += ': ' + max["time"];
                });
            });

            msglg += "```";
            bot.sendMessage({
                to: channelID,
                message: msglg
            });

            msglg = "";
        }
        else if(cmd === 'pingt'){
            msglg += "```First 18 servers are Singapore Servers, the rest are Australian Servers.\n(Type .pingt again if nothing shows up)";

              hosts.forEach(function (host) {
                ping.promise.probe(host)
                    .then(function (max) {
                        msglg += max["host"] +': ' + max["time"] + 'ms\n';
                    })
                    .done();
            })
            msglg += "```";
            bot.sendMessage({
                to: channelID,
                message: msglg
            });

            msglg = "";
        }
        else if(cmd === '1'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-SG: ' + host + ' online' : '\nPUBG-SG: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '3'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-SG: ' + host + ' online' : '\nPUBG-SG: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '2'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-SG: ' + host + ' online' : '\nPUBG-SG: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '4'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-SG: ' + host + ' online' : '\nPUBG-SG: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '5'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-AUS: ' + host + ' online' : '\nPUBG-AUS: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '6'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-AUS: ' + host + ' online' : '\nPUBG-AUS: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '7'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-AUS: ' + host + ' online' : '\nPUBG-AUS: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === '8'){
            hosts1.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? '\nPUBG-AUS: ' + host + ' online' : '\nPUBG-AUS: ' + host + ' offline';
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                });
            });
        }
        else if(cmd === 'debug'){
            hosts.forEach(function (host) {
                ping.promise.probe(host)
                    .then(function (max) {
                        msglg += '\nTime: ' + max["time"];
                        console.log(msglg);
                    })
                    .done();
            })
            bot.sendMessage({
                to: channelID,
                message: msglg
            });
        }
     }

});