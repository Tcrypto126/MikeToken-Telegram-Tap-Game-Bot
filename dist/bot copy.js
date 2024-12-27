"use strict";
// Import the necessary packages
const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
// Load environment variables
dotenv.config();
const token = process.env.TELEGRAM_TOKEN;
console.log("Bot token:", token); // Confirm token is loaded
// Create a new Telegram bot using polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });
// Define the inline keyboard layout for interaction
const options = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Play in 1 click  🐉", callback_data: "click" },
            ],
            [
                { text: "Subscribe to the channel  🐸", url: 'https://t.me/MikeToken' },
            ],
            [
                { text: "How to earn from the game  🐲", callback_data: "earn" },
            ],
        ],
    },
};
// Handle the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcomeMessage = "Hello! Welcome to Mike Game Bot 🐉 🐸 🐲                  \n\n You are now the director of a crypto exchange.                 \n\n Which one? You choose. Tap the screen, collect coins, pump up your passive income, develop your own income strategy.  \n\n We’ll definitely appreciate your efforts once the token is listed (the dates are coming soon). \n\n Don't forget about your friends — bring them to the game and get even more coins together!";
    // Send the welcome message with the inline keyboard
    bot.sendMessage(chatId, welcomeMessage, options);
});
// Handle callback queries from inline buttons
bot.on("callback_query", (callbackQuery) => {
    const message = callbackQuery.message;
    const category = callbackQuery.data; // The 'callback_data' associated with the button pressed.
    // Respond to the callback query with an alert and update the bot's message
    // bot.answerCallbackQuery(callbackQuery.id, {
    //   text: `You pressed ${category}`,
    //   show_alert: true,
    // });
    if (category === 'earn') {
        // Replace 'URL_TO_CHANNEL' with your channel's URL
        const messagetext = 'How to play Mike Game ⚡️                              \n\n 💰 Tap to earn\nTap the screen and collect coins.\n\n    ⛏ Mine\nUpgrade cards that will give you passive income opportunities.\n\n  ⏰ Profit per hour\nThe exchange will work for you on its own, even when you are \nnot in the game for 3 hours.\nThen you need to log in to the game again.     \n\n     👥 Friends\nInvite your friends and you will get bonuses. Help a friend move \nto the next leagues and you will get even more bonuses.  \n\n⏳ Token listingAt the end of the season, a token will be released and distributed among the players. Dates will be announced in our announcement channel. Stay tuned!  ';
        bot.sendMessage(message.chat.id, messagetext, options);
    }
});
