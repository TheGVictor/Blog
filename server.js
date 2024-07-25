
import * as contentful from"contentful"

export const client = contentful.createClient({
    space: `${import.meta.env.VITE_ID}`,
    accessToken: `${import.meta.env.VITE_KEY}`
})

 export const getCoinInfo = async() => {

    const url=`https://openexchangerates.org/api/latest.json?app_id=${import.meta.env.VITE_COIN_KEY}`

    const response = await fetch(url)
    const data = await response.json()
    return await data
    
}