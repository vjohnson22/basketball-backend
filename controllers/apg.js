const Apg = require('../db/models/apg')


module.exports = {
    index: (req,res) => {
        Apg.find({}).then(data => {
            res.json(data)
        })
    },
    show: (req,res) => {
        Apg.find({ 
            startYear: { $gte: req.params.startYear, $lte: req.params.endYear }
            })
            .then(apgData => {
                res.json(apgData)    
            })
         }
    
}    
       
    