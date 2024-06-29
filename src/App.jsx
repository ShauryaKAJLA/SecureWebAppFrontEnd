import React from "react";
import { Outlet } from "react-router-dom";

const App=()=>{
    return(
      <div >
        <div>
navbar
        </div>
        <Outlet/>
        <div>
footer
        </div>
      </div>
    )
}

export default App