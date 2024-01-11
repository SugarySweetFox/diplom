import express from 'express'
const Sequelize = require("sequelize");
const app = express()
const PORT = 3000;

const sequelize = new Sequelize("diplom", "root", "", {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});



app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('server work23')
})

async function startApp() {
    try {
      
        app.listen(PORT, () => console.log('server started' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()