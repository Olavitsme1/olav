let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI* ´ˎ˗
│ ✎ _Nama_ : 
│ ✎ _Sekolah_ :
│ ✎ _Umur_ : 
│ ✎ _Asal_ : 
│ ✎ _Status_ : Pelajar SMA
│ ✎ _WhatsApp_ :
│    
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
