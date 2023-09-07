import React, { useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { search } from '../Api'

function Search() {

    const{q}=useParams()
    useEffect(() => {
        if(q){
            search(q,0).then(res=>{
                const dt = res.data
                if(dt){
                    console.log(dt)
                }
            })
        }
      
    }, [])
    

  return (
    <>
        <Header/>
        <NavBar/>
        <h2>Search Result:{q}</h2>
    </>
  )
}

export default Search