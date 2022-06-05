import Header from "./sections/fixed/Header"
import HomeBody from "./sections/HOME/homeBody"
import AsideRight from "./sections/fixed/AsideRight"
import bgHome from "../images/pride-banner-2022-ii.jpg"

import { useState } from "react"
import "./App.css"

function App() {

  const [headerNav, setHeaderNav] = useState(<HomeBody/>)
  const [bg, setBg]=useState("bgHome")
    
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
