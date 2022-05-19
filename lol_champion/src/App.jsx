//function wrap() { var args = new Array(arguments.length); for (var i = 0; i < args.length; i++) { args[i] = arguments[i]; } return fn.apply(thisArg, args); }
import axios from "axios"
import { useState } from "react"
const apiJson= "http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json"
const caraCampeao= "http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/"
const arrayChampions= ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bardo', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho’Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan Iv', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai’Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle',  'Kayn', 'Kennen', 'Kha’Zix', 'Kindred', 'Kled', 'Kog’Maw', 'Leblanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu E Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Rek’Sai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel’Koz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']

function App() {
  function mostrarCampeoes() {
      axios.get("http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json")
      .then(response=>response.data.data)
      .then(response=>{
        for(let propriedade in response){
          console.log(propriedade)
          
        }          
      })
      .catch(erro => console.error("ops! ocorreu um erro" + erro)) 
      
  }
  mostrarCampeoes()
  

  return (
    <div className="App">
      <p id="teste">
        Campeão:
      </p>
    </div>
  )
}

export default App
