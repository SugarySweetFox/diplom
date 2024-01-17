import express from 'express';
import router from './router.js';
import {sequelize} from './db.js';
import fileUpload from 'express-fileupload';


const app = express()
const PORT = 5000;

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)


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
