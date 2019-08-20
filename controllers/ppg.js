const Ppg = require('../db/models/ppg')
console.log(Ppg)

module.exports = {
    index: (req,res) => {
        Ppg.find({}).then(data => {
            res.json(data)
        })
    },
    show: (req,res) => {
        Ppg.find({ 
            startYear: { $gte: req.params.startYear, $lte: req.params.endYear }
            })
            .then(ppgData => {
                res.json(ppgData)    
            })
         }
    
}    
       
    