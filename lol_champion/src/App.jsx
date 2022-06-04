import ContainerChampions from "./sections/Inventory/variables/champions/ContainerChampions"
import AsideLeftChampions from "./sections/Inventory/variables/champions/AsideLeftChampions"

import ItemsNav from "./sections/Inventory/inventory_fixed/ItemsNav"

import AsideRight from "./sections/fixed/AsideRight"
import Header from "./sections/fixed/Header"

import "./App.css"
import { useState } from "react"

function App() {
  const [abaSelected, setAbaSelected] = useState(
    <>
      < AsideLeftChampions />
      < ContainerChampions />
    </>
  )
    
  return (
    <>
      <Header>

      </Header>
      <main>
        <div className="items">
          <ItemsNav setAbaSelected={setAbaSelected}/>
          <div className="items-body">
            {
              abaSelected
            }
          </div>
        </div>
        < AsideRight />
      
      </main>
    </>
  )
}

export default App
