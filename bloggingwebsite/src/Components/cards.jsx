import React from "react";
import Note from "./img/notes.jpeg";
import Ques from "./img/question.jpeg";
import Tech from "./img/tech.jpeg"

function CardDisplay() {
  return <>
   <h1 style={{justifyContent:"center", textAlign:"center" , marginTop: "40px" , marginBlockStart:"30px"}}>Services</h1>
    <div className="cards" >
        

      <div className="card">
      <img src={Note} style = {{height:"85%", width:"100%"}} alt=""/>
      <button href="">Notes</button>
      </div>

      <div className="card">
      <img src={Ques} style = {{height:"85%", width:"100%"}} alt=""/>
      <button href="">Question Papers</button>

      </div>

      <div className="card">
      <img src={Tech} style = {{height:"85%", width:"100%"}} alt=""/>
      <button href="">Technologies</button>

      </div>






    </div>
    
  </>
}

export default CardDisplay;