const {Telegraf} = require('telegraf');
const {getPic} = require('./a');
const express = require('express');

const app = express();

const bot = new Telegraf(process.env.TK)

bot.command('start',async(ctx)=>{
  const a = await ctx.reply('Welcome to this bot');
  ctx.reply(JSON.stringify(a))
})

bot.command('getpic',async (ctx)=>{
  const link = ctx.text.replace('/getpic ','');
  const msg = await ctx.reply('Downloading Photo...')
  const picLink = await getPic(link);
  
  
  if(!picLink){
    await ctx.deleteMessage(msg.message_id);
    await ctx.reply('Profile picture not found');
    
    return;
  }
  await ctx.telegram.editMessageText(ctx.chat.id,msg.message_id,null,"Uploading To Telegram...");
  await ctx.replyWithPhoto(picLink);
  await ctx.deleteMessage(msg.message_id);
  
})

app.listen(3000)
bot.launch()
