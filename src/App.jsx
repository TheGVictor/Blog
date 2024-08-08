import { useEffect, useState } from 'react'


import './App.css'

import PostModal from './components/Modal/PostModal'
import Header from './components/Header/Header'
import FetchPost from './FetchPost'
import { getQuota } from '../server'



function App() {

  const [posts, setPosts] = useState({})
  const [coin, setCoin] = useState([])
  const [loading, setLoading] = useState(true)


 useEffect(()=>{
const getPost = async() =>{
  try{
    const post = await FetchPost()
    setPosts(post)
  } catch(error){
    console.error(error)
  }
}
const getCoin = async() => {
  try{
    const data = await getQuota()
    const filteredCoins = Object.entries(data.path).filter(([currency]) => currency !== 'source') // Remove 'source'
    setCoin(filteredCoins)
    console.log(coin)
  }catch(error){
    console.error(error)
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

        {coin.map(([currency, info], i) => (
            <span key={i}>
              {currency}: R${info.buy}
              
              &nbsp;|&nbsp;
            </span>
          ))}

        </marquee>


<ul className='singlePosts'>
        {posts.base?.map((post, i) => (
          <li key={post.fields.internalName}>
               <PostModal info={post}/>         
          </li>
        ))}
        </ul>

       </main>
      
    </div>
  )
}

export default App


