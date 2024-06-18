const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { // Hj
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - Kết nối thành công đến Account`);

  const r = new Discord.RichPresence()
    .setApplicationId('1150928778965565500')
    .setType('LISTENING')
    .setURL('https://youtube.com') //Must be a youtube video link 
    .setState('BunBunBun')
    .setName('Tunnie Heart')
    .setDetails(`Tunnie`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1250466557923168319/1250768352759123969/IMG_2337.png?ex=666c244d&is=666ad2cd&hm=7739018bef162f524b96d8b747907fb384aaa5eea0ca1df2a4c98ee58c303ade&=&format=webp&quality=lossless&width=526&height=525') //Bạn có thể đặt liên kết ở dạng tenor hoặc discord, v.v.
    .setAssetsLargeText('Em bé xíu gọi là em bé iu') //Văn bản khi bạn di chuột vào Hình ảnh lớn
    //.setAssetsSmallImage('https://media.discordapp.net/attachments/1204070941836054539/1250521568824655892/bun1.jpg?ex=666be737&is=666a95b7&hm=a7bcc94bc33a94c4a290a2dd7b8dc4cecf7b059d6704423910f411624761c014&=&format=webp&width=492&height=655') //Bạn có thể đặt liên kết ở dạng tenor hoặc discord, v.v.
    .setAssetsSmallText('Meow Meow') //Văn bản khi bạn di chuột vào Hình ảnh nhỏ
    .addButton('Instargram', 'https://www.instagram.com/athuuu.nhie/')
    .addButton('Discord', 'https://discord.gg/muffinie');
   

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Tunnie`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});


client.login(process.env.TOKEN)
