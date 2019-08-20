const Player = require('./models/player')
const data = require('./playerData.json')
const ppgData = require('./ppg.json')
const Ppg = require('./models/ppg')
const apgData = require('./apg.json')
const Apg = require('./models/apg')
const bpgData = require('./bpg.json')
const Bpg = require('./models/bpg')
const rpgData = require('./rpg.json')
const Rpg = require('./models/rpg')
const spgData = require('./spg.json')
const Spg = require('./models/spg')



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


Player.deleteMany({}).then(() => {
    Player.create(playerSeed)
})

Ppg.deleteMany({}).then(() => {
    Ppg.create(ppgData)
})

Apg.deleteMany({}).then(() => {
    Apg.create(apgData)
})

Bpg.deleteMany({}).then(() => {
    Bpg.create(bpgData)
})
Spg.deleteMany({}).then(() => {
    Spg.create(spgData)
})

Rpg.deleteMany({}).then(() => {
    Rpg.create(rpgData)
})
