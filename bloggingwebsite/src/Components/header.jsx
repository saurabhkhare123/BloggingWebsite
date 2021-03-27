import React from "react";

import logo from "./img/logo.png"


function header() {

  return <>

    <nav>
      <img class="logo" src={logo} alt="" />

      <div className="link">
        <a href="">Home</a>
        <div class="dropdown">
<button class="dropbtn">Services</button>
<div class="dropdown-content">

<a href="">Notes</a>
<a href="">Question Papers</a>
<a href="">Udemy Courses</a>
</div></div>
        <a href="">Technologies</a>
        <a href="">Contact</a>
      </div>

      <div className="button">
        <button href=""> Login </button>
        <button href="" >Sign Up</button>

      </div>

    </nav>



  </>



}


export default header;