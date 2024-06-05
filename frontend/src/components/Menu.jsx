import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../cartContest';
import { data } from '../restApi.json';
import toast from 'react-hot-toast';
import axios from 'axios';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  

  const handleReservation = async (element) => {
    console.log(element)

    try {
      const res  = await axios.post(
        "http://localhost:5000/api/v1/reservation/createreservation",
        {element},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data)
      toast.success(res.data.message);
      
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message+ "!. OR Please Login!!");

    }
  };


  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
          </div>
          <div className="dishes_container">
            {
              data[0].dishes.map(element => (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  {/* <button>{element.category}</button> */}
                  <button onClick={() => {
                    handleReservation(element)
                    toast.success("Added To Cart")
                  }}>Add to cart</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
