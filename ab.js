const Session = require('telegraf-session-local')
const {Telegraf,Markup} = require('telegraf');
const {getLink} = require('./a');
const express = require('express');

const app = express();

const bot = new Telegraf(process.env.TK)
bot.use((new Session({database:'dt.json'})).middleware());

const adminId = process.env.ADMIN_ID;

bot.command('start',(ctx)=>{
  ctx.reply('Welcome to FB Hax Bot\nGet any facebook profile\'s profile picture and cover photo easily.\n\nDeveloped By @techztricks',Markup.keyboard([['Get Profile Picture And Cover Photo','About']]).resize().extra());
  
})

bot.hears('Get Profile Picture And Cover Photo',(ctx)=>{
  ctx.session.link = true;
  ctx.reply("Enter Your Profile Link")
})
bot.on('text',async (ctx)=>{
  
    
  if(ctx.session.link){
    ctx.session.link = false;
  try{
    
  const link = ctx.message.text;
  const msg = await ctx.reply('Downloading Photo...')
  const pics = await getLink(link);
  
  
  if(!pics){
    await ctx.deleteMessage(msg.message_id);
    await ctx.reply('Profile picture not found');
    return;
  }
  await ctx.telegram.editMessageText(ctx.chat.id,msg.message_id,null,"Uploading To Telegram...");
  await ctx.replyWithPhoto(pics.pp);
  await ctx.replyWithPhoto(pics.cp);
  await ctx.deleteMessage(msg.message_id);
  }catch(e){
   // bot.telegram.sendMessage(adminId,JSON.stringify(e));
    ctx.reply('Something went wrong!');
  }
    
    
  }
  
})

bot.hears('About',ctx=>{
  ctx.reply("Developed By @techztricks");
})

app.listen(3000)
bot.launch()
