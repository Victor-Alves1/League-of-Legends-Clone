import { useEffect, useState } from "react"
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

    for(let i=0; i<=159; i++){
      fotenhas.push(
        <span className="championBanner">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomes[i]}_0.jpg`} alt="" />
            <span>{nomes[i]}</span>
        </span>
      )
    }
    // for(let i=0; i<=159; i++){
    //   fotenhas.push(<img src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${nomes[i]}.png`} alt="" />)
    // }
    return (
        <div className="container">
            {fotenhas}
        </div>    
    );
}
 
export default ContainerCampeoes;