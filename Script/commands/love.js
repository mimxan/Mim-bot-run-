/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "story VEDIO",
  commandCategory: "M H BD",
  usages: "love7 vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\n - তুমি ভালোবাসা মানে কি জানো..??\n - আমি জানি ভালোবাসা মনে চুদা চুদির খেলা...🌸🙈😍\n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/Ei4mmeI.mp4",
"https://i.imgur.com/Ei4mmeI.mp4",
"https://i.imgur.com/ey7wffT.mp4",   
"https://i.imgur.com/mBd9OQl.mp4",
"https://i.imgur.com/dg2iR2M.mp4",   
"https://i.imgur.com/oyWJP0i.mp4",
"https://i.imgur.com/dD0y3eT.mp4", 
"https://i.imgur.com/Go3aVZT.mp4",  
"https://i.imgur.com/dRYq2ur.mp4", 
"https://i.imgur.com/lpOAcXn.mp4",   
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
