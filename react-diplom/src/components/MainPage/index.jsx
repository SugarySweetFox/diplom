import  classes from "./index.module.css";
import pic_index_img from "../../img/pic_index.png"

const MainPage=()=>{
   
    return <div className={classes.container}>
         <div className={classes.site_index}>
            <div className={classes.left_index}>
                <div className={classes.top_left_index}>
                    <h1>Воплотим все ваши идеи в жизнь</h1>
                    <p className={classes.grey}>Что бы реализовать свои идеи в полном масштабе, вам нужно просто зарегистрироваться</p>
                </div>
                <div className={classes.bottom_left_index}>
                    <a href=""><button>Регистрация</button></a>
                    <a href=""><button className={classes.border_btn}>Вход</button></a>
                </div>
            </div>
            <div className={classes.right_index}>
                <img src={pic_index_img} alt="" className={classes.pic_index_img} /> 
            </div> 
        </div>
    
        <div className={classes.iti}>
            <h3>Implement the idea</h3>
            <h4>Цель нашего сайта помочь фотографам воплотить их идеи в жизнь. А так же моделям преобрести услуги за более низкую стоимость  </h4>
        </div>    
    </div>
}

export default MainPage;