import React from "react";
import { data } from "../restApi.json";
import { apiData } from "../api/data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta
              pariatur eius et recusandae veritatis. Quasi, et molestias!
            </p>
          </div>

          <h1 className="head_cat">Break Fast</h1>
          <div className="dishes_container">
            {apiData?.map((element) => {
              if (element.category === "breakfast") {
                return (
                  <div className="card" key={element.id}>
                    <img src={element.img} alt={element.name} />
                    <h3>{element.name}</h3>
                    <h3>Order Now @{element.price}$</h3>
                    
                    <button>{element.category}</button>
                  </div>
                );
              }
            })}
          </div>
          

          <h1 className="head_cat">Lunch</h1>

          <div className="dishes_container">
            {apiData?.map((element) => {
              if (element.category === "lunch") {
                return (
                  <div className="card" key={element.id}>
                    <img src={element.img} alt={element.name} />
                    <h3>{element.name}</h3>
                    <h3>Order Now @{element.price}$</h3>
                    
                    <button>{element.category}</button>
                  </div>
                );
              }
            })}
          </div>

          <h1 className="head_cat">Dinner</h1>
          
          <div className="dishes_container">
            {apiData?.map((element) => {
              if (element.category === "dinner") {
                return (
                  <div className="card" key={element.id}>
                    <img src={element.img} alt={element.name} />
                    <h3>{element.name}</h3>
                    <h3>Order Now @{element.price}$</h3>
                    
                    <button>{element.category}</button>
                  </div>
                );
              }
            })}
          </div>

          <h1 className="head_cat">Snacks</h1>

          <div className="dishes_container">
            {apiData?.map((element) => {
              if (element.category === "snacks") {
                return (
                  <div className="card" key={element.id}>
                    <img src={element.img} alt={element.name} />
                    <h3>{element.name}</h3>
                    <h3>Order Now @{element.price}$</h3>
                    
                    <button>{element.category}</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
