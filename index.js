const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.use('/', require('./routes/player'))
app.use('/ppg', require('./routes/ppg'))    
app.use('/apg', require('./routes/apg'))    
app.use('/bpg', require('./routes/bpg'))    


app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});