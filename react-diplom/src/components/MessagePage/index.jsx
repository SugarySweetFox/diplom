import  classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";
import ChatWith from "../ChatWith";
import { getUser } from "../../store/storage";



const MessagePage=()=>{
    const [allChats, setAllChats] = useState([])
    const [authUser, setAuthUser] = useState(getUser());
    const [isLoading, setIsLoading] = useState(true);
    function refreshChats(){
        axios.get(`http://127.0.0.1:3001/api/chats-list/${authUser.id}`).then((data) => {
            console.log('chats', data.data)
            setAllChats(data.data);
        })
        
    }

    useEffect(() => {
        refreshChats()
        // console.log(allChats);
     }, []);

    return <>

        <div className={classes.block_brown}>
            <h3 className={classes.center}>Мои сообщения</h3>
            <div className={classes.message}>
                {
                    allChats && allChats.map(element => {
                        return <ChatWith message={element.message.content} name={element['user.name']} photo={element['user.photo']}/>
                    })
                }
                {/* <ChatWith name={user.name} photo={user.photo} />
                <ChatWith /> */}
                
            </div>
        </div>
    </>
}
export default MessagePage;