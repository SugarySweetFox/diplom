import  classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";
import ChatWith from "../ChatWith";



const MessagePage=()=>{


    return <>

        <div className={classes.block_brown}>
            <h3 className={classes.center}>Мои сообщения</h3>
            <div className={classes.message}>
                
                <ChatWith />
                <ChatWith />
                
            </div>
        </div>
    </>
}
export default MessagePage;