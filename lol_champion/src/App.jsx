import Header from "./sections/fixed/Header"
import HomeBody from "./sections/HOME/homeBody"
import InventoryBody from "./sections/Inventory/InventoryBody"
import AsideRight from "./sections/fixed/AsideRight"

import { useState } from "react"
import "./App.css"

function App() {

  const [bg, setBg]=useState("bgHome")
  const [headerNav, setHeaderNav] = useState(<HomeBody setBg={setBg}/>)
  console.log(bg)
    
  return (
    <div className="main"> 
      <div id={bg}>
        <Header setHeaderNav={setHeaderNav} setBg={setBg}/>
        {headerNav}
      </div>
      < AsideRight />
    </div>
  )
}

export default App
