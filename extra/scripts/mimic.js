const Discord = require("../node_modules/discord.js")	//DiscordJS Module (discordjs.org)
const client = new Discord.Client();
const seto = require('../prefs.js')
console.log('mimic loaded')

client.on('message', msg => {
	if (msg.content === "-mimic") {
		msg.reply('mimi was loaded properly')
	}
try {
		if (msg.author.id === client.user.id) {
		if (msg.content.indexOf(seto.prefix+"mimic ") === 0) {
			god = msg.guild.member(msg.content.substr(7).replace(/<|!|@|>/g,""))
			if (god.user.presence.game === null) {
				console.log('mimic: no game found.')
			} else {
				client.user.setPresence({ game: { name: `${god.user.presence.game.name}`, type: 0 } })
				}
				client.user.setAvatar(god.user.avatarURL)
				client.user.setStatus(god.presence.status)
				msg.guild.member(client.user.id).setNickname(god.displayName)
				report(msg.content)
			if (seto.delComs === true) { msg.delete() }
		}}
} catch(err) {
	console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
	msg.reply(`${err}`)
}

try {
		if (msg.author.id === client.user.id) {
		if (msg.content.indexOf(seto.prefix+"take game ") === 0) {
			god = msg.guild.member(msg.content.substr(11).replace(/<|!|@|>/g,""))
			if (god.user.presence.game === null) {
				console.log('take: no game found.')
			} else {
				client.user.setPresence({ game: { name: `${god.user.presence.game.name}`, type: 0 } })
			}
				report(msg.content)
			if (seto.delComs === true) { msg.delete() }
		}}
} catch (err) {
	console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
	msg.reply(`${err}`)
}
try {
		if (msg.author.id === client.user.id) {
		if (msg.content === seto.prefix+'reset') {
			client.user.setAvatar(seto.avatarURL)
			client.user.setStatus('online')
			msg.guild.member(client.user.id).setNickname(client.user.username)
			client.user.setPresence({ game: { name: null, type: 0 } })
			client.user.setAvatar(seto.avatarURL)
			report(msg.content)
			if (seto.delComs === true) { msg.delete() }
		}}
} catch(err) {
	console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
	msg.reply(`${err}`)
}
try {
		if (msg.author.id === client.user.id) {
		if (msg.content.indexOf(seto.prefix+"take avatar ") === 0) {
			god = msg.guild.member(msg.content.substr(13).replace(/<|!|@|>/g,""))
	    	client.user.setAvatar(god.user.avatarURL)
	    	report(msg.content)

	    if (seto.delComs === true) { msg.delete() }
		}}
} catch(err) {
	console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
	msg.reply(`${err}`)
}
try {
		if (msg.author.id === client.user.id) {
		if (msg.content.indexOf(seto.prefix+"take name ") === 0) {
			god = msg.guild.member(msg.content.substr(11).replace(/<|!|@|>/g,""))
	    	msg.guild.member(client.user.id).setNickname(god.displayName)
	    	report(msg.content)
	    if (seto.delComs === true) { msg.delete() }
		}}
} catch(err) {
	console.log(`[Error]: ${msg.content} - ${err} (${msg.guild})`)
	msg.reply(`${err}`)
}
})
