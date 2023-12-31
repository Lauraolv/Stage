import React from "react";
import "./Card.css";

function Card({ title, text, image, position, height_card }) {
  let width_img = 1200 / 3;

  if(position === "right"){
      return (
        <div className="Card" style={{ height: height_card }}>
          <div className="Card_Text" style={{paddingRight: '20px', textAlign:'justify'}}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          
          <div className="Card_Img">
            <img src={image} style={{ objectFit: "cover", width: width_img, height: "100%" }} />
          </div>
        </div>
      );
  }
  else if(position === "left"){
    return (
      <div className="Card" style={{ height: height_card }}>
        <div className="Card_Img">
          <img src={image} style={{ objectFit: "cover", width: width_img, height: "100%" }} />
        </div>

        <div className="Card_Text" style={{paddingLeft: '20px'}}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        
      </div>
    );
  }
}

export default Card;
