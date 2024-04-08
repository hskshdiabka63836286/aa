const {Telegraf} = require('telegraf');
const {getPic} = require('./a');
const express = require('express');

const app = express();

const bot = new Telegraf(process.env.TK)

bot.command('start',ctx=>{
  ctx.reply('Welcome to this bot');
})

bot.command('getpic',ctx=>{
  const link = ctx.text.replace('/getpic ','');
  const picLink = getPic(link);
  if(!picLink){
    ctx.reply('Profile picture not found');
    return;
  }
  ctx.replyWithPhoto(picLink)
})

app.listen(3000)
bot.launch()
