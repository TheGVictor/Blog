import { useEffect, useState } from 'react'


import './App.css'

import PostModal from './components/Modal/PostModal'
import Header from './components/Header/Header'
import FetchPost from './FetchPost'
import { getQuota } from '../server'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'


function App() {

  const [posts, setPosts] = useState({})
  const [coin, setCoin] = useState([])
  const [loading, setLoading] = useState(true)

  const getPost = async() =>{
    try{
      const post = await FetchPost()
      setPosts(post)
      console.log(post)
    } catch(error){
      console.error(error)
    }
  }
  const getCoin = async() => {
    try{
      const data = await getQuota()
      const filteredCoins = Object.entries(data.path).filter(([currency]) => currency !== 'source')
      setCoin(filteredCoins)
      console.log(filteredCoins)
    }catch(error){
      console.error(error)
    }
  }

 useEffect(()=>{
    getPost(),
    getCoin()
    setLoading(false)
 }, [])



 const handlePost = (e) => {
  e.preventDefault()
 }

  return (

    

    <div className="container">
      <Header/>

      {loading ? (<Loading/>) : (
<>
      <marquee behavior="" className="economyInfo" scrollamount = "5">           
        {coin.map(([currency, info], i) => (
          <span key={i} className='coinItem'>
              {currency}: R${info.buy} &nbsp; {info.variation > 0 ? <span style={{color: '#00FF00'}}>+{info.variation}</span> : <span style={{color: "#FF0000"}}>{info.variation}</span>}
        </span>
     ))}
</marquee>

      <main className="content">

        <div className="generalPosts">
          <ul className='singlePosts'>
               {posts.base?.map((post, i) => (
                 <li key={post.fields.internalName}>
               <PostModal info={post}/>         
            </li>
             ))}
        </ul>
        </div>

       </main>
       </>
)}
       <Footer/>
      
    </div>
  )
}

export default App


