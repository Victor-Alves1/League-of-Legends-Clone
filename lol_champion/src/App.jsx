import ContainerChampions from "./components/variables/champions/ContainerChampions"
import AsideLeftChampions from "./components/variables/champions/AsideLeftChampions"

import AsideRight from "./components/fixed/AsideRight"
import ItemsNav from "./components/fixed/ItemsNav"
import Header from "./components/fixed/Header"

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
