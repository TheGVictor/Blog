
import * as contentful from"contentful"

export const client = contentful.createClient({
    space: `${import.meta.env.VITE_ID}`,
    accessToken: `${import.meta.env.VITE_KEY}`
})

export const fetchAuthorDetails = async (authorId) => {
    try {
      const authorEntry = await client.getEntry(authorId)
      return authorEntry.fields; // Aqui você tem acesso ao nome, foto, etc.
    } catch (error) {
      console.error("Erro ao buscar detalhes do autor: " + error.message)
    }
  }


export const getQuota = async() => {
    const url = `https://api.hgbrasil.com/finance/quotations?format=json-cors&key=${import.meta.env.VITE_HG_KEY}`
    const res = await fetch(url, {
        header: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin": "GET, PUT, POST, DELETE"
          }
    })
    const data = await res.json()
    const currency = 
        {
        path: data.results.currencies
    }


    return currency
}
 