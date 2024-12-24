const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const TOKEN = process.env.TELEGRAM_TOKEN;
const CHANNEL_ID = '@brendrows0213';
const CHANNEL_URL = 'https://t.me/brendrows0213';

const bot = new TelegramBot(TOKEN, { polling: true });

const videoReplies = [

    
    
    
    
    { keyword: '205', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1036', caption: '🎬 ➺ Uch bahodir katta poyga ' },
    { keyword: '206', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1020', caption: '📽️<>𝑁𝑜𝑚: Shrek2 ' },
    { keyword: '207', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1017', caption: '📽️<>𝑁𝑜𝑚: Megamiyya ' },
    { keyword: '208', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1016', caption: 'Kino nomi:Shrek ' },
    { keyword: '209', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1034', caption: '🎬 ➺ Uch bahodir dengiz ortida' },
    
    { keyword: '210', videoPath: 'https://t.me/jon_uik_kinolar_olami/263', caption: 'Kino nomi:Reacher. tili:o`zbek tilida. Hajmi:1092 MB ' },
    { keyword: '211', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/606', caption: '🎬 Muzlik davri 2:Sifati: 480pTili: 🇺🇿O`zbek tilida ' },


    { keyword: '212', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1129', caption: ' Maxluqlar tatilda 3  premyera❤️' },
    { keyword: '213', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/709', caption: 'Ajdar o`rgatuvchilari' },
    { keyword: '214', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/710', caption: 'Ajdar o`rgatuvchilari 2' },
    { keyword: '215', videoPath: 'https://t.me/kungfu_panda_multik_multfilm/32', caption: 'Multfilm nomi: Kungfu panda tili:O`zbek tilida' },
    { keyword: '216', videoPath: 'https://t.me/terminator_kino_yulduzlar_jangi/186', caption: 'Kino nomi: Creed' },
    { keyword: '217', videoPath: 'https://t.me/Chaqmoq_Makvin_Multfilim/1636', caption: '💾NOMI :: ELEMENTAL 🇺🇿TIL:: OZBEK TILIDA  🖥️SFATI :: 480p ⏰OBUNA BOʻLISHNI UNUTMANG' },
    { keyword: '218', videoPath: 'https://t.me/Chaqmoq_Makvin_Multfilim/1656', caption: '💾NOMI :: MUZLIK DAVRI 1 🇺🇿TIL:: OZBEK TILIDA 🖥️SFATI :: 480p ⏰OBUNA BOʻLISHNI UNUTMANG ' },
    { keyword: '219', videoPath: 'https://t.me/jon_uik_kinolar_olami/101', caption: 'Kino nomi: Himoyachilar 📂 Hajmi: 720.8 Mb tili:o`zbek tilida' },
    { keyword: '220', videoPath: 'https://t.me/jon_uik_kinolar_olami/16', caption: 'Lyusi / Lusi 720p Oʻzbek tilida' },
    { keyword: '221', videoPath: 'https://t.me/jon_uik_kinolar_olami/226', caption: 'Nomi: Qirol Arturning qilichi' },
    { keyword: '222', videoPath: 'https://t.me/Chaqmoq_Makvin_Multfilim/1634', caption: 'NOMI :: KATTA XOʻJAYIN 1' },
    { keyword: '223', videoPath: 'https://t.me/Chaqmoq_Makvin_Multfilim/1677', caption: '💾NOMI :: JAXILDOR QUSHLAR ' },
    { keyword: '224', videoPath: 'https://t.me/Chaqmoq_Makvin_Multfilim/1666', caption: '💾NOMI :: CHAQMOQ MAKVIN 1 🇺🇿TIL:: OZBEK TILIDA ' },
    { keyword: '225', videoPath: 'https://t.me/kungfu_panda_multik_multfilm/30', caption: 'Kungfu Panda to‘liq 1-qism ' },
    { keyword: '226', videoPath: 'https://t.me/kungfu_panda_multik_multfilm/32', caption: 'Kungfu Panda to‘liq 3-qism ' },
    { keyword: '227', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/1101', caption: 'Tush qo`riqchilari' },
    { keyword: '228', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/6', caption: 'Etik kiygan mushuk 2 ' },
    { keyword: '229', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/877', caption: ' 🎬 ➺  Madagaskar 1' },
    { keyword: '230', videoPath: 'https://t.me/tarjima_kino_baza_filim_serial/8009', caption: ' 🎬 ➺ Transformerlar 2' },
    { keyword: '231', videoPath: 'https://t.me/Transformerlar_6_uzb/132', caption: ' 🎬Nomi: Godzila Konga qarshi Yangi imperya ' },
    { keyword: '232', videoPath: 'https://t.me/Transformerlar_6_uzb/48', caption: '🎬 ➺ Xitoylik Savdogar 🇺🇿 ➺ O`zbek Tilida ' }, 

    { keyword: '233', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/719', caption: '  Nomi: Ilya muromist va hushtagchi qaroqchi ' },
    { keyword: '234', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/733', caption: ' 🔸 Grinch. O`zbek tilida' },
    { keyword: '235', videoPath: 'https://t.me/Avaz_Oxun_kanali/9419', caption: ' Avaz Oxun - 10 yillik yubiley konsert dasturi 2023' },
    { keyword: '236', videoPath: 'https://t.me/Muhammad_ollohning_elchisii/3', caption: ' Muhammad Allohning elchisi' },
    { keyword: '237', videoPath: 'https://t.me/jon_uik_kinolar_olami/95', caption: 'Transformerlar 5' },
    { keyword: '238', videoPath: 'https://t.me/c/1721090565/372', caption: '🎬Nomi: Ono'  },
    { keyword: '239', videoPath: 'https://t.me/c/1721090565/361', caption: ' 🎬 O`G`RILAR ARMIYASI / TALONCHILAR' },
    { keyword: '240', videoPath: 'https://t.me/c/1721090565/357', caption: ' Maymunlar Sayyorasi 1' },
    { keyword: '241', videoPath: 'https://t.me/c/1721090565/342', caption: ' Gerakl' },
    { keyword: '242', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/891', caption: 'Muzyurak→ 📹2-qism' },
    { keyword: '243', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/789', caption: 'Hayvonlar shaxri' },
    { keyword: '244', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/775', caption: 'Yaxshi bo`lish osonmi 3' },
    { keyword: '245', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/734', caption: ' 🔸 Shimoliy ekspress' },
    { keyword: '246', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/723', caption: ' 🎬 ➺ Jaxldor Qushchalar 2 (2019)' },

    //{ keyword: '234', videoPath: 'https://t.me/Etik_kiygan_mushuk_2_uzb_tilida/733', caption: ' 🔸 Grinch. O`zbek tilida' },
];

async function checkSubscription(userId) {
    try {
        const member = await bot.getChatMember(CHANNEL_ID, userId);
        return ['member', 'administrator', 'creator'].includes(member.status);
    } catch (error) {
        console.error('Obuna tekshirishda xatolik:', error.message);
        return false;
    }
}

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Salom! Botdan foydalanish uchun kanalimizga obuna bo'lishingiz kerak.", {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📢 Obuna bo`lish', url: CHANNEL_URL }],
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
                        [{ text: '📢 Obuna bo`lish', url: CHANNEL_URL }],
                        [{ text: '✅ Obunani qayta yuklash', callback_data: 'check_subscription' }]
                    ]
                }
            });
        }
    }
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text?.trim();

    if (!userMessage) {
        bot.sendMessage(chatId, 'Iltimos, so‘rov uchun matn yuboring.');
        return;
    }

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

    const reply = videoReplies.find((item) => userMessage.includes(item.keyword));

    if (reply) {
        bot.sendVideo(chatId, reply.videoPath, { caption: reply.caption });
    } else {
        bot.sendMessage(chatId, 'Uzr, bu mavzuga oid video topilmadi.');
    }
});

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
