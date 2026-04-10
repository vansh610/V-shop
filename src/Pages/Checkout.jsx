
import React,{useState} from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import "./Checkout.css"
import { useSelector } from 'react-redux'

function Checkout() {
    const navigate=useNavigate()
    const items=useSelector(state =>state.cart)
    const total=items.reduce((a,b)=>a+b.price,0)
    const[name,setName] = useState("")
    const[address,setAddress] = useState("")
    const[city,setCity] = useState("")
    const[pincode,setPincode]=useState("")
    const[payment,setPayment]=useState("")
    if(items.length===0){
        return (
        <div className="empty-cart">
      <h2>Your Cart is Empty</h2>
      <p>Add some products to continue shopping</p>
    </div>
        )
    }
    const handleOrder = ()=>{
        if
        (name.trim() ==="" ||
        address.trim() ==="" ||
        city.trim() ==="" ||
        pincode.trim() ==="" ||
        payment ===""
        ) {
            alert("Please fill all details")
        }else{
        alert("Order Placed Successfully")
        navigate("/ordersuccess")
        }
    }
    return(
        <div className="checkout">
            <h1>CheckOut Page</h1>
            <div className="checkout-cont">
            <div className="checkout-left">
                <div className='section'>
                <h2>Delivery Address</h2>
                <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                <input type="text" placeholder="Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
                </div>
                <div className='section'>
                <h2>Payment Method</h2>
               
                <div className="Trans">
             <label className="payment-option"><input type="radio" name="pay" value="upi" onChange={(e)=>setPayment(e.target.value)} /><span>UPI</span> </label>
            <label  className="payment-option"><input type="radio" name="pay" value="debit" onChange={(e)=>setPayment(e.target.value)}/><span>Debit Card</span> </label>
            <label  className="payment-option"><input type="radio" name="pay" value="cod" onChange={(e)=>setPayment(e.target.value)}/><span>Cash on Delivery</span> </label>
            </div>
                </div>
                </div>
                <div className="checkout-right">
                    {items.map((item)=>(
                        <div className="order-item" key={item.id}>
                        
                    
                    {/* <h2>Order summary</h2> */}
                    <img src={item.image} alt="" />
                    <div className="order-details">
                    <p>{item.name}</p>
                    <h3>Rs:{item.price}</h3>
                    <p>Delivery: FREE</p>
                    </div>
                    </div>
                    ))}
                    <hr />
                    <h2>Total: Rs{total}</h2>
                    <button className="place-order" onClick={handleOrder}>
                        Place Order
                    </button>
                </div>
            </div>
            </div>
            
       
    )
 
}

export default Checkout