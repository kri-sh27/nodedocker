const express = require('express')
const app = express()
const port = 3001

app.get('/',(req,res)=>{
    res.json({
        "hello":"world"
    })
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})