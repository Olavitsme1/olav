let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : 
│ ✎ _Sekolah_ :
│ ✎ _Umur_ : 
│ ✎ _Asal_ : 
│ ✎ _Status_ : 
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Youtube _:
│    https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
│ ✎ _Instagram_ : 
│    https://instagram.com/oscarbotz_
│ ✎ _WhatsApp_ :
│    wa.me/
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
