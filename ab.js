const {Telegraf,Markup} = require('telegraf');
const {getPic} = require('./a');
const express = require('express');

const app = express();

const bot = new Telegraf(process.env.TK)

const adminId = process.env.ADMIN_ID;

bot.command('start',(ctx)=>{
  ctx.reply('Welcome to FB Hax Bot\nTo get profile picture send message in this format\n/getpic <id_link>\n\nDeveloped By @techztricks',Markup.keyboard([['Get Profile Picture And Cover Photo','About']]));
  
})

bot.command('getpic',async (ctx)=>{
  try{
  const link = ctx.text.replace('/getpic ','');
  const msg = await ctx.reply('Downloading Photo...')
  const pics = await getPic(link);
  
  
  if(!picLink){
    await ctx.deleteMessage(msg.message_id);
    await ctx.reply('Profile picture not found');
    return;
  }
  await ctx.telegram.editMessageText(ctx.chat.id,msg.message_id,null,"Uploading To Telegram...");
  await ctx.replyWithPhoto(pics.pp);
  await ctx.replyWithPhoto(pics.cp);
  await ctx.deleteMessage(msg.message_id);
  }catch(e){
    bot.telegram.sendMessage(adminId,JSON.stringify(e));
    ctx.reply('Something went wrong!');
  }
  
})

app.listen(3000)
bot.launch()
