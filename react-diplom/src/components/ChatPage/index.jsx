import  classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";
import arr from "../../img/arrow.svg";
import mas from "../../img/mas.svg";
import { useNavigate } from "react-router-dom";
import MessageOne from "../MessageOne";



const ChatPage=()=>{
    const navigate = useNavigate();
    return <>
        <div className={classes.block_brown}>
            <div className={classes.top}>
                <img src={arr} alt="" onClick={() => navigate(-1)}/>
                <img src="" alt="" className={classes.img_o} />
                <h5>Name</h5>
            </div>
            <div className={classes.line} />
            <div className={classes.chat}>
                <MessageOne />
                <MessageOne type='my'/>
            </div>
            <div className={classes.input} >
                <input type="text" className={classes.string}/>
                <img src={mas} alt="" className={classes.mas} />
            </div>
        </div>
    </>
}
export default ChatPage;