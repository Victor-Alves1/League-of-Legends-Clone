import ContainerChampions from "../sections/Inventory/variables/champions/ContainerChampions"
import AsideLeftChampions from "../sections/Inventory/variables/champions/AsideLeftChampions"

import ItemsNav from "../sections/Inventory/inventory_fixed/ItemsNav"

import { useState } from "react"

const InventoryBody = () => {
    const [abaSelected, setAbaSelected] = useState(
        <>
          < AsideLeftChampions />
          < ContainerChampions />
        </>
      )
    return (
        <div className="items">
            <ItemsNav setAbaSelected={setAbaSelected}/>
          
            <div className="items-body">
            {
              abaSelected
            }
          </div>
        </div>
    );
}
 
export default InventoryBody;