import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useMyProfileQuery } from "../generated/graphql"
import RegisterModal from "../components/Templete/Modal/RegisterModal"
export const useCheckAuth = () => {
    const router = useRouter()
    const {data, loading} = useMyProfileQuery()

    useEffect(() => {
        if(!loading){
            if(data?.MyProfile){
                router.replace('/')
            }
            else if (!data?.MyProfile){
                //trigger a modal
            }
        }
    },[data,loading,router])
    return {data,loading}
}