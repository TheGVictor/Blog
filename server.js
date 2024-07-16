
import axios from "axios";

const notion = axios.create({
    baseURL: 'https://api.notion.com/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${import.meta.env.VITE_NOTION_TOKEN}`,
        'Notion-Version': '2021-08-16',

    }
})


export const fetchPosts = async() => {
    const databaseId = 'b402da29f5d74b5f96131c73214817d3'
    console.log(`https://api.notion.com/v1/databases/${databaseId}/query`)
    const response = await notion.post(`/databases/${databaseId}/query`).catch(error => console.log("Error: "+error.message))
    return response.data.results
}
