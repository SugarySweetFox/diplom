import express from 'express'
import Sequelize from 'sequelize'
import Post from './post.js'
import {sequelize} from './db.js'
const app = express()
const PORT = 5000;

// const sequelize = new Sequelize("diplom", "root", "", {
//     dialect: 'mysql',
//     host: 'localhost',
//     define: {
//         timestamps: false
//     }
// });


app.use(express.json())

app.post('/', (req, res) => {
    const {id, author, title, content, picture} = req.body
    const post = Post.create({id, author, title, content, picture})
    res.json(post)
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