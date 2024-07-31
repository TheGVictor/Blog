import React from 'react'
import { client } from '../server'

const FetchPost = async () => {

    try{
        const res = await client.getEntries({ content_type: 'pageLanding'})

        console.log(res)
  
          const post = {
            title: res.includes.Entry[0].fields.title,
            desc: res.includes.Entry[0].fields.shortDescription,
            date: res.includes.Entry[0].fields.publishedDate,
            p1: res.includes.Entry[0].fields.content.content[0].content[0].value,
            p2: res.includes.Entry[0].fields.content.content[1].content[0].value,
            p3: res.includes.Entry[0].fields.content.content[2].content[0].value,
            author: res.includes.Entry[0].fields.author.sys.id,
            image: res.includes.Entry[0].fields.featuredImage.fields.file.url,
            subtitle: res.includes.Entry[0].fields.featuredImage.fields.title,
            category: res.includes.Entry[0].fields.internalName,
            slug: res.includes.Entry[0].fields.slug
          }
          return post;
  
      }catch(error){
        console.error("Erro: "+error.message)
      }

}

export default FetchPost
