// Constructs
	const Discord = require("discord.js")	//DiscordJS Module (discordjs.org)
	const client = new Discord.Client();
	const rvedy_Version = ('2_17');
	const seto = require('../config.json')

// Begin
 client.on('message', msg => {
	 function report(x) {
		 if (msg.guild === null) {
			 if (msg.channel.type === 'dm') {
			 console.log(`[${client.user.username}@${msg.channel.recipient.tag}]: ${x}`)
		 } else {
			 console.log(`[${client.user.username}@${msg.channel.name}]: ${x}`)
		 }
		 } else {
			 console.log(`[${client.user.username}@${msg.guild.name}]: ${x}`)
		 }

	 }
	/*
		Advanced Commands
			by Devr#8133
			edited by Pigpog#0616
		Notes:
	These commands will remain in the index
	*/
	try {
			if (msg.content.indexOf(seto.prefix+"say ") === 0) {
		    	msg.channel.send(eval(msg.content.substr(5).toString()))
		    	report(msg.content)
		    	if (seto.deleteCommands === true) { msg.delete() }
			}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.deleteCommands === true) { msg.delete() }
	}

	try {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"console ") === 0) {
		    	console.log(eval(msg.content.substr(9).toString()))
		    	report(msg.content)
		    	if (seto.deleteCommands === true) { msg.delete() }
			}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.deleteCommands === true) { msg.delete() }
	}

	try {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"reply ") === 0) {
				msg.reply(eval(msg.content.substr(7).toString()))
				report('reply '+msg.content.substr(7))
			if (seto.deleteCommands === true) { msg.delete() }
			}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.deleteCommands === true) { msg.delete() }
	}

	try {
			if (msg.author.id === client.user.id) {
			if (msg.content.indexOf(seto.prefix+"do ") === 0) {
		    	(eval(msg.content.substr(4).toString()))
		    	report('do '+msg.content.substr(4))
			if (seto.deleteCommands === true) { msg.delete() }
			}}
	} catch(err){
		console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
		msg.reply(err.toString())
		if (seto.deleteCommands === true) { msg.delete() }
	}

 })

/*
	Startup Script
*/
client.on('ready', () => {
	console.log(`[${client.user.username}]: Connected!`)
})
 client.once('ready', () => {
 	console.log(`[${client.user.username}]: Peferences
Prefix: ${seto.prefix}
Delete Commands: ${seto.deleteCommands}
Advanced Commands: ${seto.advancedCommands}
Advanced Logging: ${seto.advancedLog}`)
})

if (seto.advancedLog === true) {
	client.on('debug', dbug => {
    console.log(`[advancedLog]: ${dbug}`)
})}

client.on('disconnect', () => {
	 console.log(`[Rvedy]: Disconnected!`)
	 client.once('debug', err => {
		 console.log(`[Debug]: ${err}`)
	 })
 })

client.login(seto.userToken);
