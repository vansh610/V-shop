//  import React from 'react'
//  import image1 from "../../assets/image1.jpg"
//  import "./product.css"
//  import {useDispatch} from "react-redux"
// import { AddItem } from '../../redux/cartSlice'
// import { useNavigate } from 'react-router-dom'
//  function Product({name,image,price,id}) {
// const navigate = useNavigate();
//   const dispatch=useDispatch()
   
//    return (
// <div className="product">
//   <div
//       className="product-info"
//       onClick={() => navigate(`/product/${id}`)}
//       style={{ cursor: "pointer" }}
//     >
    
//         <img src={image} alt="" />
//        <h3>{name}</h3>
//        <p>Rs {price}</p>
//        </div>
//          {/* <span className='name'>
//           {name}
//          </span>
//         <span className="price">Rs {price}/-</span> */}
//          <button className='add-cart-btn' 
//          onClick={()=>{
//            dispatch(AddItem({name:name,image:image,price:price,id:id}))
//          }}>Add +</button>
//         </div>

     
//    )
//  }

//  export default Product

import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { AddItem } from '../../redux/cartSlice'
function Product({ id, name, price, image }) {

  const navigate = useNavigate();
  const dispatch=useDispatch()
  return (
    <div 
      className="product"
      onClick={() => navigate(`/product/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="img-box">
      <img src={image} alt="" />
      </div>
      <div className="product-info">
      <h3>{name}</h3>
      <p>Rs {price}</p>
      </div>
      <button
        className="add-cart-btn"
        onClick={() => dispatch({ id:id, name:name, price :price, image:image })}
      >
        View Product 
      </button>
    </div>
  )
}

export default Product