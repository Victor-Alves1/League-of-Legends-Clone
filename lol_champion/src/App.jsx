import ContainerChampions from "./components/variables/champions/ContainerChampions"
import AsideLeftChampions from "./components/variables/champions/AsideLeftChampions"
import ContainerSkins from "./components/variables/skins/ContainerSkins"
import AsideLeftSkins from "./components/variables/skins/AsideLeftSkins"
import AsideRight from "./components/fixed/AsideRight"
import ItemsNav from "./components/fixed/ItemsNav"
import Header from "./components/fixed/Header"
import "./App.css"

function App() {

  const aba = 'Skins'
  function AbaSelected(){
    switch (aba) {
    case 'Champions':
      return(
        <div className="items-body">
          < AsideLeftChampions />
          < ContainerChampions />
        </div>
      )
    break;

    case 'Skins':
      return(
        <div className="items-body">
          < AsideLeftSkins />
          < ContainerSkins />
        </div>
        )
    break;
    default:
      console.log(`Sorry, we are out of ${aba}.`)
    break
    }
  }
      
    
  return (
    <>
      <Header>

      </Header>
      <main>
        <div className="items">
          <ItemsNav />
          {
            AbaSelected()
          }
        </div>
        < AsideRight />
      
      </main>
    </>
  )
}

export default App
