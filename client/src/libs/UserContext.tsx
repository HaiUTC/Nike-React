import { createContext, useEffect, useState } from "react"
import io from 'socket.io-client'
import { useMyProfileQuery } from "../generated/graphql"


const UserContext = createContext(null)

const UserContextProvider = (props) => {
    const [socket,setSocket] = useState(null)
    const [countUserOnline, setCountUserOnline] = useState(null)

    const {data, loading} = useMyProfileQuery()
    const [user,setUser] = useState({data : null})
    const [isUser, setIsUser] = useState(false)

    //Join room
    useEffect(()=>{
        if(socket) socket.emit('countUserOnline',1111)
    },[socket])

    //Sum accout online

    useEffect(() => {
        if(socket){
            socket.on("ServerCountUserOnline", (msg) => {
                const { accOnline} = msg
                setCountUserOnline(accOnline)
            })
            return () => socket.off("ServerCountUserOnline");
        }
    },[socket])
    

    //Conect and get User have token
    useEffect(()=>{
        const connectSocket = async () => {
            const socketIo = io('http://localhost:5000', {
            withCredentials: true,
            extraHeaders: {
                "Access-Control-Allow-Origin" : "*" ,
                "Access-Control-Header":
                "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET",
            }
            })
            if(socketIo) setSocket(socketIo)    
            return () => socket.close()
        }
        connectSocket()
    },[])

    useEffect(() => {
        if(!loading){
            if(data?.MyProfile){
                setIsUser(true)
            }
            else if (!data?.MyProfile){
                setIsUser(false)
            }
        }
    },[data,loading])

    const state = {
        user : [user,setUser],
        isUser : [isUser,setIsUser],
        socket,
        userOnline : [countUserOnline]
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider}