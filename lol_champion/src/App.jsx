//function wrap() { var args = new Array(arguments.length); for (var i = 0; i < args.length; i++) { args[i] = arguments[i]; } return fn.apply(thisArg, args); }
import axios from "axios"
import { useEffect, useState } from "react"
const apiJson= "http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json"
const caraCampeao= "http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/"
const arrayChampions= ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bardo', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho’Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan Iv', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai’Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle',  'Kayn', 'Kennen', 'Kha’Zix', 'Kindred', 'Kled', 'Kog’Maw', 'Leblanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu E Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Rek’Sai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel’Koz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']
const arrayChampions2=[]

function App() {

  const [camp, setCamp]=useState([])
  const [nomes, setNomes]=useState([])
  let fotenhas=[]
  
  const basicFetch = async ()=>{
    const req = await fetch ("http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json")
    const dado = await req.json()
    const dados = await dado.data
    setCamp(JSON.stringify(dados))
    setNomes(Object.keys(dados))

    console.log(fotenhas)
  }
    useEffect(()=>{
      basicFetch().catch(e=>console.log(e))
    },[])
    console.log(fotenhas)
    // for(let i=0; i<=159; i++){
    //   fotenhas.push(<img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomes[i]}_0.jpg`} alt="" />)
    // }
    for(let i=0; i<=159; i++){
      fotenhas.push(<img src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${nomes[i]}.png`} alt="" />)
    }
    
  return (
    <div className="App">
      
      {fotenhas}
      {/* {camp} */}
    </div>
  )
}

export default App
