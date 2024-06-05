import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
         
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              
              <div className="profile" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="info">
                   <h3 className="name">{element.name}</h3>
                <p className="bio"> {element.designation}</p>
                </div>
               
               
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
