const YearAvg = require('../db/models/yearavg')


module.exports = {
    index: (req,res) => {
        YearAvg.find({}).then(data => {
            res.json(data)
        })
    },
    show: (req,res) => {
        YearAvg.find({ 
            startYear: { $gte: req.params.startYear, $lte: req.params.endYear }
            })
            .then(yearData => {
                res.json(yearData)    
            })
         }
    
}    
       
    