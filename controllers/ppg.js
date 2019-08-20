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
            startYear: { $gte: req.params.startYear }
            })
            .then(ppgData => {
                res.json(ppgData)    
            })
         }
        // Ppg.find({})
        // .where('startYear').gte(req.params.startYear).lte(req.params.endYear)
        // .then( ppgs => {
           
        //     res.json(ppgs)
        // })
}

// , $lte: req.params.endYear

        
    // show: (req,res) => {
    
       
    