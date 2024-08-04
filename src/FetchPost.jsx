import React from 'react'
import { client } from '../server'

const FetchPost = async () => {

    try{
        const res = await client.getEntries({ content_type: 'pageLanding'})
          const post = {
            base: res.includes.Entry,
          }
          return post;
  
      }catch(error){
        console.error("Erro: "+error.message)
      }

}

export default FetchPost
