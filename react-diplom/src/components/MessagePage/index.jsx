import  classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";
import ChatWith from "../ChatWith";



const MessagePage=(id)=>{
    const [allChats, setAllChats] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    function refreshChats(){
        axios.get(`http://127.0.0.1:3001/api/chats-list/${id}`).then((data) => {
            console.log(data.data)
            setAllChats(data.data);
        })
        
    }

    return <>

        <div className={classes.block_brown}>
            <h3 className={classes.center}>Мои сообщения</h3>
            <div className={classes.message}>
                
                <ChatWith refreshChats={refreshChats} name={user.name} photo={user.photo} />
                <ChatWith />
                
            </div>
        </div>
    </>
}
export default MessagePage;