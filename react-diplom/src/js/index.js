import express from 'express'

const PORT = 3000;

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('server work23')
})

app.listen(PORT, () => console.log('server started' + PORT))