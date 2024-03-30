import  classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";
import arr from "../../img/arrow.svg";



const ChatPage=()=>{
    return <>
        <div className={classes.block_brown}>
            <div className={classes.top}>
                <img src={arr} alt="" />
                <img src="" alt="" className={classes.img_o} />
                <h5>Name</h5>
            </div>
            <div className={classes.line} />
            <div className={classes.chat}>
                <div className={classes.left}>
                    <h6>Какое-то сообщение, о чем-то</h6>
                    <h6 className={classes.time}>12:05</h6>
                </div>
                <div className={classes.right}>
                    <h6 className={classes.white}>Какое-то сообщение, о чем-то</h6>
                    <h6 className={classes.time_white}>12:05</h6>
                </div>
            </div>
        </div>
    </>
}
export default ChatPage;