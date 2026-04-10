import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummydata } from '../dummydata'
import "./ProductDetails.css"
import { AddItem } from '../redux/cartSlice'
import { useDispatch,  } from 'react-redux'
// import { AddItem } from '../redux/cartSlice'

function ProductDetails() {
  const dispatch= useDispatch()
  const { id } = useParams()
  const product = dummydata.find((item) => item.id === Number(id))
  const navigate=useNavigate()

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <div className="product-details-container">
      <div className="product-left">
        <img src={product.image} alt={product.name} />
        </div>

      <div className="center">
        <h1>{product.name}</h1>
        <p><strong>Category:</strong> {product.category}</p>
        <p className='desc'>{product.desc}</p>
       
          <p>High Quality Product</p>
          <p>1 Year Warranty</p>
          <p>Easy Return Policy</p>

          <hr/>
          
          <p className="hr-line"> Shipping & Import Charges to India Details 
          Available at a lower price from other sellers that may not offer free Prime shipping.</p>
          <h2><b>About this item</b></h2>
        <ul className="li">
          {product.about?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <hr/>
          <h2>Available Offers</h2>
<ul>
  <li>💳 10% Instant Discount on Credit Card</li>
  <li>🚚 Free Delivery on Orders Above ₹2499</li>
  <li>🎁 Special Offer: Buy 2 Get 1 Free</li>
  <li>🔥 Limited Time Deal</li>
</ul>
<hr/>
          <h2>Delivery</h2>
<p>Delivery in 3-5 business days</p>
<p>Cash on Delivery Available</p>
<p>Easy 7-day return policy</p>
        </div>
        <div className="Right">
          <h2 className="price">Rs{product.price}</h2>
          <p>Final price may vary depending on seller, shipping, and taxes.
            Additional delivery charges may apply based on location.</p>
           <h2 className="price">Rs:{product.price}</h2>

            <p> Limited Time Deal</p>
            <p>M.R.P: <del>Rs:{product.price + 2000}</del></p>
            <p>You Save: ₹2000 (10%)</p>

            <p>🚚 FREE Delivery in 3-5 days</p>
            <p>Cash on Delivery available</p>

            <p>✅ In Stock</p>
            <p>Sold by: Trusted Seller</p>

            <p>🔁 7 Days Replacement</p>
            <p>🛡️ 1 Year Warranty</p>

        <button className="bttn" onClick={()=>{
          dispatch(AddItem({
            id:product.id,name:product.name,price:product.price,image:product.image
          }))
          alert("Product Successfully added to cart")
        }
        }
         >Add to cart</button>
        
        <button className="btn-buy" onClick={()=>
        navigate("/checkout",{state:product})}
       >Buy Now</button>
        
        </div>
       
      </div>
    // </div>
  )
}

export default ProductDetails