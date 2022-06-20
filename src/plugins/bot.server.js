import TelegramBot from 'node-telegram-bot-api'

export default defineNuxtPlugin(async () => {
  const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true})
  console.dir({bot})
  bot.on('message', (msg) => console.log('Got msg', msg))
})
