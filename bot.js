const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: 'IP_СЕРВЕРА',
  port: 25565,
  username: 'AFK_Bot'
})

bot.on('spawn', () => {

  console.log('Бот зашел')

  let forward = true

  setInterval(() => {

    if (forward) {
      bot.setControlState('forward', true)

      setTimeout(() => {
        bot.setControlState('forward', false)
      }, 3000)

    } else {

      bot.setControlState('back', true)

      setTimeout(() => {
        bot.setControlState('back', false)
      }, 3000)
    }

    forward = !forward

    bot.look(
      Math.random() * Math.PI * 2,
      0
    )

  }, 15000)

})

bot.on('end', () => {
  console.log('Перезаход...')
  setTimeout(createBot, 5000)
})

bot.on('error', console.log)
}

createBot()
