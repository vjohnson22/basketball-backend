const Bpg = require('../db/models/bpg')


module.exports = {
    index: (req,res) => {
        Bpg.find({}).then(data => {
            res.json(data)
        })
    },
    show: (req,res) => {
        Bpg.find({ 
            startYear: { $gte: req.params.startYear, $lte: req.params.endYear }
            })
            .then(bpgData => {
                res.json(bpgData)    
            })
         }
    
}    
       
    