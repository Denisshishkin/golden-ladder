const TelegramApi = require('node-telegram-bot-api')

const token = '1924440805:AAEvebAe8Rj3c7oqyyxkw0CVLM4fKJIBqzk'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a48/c50/a48c50b2-fa10-344c-ba07-1c5528ac29bb/6.jpg')
        await bot.sendMessage(chatId, 'Приветствуем тебя, герой! Почему именно герой? Потому что только отважные, смелые люди решаются на перемены в своей жизни, и этот марафон определённо станет толчком к твоему развитию, росту и благополучию! 7-ми дневный марафон «Золотая лестница изобилия (1 ступень)» был создан для того, чтобы перепрошить твоё денежное сознание, помочь тебе очиститься от старых, ограничивающих установок и убеждений по поводу денег, расширить твоё финансовое сознание и выйти на новый уровень изобилия и процветания! Звучит круто, верно? 😄 Мы приготовили для тебя 7 дней практических заданий и упражнений для изменения твоего мышления и отношений с деньгами. Твоя же задача заключается в том, чтобы ДЕЛАТЬ — выполнять эти упражнения каждый день в течение 7 дней, потому что только мышление и конкретные действия дают результаты! Данные практики и упражнения не являются сложными, они требуют всего лишь час твоего времени и концентрации в день — не так уж и много для новой, полной изобилия и радости жизни, верно? 😊')
    }
})