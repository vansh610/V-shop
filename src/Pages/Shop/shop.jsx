import React, { useRef, useState } from 'react'
import "./shop.css"
import {category} from "../../category"
import { dummydata } from '../../dummydata'
import { FaShopify } from "react-icons/fa";
import Product from '../../components/Product/Product'
import { GiPlayButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
// import ProductCard from '../ProductCard'
function Shop() {
  let [cate,setcate]=useState(dummydata)
  const scrollRef=useRef()
      

const scrollCategories = (scrollOffset) => {
  scrollRef.current.scrollBy({
    left: scrollOffset,
    behavior: "smooth",
  });
};
function filterProducts(category){
        if(category==="All"){
          setcate(dummydata)
        }else{
          const updatedata= dummydata.filter((item)=>(item.category===category))
          setcate(updatedata)}
      }
  return (
    <div className='shop'>
      <div className="Heading">
        <span>Shop</span>
          <FaShopify />
      </div>
       <div className="Category-section-wrapper">
         <button className="scroll-btn left" onClick={() => scrollCategories(-200)}><GiPreviousButton /></button>
         <div className="Category-section" ref={scrollRef}>
          
         
              {category.map((item)=>(
             <div className="category-card" onClick={()=>{
              filterProducts(item.name)
             }}>
              <img src={item.image} alt="" />
              <span>{item.name}</span>
             </div>
              ))}
              </div>
              <button className="scroll-btn right"  onClick={() => scrollCategories(200)}><GiPlayButton /></button>
              </div>
               <div className="product-section">
            {cate.map((item)=>(
                <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Shop