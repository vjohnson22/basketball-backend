const Spg = require('../db/models/spg')


module.exports = {
    index: (req,res) => {
        Spg.find({}).then(data => {
            res.json(data)
        })
    },
    show: (req,res) => {
        Spg.find({ 
            startYear: { $gte: req.params.startYear, $lte: req.params.endYear }
            })
            .then(spgData => {
                res.json(spgData)    
            })
         }
    
}    
       
    