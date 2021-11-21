import { useEffect, useState } from "react"
import { useMyProfileQuery } from "../generated/graphql"
export const useCheckAuth = () => {
    const {data, loading} = useMyProfileQuery()
    const [isUser, setIsUser] = useState(false)
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

   return {isUser}
    
}
