import { useState, useEffect } from 'react'
import './ContainerSkins.css'
const ContainerSkins = () => {
    const skins = []
    const [championData, setChampionData]=useState([])
    const [championInfo, setChampionInfo]=useState([])
    const [championJson, setChampionJson]=useState([])
       

    useEffect(()=>{
        const basicFetch2= async()=>{
            const req = await fetch ("http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json")
            const dado = await req.json()
            const dados = dado.data
            setChampionData(JSON.stringify(dados))
            setChampionJson(Object.keys(dados))
            
        }
        basicFetch2().catch(e=>console.log(e))
    }, [])
    console.log(championJson)

    const basicFetch3= async()=>
    {
        console.log(championJson[1])
        for(let i=0; i<=158; i++){
        
        const reqSkins = await fetch (`http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/${championJson[i]}.json`)
        const dadoSkin = await reqSkins.json()
        const dadosSkin = dadoSkin.data
        console.log(dadosSkin)
    }}
    basicFetch3().catch(e=>console.log(e))
    return (
        <div className='container'>

        </div>
    );
}
 
export default ContainerSkins;