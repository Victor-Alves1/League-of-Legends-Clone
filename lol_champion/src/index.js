const express = require('express')

const app = express()

app.use(express.json())

app.get(("/"), (req, res) => {
    return res.send(["aatrox", "ahri", "jarvan"])
})

function ChampImage(Champ){
    return `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${Champ}.json`
}
console.log(ChampImage(Aatrox))

app.listen(3333)

