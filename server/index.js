const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users', (req, res)=>{
    let friends = ['Nitin','Eric','Jeddy','Cameron','Riley'];
    res.status(200).send(friends)
})

app.get('/weather/:temp', (req, res) =>{
    const {temp} = req.params
    const phrase = `<h3> It was ${temp} today</h3>`;
    res.status(200).send(phrase)
})

app.listen(4000, ()=>{console.log("Server running on port 4000")})