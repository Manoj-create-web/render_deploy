express = require('express')
app=express()

app.get('/',(req,res)=>{
    res.send('Hello there krishna');
})

app.listen(8080,()=>{console.log(8080)});

