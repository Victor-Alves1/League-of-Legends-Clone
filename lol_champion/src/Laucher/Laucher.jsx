import Header from "./sections/fixed/Header/Header"
import HomeBody from "./pages/homeBody"
import InventoryBody from "./pages/InventoryBody"
import AsideRight from "./sections/fixed/AsideRight/AsideRight"

import { useParams } from "react-router-dom"
import "./Laucher.css"

export const Laucher = () => {
    const slug = useParams()
    function bodyContent(props){
        switch(props){
            case "home":
                return <HomeBody />
      
            case "inventory":
              <InventoryBody />
            break
      
            default:
              <HomeBody />
            break
          }
    }
    

    return (
        <> 
            <div id="bgDefault">
                <Header />
                {
                 bodyContent(slug)
                }
            </div>
            < AsideRight />
        </>           
    );
}
