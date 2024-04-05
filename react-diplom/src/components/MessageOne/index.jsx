import  classes from "./index.module.css";






function MessageOne({type}) {
    return ( <>

                {
                    type != 'my'?
                <div className={classes.left}>
                    <h6>Какое-то сообщение, о чем-то</h6>
                    <h6 className={classes.time}>12:05</h6>
                </div> :
                <div className={classes.right}>
                    <h6 className={classes.white}>Какое-то сообщение, о чем-то</h6>
                    <h6 className={classes.time_white}>12:05</h6>
                </div>
                }
    </> );
}

export default MessageOne;