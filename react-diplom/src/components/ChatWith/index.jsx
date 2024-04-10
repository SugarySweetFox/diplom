import  classes from "./index.module.css";

function ChatWith({photo, name, time, message}) {
    return ( <>
                <div className={classes.block}>
                    <div className={classes.block_top}>
                        <img src={photo} alt="" className={classes.img_o} />
                        <div className={classes.block_text}>
                            <div className={classes.top_text}>
                                <h5>{name}</h5>
                                <h6>12:04</h6>
                            </div>
                            <h6>{message}</h6>
                        </div>
                    </div>
                    <div className={classes.line}>

                    </div>
                </div>
    </> );
}

export default ChatWith;