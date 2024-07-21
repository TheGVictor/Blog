import { useEffect, useState } from 'react'


import './App.css'
import { client } from '../server'
import PostModal from './components/PostModal'


function App() {

  const [posts, setPosts] = useState([])

 useEffect(()=>{

    const getPost = async() => {
      try{
      const res = await client.getEntries({ content_type: 'pageLanding'})
      console.log(res)

        setPosts({
          title: res.includes.Entry[0].fields.title,
          desc: res.includes.Entry[0].fields.shortDescription,
          date: res.includes.Entry[0].fields.publishedDate,
          content: res.includes.Entry[0].fields.content.content[0].content[0].value,
          author: res.includes.Entry[0].fields.author.sys.id,
          image: res.includes.Entry[0].fields.featuredImage.fields.file.url,
          category: res.includes.Entry[0].fields.internalName
        })

    }catch(error){
      console.error("Erro: "+error.message)
    }
  }
    
    getPost()
 },[])

  return (
    <div className="container">
      <header className="header">
      <h1 className='logoTitle'>Daily DevSpoon</h1>
        <ul className="headerMenu">
          <li className="menuItem">Home</li>
          <li className="menuItem">Contato</li>
          <li className="menuItem">Inscreva-se!</li>
        </ul>
      </header>

      <main className="content">
        <marquee behavior="" direction="" className="economyInfo">Dolar &copy;</marquee>
        <PostModal title={posts.title} description={posts.desc} image={posts.image} category={posts.category}/>
       </main>
      
    </div>
  )
}

export default App
