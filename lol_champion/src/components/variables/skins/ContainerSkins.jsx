import { useState, useEffect } from 'react'
import './ContainerSkins.css'
const ContainerSkins = () => {
    const skins = []
    const [championData, setChampionData]=useState([])
    const [champion, setChampion]=useState([])
    const [championInfo, setChampionInfo]=useState([])
  
    const basicFetch = async ()=>{
        const req = await fetch ("http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json")
        const dado = await req.json()
        const dados = await dado.data
        setChampionData(JSON.stringify(await dados))
        setChampion(Object.keys(dados))
        for(let i=0; i<=158; i++){
            const reqSkins = await fetch (`http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/${champion[i]}.json`)
            const dadoSkin = await reqSkins.json()
            const dadosSkin = await dadoSkin.data
            console.log(await dadosSkin)
        }
    }
    useEffect(()=>{
      basicFetch().catch(e=>console.log(e))
    },[])

    return (
        <div className='container'>

        </div>
    );
}
 
export default ContainerSkins;