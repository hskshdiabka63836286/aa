const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.TK)

bot.command('start',ctx=>{
  ctx.reply('Welcome to this bot');
})

