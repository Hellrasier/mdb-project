import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })



console.dir({ bot })
bot.on('message', (msg) => {

  //   console.log('Got msg', msg)
  //   const { chat: { id } } = msg
  //   bot.sendMessage(id, 'Здравствуй, ' + msg.chat.first_name)
  // })

  bot.onText(/\/start/, (msg, [source, match]) => {
    const { chat: { id } } = msg
    bot.sendMessage(id, 'Здравствуй, ' + msg.chat.first_name)
  })

  bot.onText(/\/help /, (msg, [source, match]) => {
    const { chat: { id } } = msg
    bot.sendMessage(id, 'Чем могу быть полезен?')
  })




  export default defineNuxtPlugin(async () => {

  })

