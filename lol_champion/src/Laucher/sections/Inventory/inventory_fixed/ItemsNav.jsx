import ContainerChampions from "../variables/champions/ContainerChampions"
import AsideLeftChampions from "../variables/champions/AsideLeftChampions"
import ContainerSkins from "../variables/skins/ContainerSkins"
import AsideLeftSkins from "../variables/skins/AsideLeftSkins"

const ItemsNav = ({setAbaSelected}) => {
    
    return (
    <div className="nav-bar">
        <span onClick={()=>setAbaSelected(<>
            < AsideLeftChampions />
            < ContainerChampions />
          </>)}>Campeões</span>
        <span onClick={()=>setAbaSelected(<>
            < AsideLeftSkins />
            < ContainerSkins />
          </>)}>Skin</span>
        <span onClick={()=>setAbaSelected('emotes')}>Emotes</span>
        <span onClick={()=>setAbaSelected('runes')}>Runas</span>
        <span onClick={()=>setAbaSelected('spells')}>Feitiços</span>
        <span onClick={()=>setAbaSelected('items')}>Items</span>
        <span onClick={()=>setAbaSelected('icons')}>Ícones</span>
        <span onClick={()=>setAbaSelected('sentinels')}>Sentinelas</span>
        <span onClick={()=>setAbaSelected('chromas')}>Cromas</span>
    </div>
    );
}
 
export default ItemsNav;