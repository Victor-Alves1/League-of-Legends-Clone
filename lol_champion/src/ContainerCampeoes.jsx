import { useEffect, useState } from "react"
import { FireSimple, BookmarkSimple } from "phosphor-react"
import "./ContainerCampeoes.css"

const ContainerCampeoes = () => {
    const [camp, setCamp]=useState([])
    const [nomes, setNomes]=useState([])
    let fotenhas=[]
  
    const basicFetch = async ()=>{
        const req = await fetch ("http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json")
        const dado = await req.json()
        const dados = await dado.data
        setCamp(JSON.stringify(dados))
        setNomes(Object.keys(dados))
        console.log()
    }
    useEffect(()=>{
      basicFetch().catch(e=>console.log(e))
    },[])
    console.log()

    for(let i=0; i<=158; i++){
      fotenhas.push(
        <span className="championBanner">
            <div className="championPhotoAndMastery">
              <BookmarkSimple weight="fill" className="masteryLevel"/>
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomes[i]}_0.jpg`} alt="" />
              <div className="mastery">
                <span>
                  <FireSimple className="FireIconMastery" size={16} weight="fill"/>
                </span> 
                <span>0</span>
              </div>
            </div>
            <span>{nomes[i]}</span>
        </span>
      )
    }
    // for(let i=0; i<=159; i++){
    //   fotenhas.push(<img src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${nomes[i]}.png`} alt="" />)
    // }
    return (
      <div className="container">
        <svg style={{width:0,height:0,position:"absolute"}} aria-hidden="true" focusable="false">
          <linearGradient id="my-cool-gradient" x="0" x2="0" y="1" y2="1">
            <stop offset="0%" stopColor="#28220f" />
            <stop offset="100%" stopColor="#3d3011" />
          </linearGradient>
        </svg>
            {fotenhas}
        </div>    
    );
}
 
export default ContainerCampeoes;