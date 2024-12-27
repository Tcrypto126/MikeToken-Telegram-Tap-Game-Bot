"use strict";
// const { Telegraf, Markup } = require("telegraf");
// const dotenv = require("dotenv");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // Load environment variables
// dotenv.config();
// const token = process.env.TELEGRAM_TOKEN;
// const bot = new Telegraf(token);
// bot.command("start", (ctx: any) => {
//   return ctx.reply(
//     `launch Mini App`,
//     Markup.inlineKeyboard([
//       Markup.button.webApp(`💻Launch`, "https://mike-coin-bot-1.vercel.app/"),
//     ])
//   );
// });
// bot.launch();
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const token = process.env.TELEGRAM_TOKEN; // Ensure that token is always treated as string
// Create a new Telegram bot instance
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: '💻Launch',
                        web_app: { url: 'https://mike-coin-bot-1.vercel.app/' }
                    }]
            ]
        }
    };
    bot.sendMessage(chatId, 'Launch Mini App', options);
});
bot.on('web_app_data', (msg) => {
    console.log(msg.web_app_data); // Handle incoming data from your web app if needed
});
bot.on('polling_error', (error) => {
    console.error(error); // Log any polling errors
});
