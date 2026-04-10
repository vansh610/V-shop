import React from 'react'
import "./Cart.css"
import CartCard from '../../components/cartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from "../../assets/emptycart.png"
import { useNavigate } from 'react-router-dom'
function Cart() {
    let items=useSelector(state=>state)
    let total=items.cart.reduce((a,b)=>a+b.price,0)
  const navigate=useNavigate();
  const handleBuyNow = (item) => {
    navigate("/checkout",{state:item})
  }
    
  return (
    <div className="cart-container">

  {/* LEFT SIDE */}
  <div className="cart-left">
    {items.cart.length <= 0 ? (
      <div className="empty-cart">
        <img src={ec} alt="" />
        <h1>Empty Cart</h1>
      </div>
    ) : (
      items.cart.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          name={item.name}
          price={item.price}
          image={item.image}
          id={item.id}
          handleBuyNow={handleBuyNow}
        />
      ))
    )}
  </div>

  {/* RIGHT SIDE (IMPORTANT) */}
  <div className="price-section">
    <span>Total Product : {items.cart.length}</span>
    <span>Total Price : ₹{total}</span>
    <hr />
    <h3>Total Amount : ₹{total}</h3>

    <button 
      className="check-btn"
      onClick={() => navigate("/checkout",{state:items.cart})}
    >
      Proceed to Buy
    </button>
  </div>

</div>
  )
}
export default Cart
