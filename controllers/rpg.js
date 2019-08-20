const Rpg = require('../db/models/rpg')


module.exports = {
    index: (req,res) => {
        Rpg.find({}).then(data => {
            res.json(data)
        })
    },
    show: (req,res) => {
        Rpg.find({ 
            startYear: { $gte: req.params.startYear, $lte: req.params.endYear }
            })
            .then(rpgData => {
                res.json(rpgData)    
            })
         }
    
}    
       
    