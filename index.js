const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('This is mongo');
});

app.listen(3100, ()=>console.log('Port 3100 using'));