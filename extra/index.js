// Constructs
	const Discord = require("discord.js")	//DiscordJS Module (discordjs.org)
	const client = new Discord.Client();
	const rvedy_Version = ('2_17');
	const seto = require('./prefs.js')
// Begin
/*
	Modular Index!
*/
	const os = require('os')
	const fs = require('fs')
try {

	fs.watch('scripts')
	fs.on('change', chg => {
		console.log(chg)
	})
} catch(err) {

}

/*
}
 	End of Modular Index!
*/
 client.on('message', msg => {
	 function report(x) {
	 		if (msg.guild === null) {
	 		console.log(`[${client.user.username}@${msg.channel.name}]: ${x}`)
	 		} else{
	 		console.log(`[${client.user.username}@${msg.guild.name}]: ${x}`)
	 	}
	} //by devr#8133 for you
	/*
		Advanced Commands
			by Devr#8133
			edited by Pigpog#0616
		Notes:
		These commands will remain here, all future
		programs like mimic will be in scripts folder
	*/
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

/*
	Startup Script
*/
client.on('ready', () => {
	console.log(`[${client.user.username}]: Connected!`)
})
 client.once('ready', () => {
 	console.log(`[${client.user.username}]: Peferences
Prefix: ${seto.prefix}
Delete Commands: ${seto.delComs}
Advanced Commands: ${seto.advComs}
Advanced Logging: ${seto.advLog}`)
})

if (seto.advLog === true) {
	client.on('debug', dbug => {
    console.log(`[AdvLog]: ${dbug}`)
})}

client.on('disconnect', () => {
	 console.log(`[Rvedy]: Disconnected!`)
	 client.once('debug', err => {
		 console.log(`[Debug]: ${err}`)
	 })
 })
client.login(seto.token);
