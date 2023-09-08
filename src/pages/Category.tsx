import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/Navbar'
import { firstUpper } from '../util'
import { singleCategoryProducts } from '../Api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import { title } from 'process'

function Category() {

  const [proObj, setProObj] = useState<IProducts>()
  const { catName } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    singleCategoryProducts(catName!).then( res => {
        const dt = res.data
        if ( dt ) {
            if ( dt.products.length === 0 ) {
                navigate('/')
            }else {
                setProObj(dt)
            }
        }
    })
  }, [])
  

  return (
    <>
        <Helmet>
            <title>{firstUpper(catName!)}</title>
            <meta name='description' content={firstUpper(catName!)+"Categories"}></meta>
        </Helmet>
        <Header />
        <NavBar/>
        <div className='container-fluid'>
            <h2>{firstUpper(catName!)}</h2>
            <div className='row'>
                { proObj && proObj.products.map( (item, index) => 
                    <ProductItem item={item} key={index} />
                )}
            </div>
        </div>
        
    </>
  )
}

export default Category