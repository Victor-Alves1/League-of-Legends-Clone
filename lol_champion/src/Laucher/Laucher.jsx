import Header from "./sections/fixed/Header/Header"
import HomeBody from "./sections/HOME/homeBody"
import InventoryBody from "./sections/Inventory/InventoryBody"
import AsideRight from "./sections/fixed/AsideRight/AsideRight"
import OverviewHome from "./sections/HOME/HomeComponents/Overview/OverviewHome";

import { useState } from "react"
import "./Laucher.css"

const Laucher = () => {
  const [bg, setBg]=useState("bgHome")
  const [headerNav, setHeaderNav] = useState(<HomeBody setBg={setBg}/>)

    return (
        <> 
            <div id={bg}>
                <Header setHeaderNav={setHeaderNav} setBg={setBg} />
                {headerNav}
            </div>
            < AsideRight />
        </>           
    );
}
 
export default Laucher
