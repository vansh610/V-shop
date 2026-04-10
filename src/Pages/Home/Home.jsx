import React, { useRef, useState } from 'react'
import Nav from '../../components/nav/Nav';
import bg from "../../assets/bg0.gif"
import "./Home.css"
import { category } from '../../category';
import Product from '../../components/Product/Product' 
import { dummydata } from '../../dummydata';
// import React, { useState, useRef } from 'react'
import { GiPlayButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
// import ProductCard from '../ProductCard'
function Home() {
    
    
    let [cate,setcate]=useState(dummydata)
    const scrollRef=useRef();
    function filterProducts(category){
        const updatedata= dummydata.filter((item)=>(item.category===category))
        setcate(updatedata)
    }
    const scrollCategories = (scrollOffset) => {
        if(scrollRef.current){
            scrollRef.current.scrollLeft +=scrollOffset
        }
    // scrollRef.current.scrollBy({
    //   left: scrollOffset,
    //   behavior: "smooth",
    // });
    }
  return (
    <div className='Home'>

        
        <div className="hero-bg">
            <img src={bg} alt="test"  />
        </div>

        <div className="category-section-wrapper">
            <button className='scroll-btn left' onClick={() => scrollCategories(-200)}><GiPreviousButton /></button>
        
        <div className="category-section" ref={scrollRef}>
        {category.slice(0,8).map((item)=>(
       <div className="category-card" onClick={()=>{
        filterProducts(item.name)
       }}>
        <img src={item.image} alt="" />
        <span>{item.name}</span>
       </div>
        ))}
        </div>

        <button className='scroll-btn right' onClick={()=>scrollCategories(200)}><GiPlayButton /></button>
        </div>
        <h1>Trending Products</h1>
        <div className="product-section">
            {cate.slice(0,9).map((item)=>(
                <Product name={item.name} key={item.id}   price={item.price} image={item.image} id={item.id}/>
            ))}
        </div>
    </div>
  
  )
}

export default Home