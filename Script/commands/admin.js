const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝗥𝗢𝗖𝗞𝗬 ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐈𝐧 𝐂𝐨𝐦𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝
┃ 🎂 𝐀𝐠𝐞       : 20
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝗞𝗢𝗟𝗞𝗔𝗧𝗔
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝗪𝗔𝗦𝗧 𝗕𝗘𝗡𝗚𝗔𝗟
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : 𝗡𝗢𝗧
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : 𝗥𝗢𝗖𝗞𝗬_999
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :‣⃟ 𝐏𝐘ɑ͜͡𝐑𓆪𒄬‣༑༑⃝𝐌๏н͜ɑ͜͡ßßɑ͜͡𝐓⸙ 𝐑ɑ͜͡ƞ𝐃ɪ̽͜𓆪»𝐑๏ƞɑ͜͡𑁍 𒄬‣𝐅ɪ̽͜ƞɠɼs͜͡ ⃝𝐊ɼɑ͜͡༑༑⃝ɑ͜͡𝐁н͜ɪ̽͜⸙𒄬‣ ⃝𝐌ɑ͜͡𝐊ɑ͜͡𓆪»𝐇ɑ͜͡ɪ̽※※※※ ❮𝐌𝐒❯ 𝐑𝐎𝐂𝐊𝐘❯ 父︻दु/⃦̸̸̵̵͇̿̿̿̿Ω̵̵͇̿̿๏ـــــــــــــــــــــــــــــــــــــــــــ๏๏๏⸙➊②➌𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺』 《𝐈𝐃
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :https://www.facebook.com/pyrmn
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://graph.facebook.com/61564434359130
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/61564434359130/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
