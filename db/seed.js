const Player = require('./models/player')
const Searched = require('./models/searched')
const data = require('./playerData.json')



let playerSeed = data.map( datum => {
    let object = {}
    object.name = datum.PLAYER
    object.ppg = datum.PPG
    object.apg = datum.APG
    object.rpg = datum.RPG
    object.spg = datum.SPG
    object.bpg = datum.BPG
    
    return object
})


Player.deleteMany({}).then( () => {
    Player.create(playerSeed)
})


Searched.deleteMany({}).then( () => {
 Searched.create()   
}
)