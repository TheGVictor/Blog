
import * as contentful from"contentful"

export const client = contentful.createClient({
    space: `${import.meta.env.VITE_ID}`,
    accessToken: `${import.meta.env.VITE_KEY}`
})