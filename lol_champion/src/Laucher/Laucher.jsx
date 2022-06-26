import Header from "./sections/fixed/Header/Header"
import HomeBody from "./pages/homeBody"
import InventoryBody from "./pages/InventoryBody"
import AsideRight from "./sections/fixed/AsideRight/AsideRight"

import { useParams } from "react-router-dom"
import { useState } from "react"

import "./Laucher.css"

export const Laucher = () => {
    const [bg, setBg] = useState("bgHome")

    const slug = useParams()

    function bodyContent(props){
        switch(props){
            case "home":
                return <HomeBody />
      
            case "inventory":
                return <InventoryBody />

            default:
                return <HomeBody />
          }
    }

    

    return (
        <> 
            <div id={bg}>
                <Header />
                {
                 bodyContent(slug.slug)
                }
            </div>
            < AsideRight />
        </>           
    );
}
