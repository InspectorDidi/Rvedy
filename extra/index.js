// Constructs
	const Discord = require("./node_modules/discord.js")	//DiscordJS Module (discordjs.org)
	const client = new Discord.Client();
	const rvedy_Version = ('11.17.17');
	const seto = require('../prefs.js')
// Begin
 client.on('message', msg => {
	/*
		Advanced Commands
			by Devr#8133
			edited by Pigpog#0616
	*/
	const advancedCommands = (`
	**__Advanced Commands__**
	${seto.prefix}**do ** does what you type
	${seto.prefix}**say ** messages what you typed
	${seto.prefix}**reply ** replies what you type
	${seto.prefix}**console ** logs what you type in console`)
	try {
			if (seto.advComs === true) {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"say ") === 0) {
		    	msg.channel.send(eval(msg.content.substr(5).toString()))
		    	report(msg.content)
		    	if (seto.delComs === true) { msg.delete() }
			}}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.delComs === true) { msg.delete() }
	}

	try {
			if (seto.advComs === true) {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"console ") === 0) {
		    	console.log(eval(msg.content.substr(9).toString()))
		    	report(msg.content)
		    	if (seto.delComs === true) { msg.delete() }
			}}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.delComs === true) { msg.delete() }
	}

	try {
			if (seto.advComs === true) {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"reply ") === 0) {
				msg.reply(eval(msg.content.substr(7).toString()))
				report('reply '+msg.content.substr(7))
			if (seto.delComs === true) { msg.delete() }
			}}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.delComs === true) { msg.delete() }
	}

	try {
			if (seto.advComs === true) {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"do ") === 0) {
		    	(eval(msg.content.substr(4).toString()))
		    	report('do '+msg.content.substr(4))
			if (seto.delComs === true) { msg.delete() }
			}}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.delComs === true) { msg.delete() }
	}

 })

//	|Begin|
 client.once('ready', () => {
 	console.log('[Rvedy]: Ready!')
 	console.log(`  Prefix: ${seto.prefix}
   Delete Commands: ${seto.delComs}
   Advanced Commands: ${seto.advComs}
   Logging: ${seto.advLog}`)
 })
 client.on('disconnect', () => {
	 console.log(`[Rvedy]: Disconnected!`)
	 client.once('debug', err => {
		 console.log(`[Rvedy Debug]: ${err}`)
	 })
	 client.on('ready', () => {
		 console.log(`[Rvedy]: Connected!`)
	 })
 })
 client.login(seto.token);
