import { z } from 'zod'

import { type Root } from './model'

export const fetchSong = async (url: string): Promise<Root | null> => {
    const data = await fetch('https://songwhip.com/api/songwhip/create', {
        headers: {
            'content-type': 'application/json',
            'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        },

        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify({
            url,
            country: 'ES',
        }),
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
    })
    if (data.status !== 200) {
        console.error('Error fetching song', data)
        return null
    }

    return await data.json<Root>()
}

export const SongUrlSchema = z.object({
    url: z.string().min(1).max(200).url(),
})
