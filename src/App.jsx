import { useEffect, useState } from 'react'


import './App.css'

import PostModal from './components/PostModal'
import Header from './components/Header'
import FetchPost from './FetchPost'



function App() {

  const [posts, setPosts] = useState({})
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [timestamp, setTimestamp] = useState('');


 useEffect(()=>{
const getPost = async() =>{
  try{
    const post = await FetchPost()
    setPosts(post)
  } catch(error){
    console.error(error)
  }
}
getPost()
 }, [])



 const handlePost = (e) => {
  e.preventDefault()
 }

  return (

    <div className="container">
      <Header/>

      <main className="content">
        <marquee behavior="" direction="" className="economyInfo">           
            wee
        </marquee>
        
        <PostModal title={posts.title} description={posts.desc} image={posts.image} category={posts.category}/>
        
        

       </main>
      
    </div>
  )
}

export default App


