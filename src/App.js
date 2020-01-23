import React, { Component, Fragment } from "react";
import NavBar from './components/common/navBar';
import TimeComponent from './components/timeComponent';
import TimeReact from "./components/timeReact";
import User from "./components/user";

const App = ()=>{
  return(  
  <Fragment>
    <NavBar/>
    <TimeComponent/>
    <TimeReact/>
    <div id="content">
      <User/>
    <h1>Hello 4to5</h1>
    </div>
 
  </Fragment>  

  ) 
}

export default App;
