import  classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";



const MessagePage=()=>{


    return <>

        <div className={classes.block_brown}>
            <h3 className={classes.center}>Мои сообщения</h3>
            <div className={classes.message}>
                <div className={classes.block}>
                    <div className={classes.block_top}>
                        <img src="" alt="" className={classes.img_o} />
                        <div className={classes.block_text}>
                            <div className={classes.top_text}>
                                <h5>Имя</h5>
                                <h6>12:04</h6>
                            </div>
                            <h6>Какое-то сообщение, о чем-то</h6>
                        </div>
                    </div>
                    <div className={classes.line}>

                    </div>
                </div>


                <div className={classes.block}>
                    <div className={classes.block_top}>
                        <img src="" alt="" className={classes.img_o} />
                        <div className={classes.block_text}>
                            <div className={classes.top_text}>
                                <h5>Имя</h5>
                                <h6>12:04</h6>
                            </div>
                            <h6>Какое-то сообщение, о чем-то</h6>
                        </div>
                    </div>
                    <div className={classes.line}>

                    </div>
                </div>
            </div>
        </div>
    </>
}
export default MessagePage;