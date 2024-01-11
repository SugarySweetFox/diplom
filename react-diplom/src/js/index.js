import express from 'express'
import Sequelize from 'sequelize'
const app = express()
const PORT = 5000;

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
        sequelize.sync().then(()=>{
            app.listen(3000, function(){
              console.log("Сервер ожидает подключения...");
            });
          }).catch(err=>console.log(err));
        app.listen(PORT, () => console.log('server started' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()