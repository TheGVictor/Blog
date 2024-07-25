import { useEffect, useState } from 'react'


import './App.css'
import { client } from '../server'
import PostModal from './components/PostModal'
import Header from './components/Header'
import { getCoinInfo } from '../server'


function App() {

  const [posts, setPosts] = useState([])
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [timestamp, setTimestamp] = useState('');


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
          category: res.includes.Entry[0].fields.internalName,
          slug: res.includes.Entry[0].fields.slug
        })
        setLoading(false)

    }catch(error){
      console.error("Erro: "+error.message)
      setLoading(false)
    }
  }

  const getCoin = async() =>{
    try{
    const data = await getCoinInfo()
    console.log(data)

    setCoin({
      info: data.rates.BRL
    })

    console.log(coin.info)
    setTimestamp(new Date(data.timestamp * 1000).toLocaleString())
    setLoading(false)
  }catch(error){
    console.error("Erro: "+error.message)
    setLoading(false)
  }
  }
    
    getPost(),
    getCoin()
 }, [])



 const handlePost = (e) => {
  e.preventDefault()
 }

  return (

    <div className="container">
      <Header/>

      <main className="content">
        <marquee behavior="" direction="" className="economyInfo">
          
           
          <p>{coin.info}</p>
        </marquee>
        
        <PostModal title={posts.title} description={posts.desc} image={posts.image} category={posts.category} slug={posts.slug}/>
        
        

       </main>
      
    </div>
  )
}

export default App


