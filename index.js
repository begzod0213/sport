const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const TOKEN = process.env.TELEGRAM_TOKEN ;

const CHANNEL_ID = '@brendrows0213';
const CHANNEL_URL = 'https://t.me/brendrows0213';

const bot = new TelegramBot(TOKEN, { polling: true });

const videoMap = {
    "205": "https://t.me/jon_uik_kinolar_olami/226",
    "206": "https://t.me/jon_uik_kinolar_olami/233",
    "207": "https://t.me/jon_uik_kinolar_olami/234",
    "208": "https://t.me/terminator_kino_yulduzlar_jangi/154",
    "209": "https://t.me/venom3_kinolar_uzb_tarjima_kino/625",
    "210": "https://t.me/terminator_kino_yulduzlar_jangi/183",
    "211": "https://t.me/terminator_kino_yulduzlar_jangi/178",
    
   
    "214": "https://t.me/kungfu_panda_multik_multfilm/30",
    "215": "https://t.me/kungfu_panda_multik_multfilm/31",
    "216": "https://t.me/kungfu_panda_multik_multfilm/32",
    "217": "https://t.me/Chaqmoq_Makvin_Multfilim/1332",
    "219": "https://t.me/terminator_kino_yulduzlar_jangi/148",
    "220": "https://t.me/Chaqmoq_Makvin_Multfilim/1331",
    
    "222": "https://t.me/terminator_kino_yulduzlar_jangi/187"
    // Qo'shimcha kodlar...
};

async function checkSubscription(userId) {
    try {
        const member = await bot.getChatMember(CHANNEL_ID, userId);
        return ['member', 'administrator', 'creator'].includes(member.status);
    } catch (error) {
        console.error('Obuna xatolarida xatolik:', error.message);
        return false;
    }
}

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Salom! Botdan foydalanish uchun kanalimizga obuna bo'lishingiz kerak.", {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📢 Obuna bo\'lish', url: CHANNEL_URL }],
                [{ text: '✅ Obunani qayta yuklash', callback_data: 'check_subscription' }]
            ]
        }
    });
});

bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const userId = query.from.id;

    if (query.data === 'check_subscription') {
        const isSubscribed = await checkSubscription(userId);
        if (isSubscribed) {
            bot.sendMessage(chatId, "✅ Siz kanalga obuna bo'lgansiz! Endi kino kodini yuboring.");
        } else {
            bot.sendMessage(chatId, "❌ Siz hali kanalga obuna bo'lmadingiz. Iltimos, obuna bo'ling.", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '📢 Obuna bo\'lish', url: CHANNEL_URL }],
                        [{ text: '✅ Obunani qayta yuklash', callback_data: 'check_subscription' }]
                    ]
                }
            });
        }
    }
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text.trim();
    const isSubscribed = await checkSubscription(msg.from.id);

    if (!isSubscribed) {
        bot.sendMessage(chatId, "❌ Siz kanalga obuna bo'lmadingiz. Iltimos, obuna bo'ling.", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📢 Obuna bo‘lish', url: CHANNEL_URL }],
                    [{ text: '✅ Obunani qayta tekshirish', callback_data: 'check_subscription' }]
                ]
            }
        });
    
        return;
    }

    const videoReplies = [
        {
            keyword: '210',
            videoPath: 'https://t.me/jon_uik_kinolar_olami/263',
            caption: 'Kino nomi:Reacher. tili:o`zbek tilida. Hajmi:1092 MB '
        },
        {
            keyword: '212',
            videoPath: ' https://t.me/Umar_ibn_Hattob_seriali/26',
            caption: 'Kino nomi: Umar ibn Xattob. tili:o`zbek tilida. Hajmi'
        },
        {
            keyword: '215',
            videoPath: 'https://t.me/kungfu_panda_multik_multfilm/32',
            caption: 'Multfilm nomi: Kungfu panda tili:O`zbek tilida'
        },
        {
            keyword: '216',
            videoPath: 'https://t.me/terminator_kino_yulduzlar_jangi/186',
            caption: 'Bu Node.js dasturlash bo‘yicha darslik.'
        }
    ];
    
    // Foydalanuvchi xabariga javob berish
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text?.toLowerCase(); // Xabarni kichik harflarga o'girib olish
    
        if (!text) {
            bot.sendMessage(chatId, 'Iltimos, so‘rov uchun matn yuboring.');
            return;
        }
    
        // Video topib yuborish
        const reply = videoReplies.find((item) => text.includes(item.keyword));
    
        if (reply) {
            bot.sendVideo(chatId, reply.videoPath, { caption: reply.caption });
        } else {
            bot.sendMessage(chatId, 'Uzr, bu mavzuga oid video topilmadi.');
        }
    });
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
   // console.log(`Server is running on port ${PORT}`);
//})
});
