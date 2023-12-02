import { hydrate, type HydrateFlavor } from '@grammyjs/hydrate'
import { Bot, type Context } from 'grammy'

import { fetchSong, SongUrlSchema } from './songwhip/fetch-song'

const TOKEN = Bun.env.TELEGRAM_TOKEN as string

type MyContext = HydrateFlavor<Context>
const bot = new Bot<MyContext>(TOKEN)
bot.use(hydrate())

// Suggest commands to the user
await bot.api.setMyCommands([
    { command: 'start', description: 'Start the bot' },
    { command: 'song', description: 'Obtains multiple links for the song' },
])

// Start command
bot.command('start', async (ctx) => await ctx.reply('Welcome! Up and running.'))

bot.command('song', async (ctx) => {
    const message = SongUrlSchema.safeParse({ url: ctx.match })

    if (!message.success) {
        return await ctx.reply('Invalid URL')
    }

    const statusMessage = await ctx.reply('Buscando en cuenca tu canción...')

    const song = await fetchSong(message.data.url)
    await statusMessage.editText('Encontrada tu canción, ahora te la mando si eso...')

    const apple = song.data.item.links.itunes
    const spotify = song.data.item.links.spotify
    const youtube = song.data.item.links.youtube

    const appleLink = apple.length > 0 ? apple[0].link.replace('{country}', 'ES') : 'No disponible'
    const spotifyLink = spotify.length > 0 ? spotify[0].link : 'No disponible'
    const youtubeLink = youtube.length > 0 ? youtube[0].link : 'No disponible'

    const messageText = `\\- 🍎 [Apple Music](${appleLink}) \n\\- 🎧 [Spotify](${spotifyLink})\n\\- 📺 [Youtube](${youtubeLink})`
    await ctx.reply(messageText, { parse_mode: 'MarkdownV2' })
})

bot.on('message', async (ctx) => {
    // Ignore messages from bots
    if (ctx.from.is_bot) return
    if (ctx.message?.text === undefined) return

    if (
        ctx.message?.text.includes('music.apple.com') ||
        ctx.message?.text.includes('open.spotify.com') ||
        ctx.message?.text.includes('youtube.com')
    ) {
        const message = SongUrlSchema.safeParse({ url: ctx.message?.text })

        if (!message.success) {
            return await ctx.reply('La url no es valida marica')
        }

        const statusMessage = await ctx.reply('Buscando en cuenca tu canción...')

        const song = await fetchSong(message.data.url)
        await statusMessage.editText('Encontrada tu canción, ahora te la mando si eso...')

        const apple = song.data.item.links.itunes
        const spotify = song.data.item.links.spotify
        const youtube = song.data.item.links.youtube

        const appleLink = apple.length > 0 ? apple[0].link.replace('{country}', 'ES') : 'No disponible'
        const spotifyLink = spotify.length > 0 ? spotify[0].link : 'No disponible'
        const youtubeLink = youtube.length > 0 ? youtube[0].link : 'No disponible'

        const messageText = `\\- 🍎 [Apple Music](${appleLink}) \n\\- 🎧 [Spotify](${spotifyLink})\n\\- 📺 [Youtube](${youtubeLink})`
        await ctx.reply(messageText, { parse_mode: 'MarkdownV2' })
    }
})

// Start the bot (using long polling)
bot.start().catch(console.error)
