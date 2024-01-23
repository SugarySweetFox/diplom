import express from 'express';
import router from './router.js';
import {sequelize} from './db.js';
import fileUpload from 'express-fileupload';
import authRouter from './authRouter.js'
import createInfo from './utils/create.js';

const app = express()
const PORT = 3001;

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
app.use('/auth', authRouter)


async function startApp() {
    try {
        sequelize.sync().then(()=>{
          // createInfo();

         





            app.listen(PORT, function(){
              console.log("Сервер ожидает подключения...");
            });
          }).catch(err=>console.log(err));
          
    } catch (e) {
        console.log(e)
    }
}

startApp()
