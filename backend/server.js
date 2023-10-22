const express = require('express')
const app = express();
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send('Hello, Express Backend!');
});
app.listen(PORT,()=>{
    console.log('serveris running on port 3000')
})