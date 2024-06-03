import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          
              <div className="card" >
                <img src='Rudrani.jpg' alt={"img"} />
                <h3>{"Rudrani"}</h3>
                <p>{"Back-End Developer"}</p>
              </div>


              <div className="card" >
                <img src='vikrant pic.jpg' alt={"img"} />
                <h3>{"Vikrant"}</h3>
                <p>{"Marketting Manager"}</p>
              </div>



              <div className="card" >
                <img src='my pic2.jpg' alt={"img"} />
                <h3>{"Rahul Layak"}</h3>
                <p>{"Front-End Developer"}</p>
              </div>
             
            
        </div>
      </div>
    </section>
  );
};

export default Team;
