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
  const msg = await ctx.reply('Please Wait...')
  const picLink = await getPic(link);
  
  
  if(!picLink){
    ctx.reply('Profile picture not found');
    ctx.deleteMessage(msg.message_id);
    return;
  }
  await ctx.replyWithPhoto(picLink);
  ctx.deleteMessage(msg.message_id);
  
})

app.listen(3000)
bot.launch()
