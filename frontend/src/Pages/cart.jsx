import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../cartContest';
import { motion } from "framer-motion";
import CartItem from '../components/cartItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Cart = () => {
    

  const [user, setUser] = useState({});
  const [cart, setCart]= useState([])
  const navigate=useNavigate();
  const [loading, setLoading]=useState(true);
  const getCurrentUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/users/current-user",
        {
          withCredentials: true,
        }
      );

      if (!res) throw new Error("error in getting curret user!!");
      setUser(res.data.data);

      console.log(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log("hii", error);
      setUser({});
      navigate('/login');
    }
  };

  useEffect(() => {
    setLoading(true)
    getCurrentUser();
    
  }, []);

  if(loading){
    return "loading...."
  }

  return (
    <section className="cart-section" id="cart">
    <div style={{display:"fixed", top:"20px", padding:"5px", backgroundColor:"#512da8", color:"white", borderRadius:"5px", margin:"10px", cursor:"pointer", width:"fit-content"}} onClick={()=>navigate('/')}>Home</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '2.5rem 0', minHeight: '70vh' }}>
          <h1 style={{ fontFamily: 'Tokyo', fontSize: '2rem', fontWeight: 'bold', color: 'blue' }}>Shopping Cart</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', borderBottom: '1px solid grey' }}>
            {user.reservations.length ? user?.reservations.map((cartItem) => (
              <CartItem
                cartItem={cartItem}
                key={cartItem}
                
              />
            )) :<div style={{}}> No data in Cart</div>}
          </div>
        
        </div>
      
      </motion.div>
    </section>
  );
};
export default Cart;

