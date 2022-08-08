const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())

const dbConnect = require('./dbConnect')

app.use(express.json())

const port = process.env.PORT || 5000

const path = require('path')

const userRoute = require('./routes/userRoute')

app.use('/api/users', userRoute)

if(process.env.NODE_ENV === 'production')
{
    app.use('/', express.static('client/build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(--direname, 'client/build/index.html'));
    })
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))