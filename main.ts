import { Bot } from "https://deno.land/x/grammy/mod.ts";

const env = Deno.env.get("BOT_TOKEN");
if(!env) throw new Error("BOT_TOKEN is not defined");

const bot = new Bot(env);

bot.command("isitfurvesteryet", (ctx) => ctx.reply(isItFurvesterYet(new Date()) ? "Yes" : "No"));


function isItFurvesterYet(date: Date): boolean {

    const day = date.getDate();
    const month = date.getMonth() + 1;

    return (month === 12 && day >= 29) || (month === 1 && day <= 2);
}


bot.start({
    drop_pending_updates: true,
    onStart: () => {
        console.log(`Bot started as ${bot.botInfo?.username ?? "unknown"}`);
    }
})