import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Order</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVNO-uw2KdxGtWiLMtUEhPvU-BYKmR6J9I5clhnh4BpJuQb__3ZdIhJ1I5t4NgG7cNmw&usqp=CAU" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Love❤️</h1>
                <h1 className="title dishes_title">FOODY</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              {/* <img className="logo" src="https://wallpapercave.com/wp/wp9476356.jpg" alt="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://i.pinimg.com/736x/18/b2/df/18b2dfd0c1c7d996b02ddf5b425f9f33.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Repete</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
