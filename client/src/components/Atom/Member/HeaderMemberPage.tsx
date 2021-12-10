import { useRouter } from 'next/router'

const HeaderMemberPage = (props) => {
    const router = useRouter()
    const {pathname} = router
    return (
        <div className="pt-12 text-base">
            <ul className="flex justify-center items-center" >
                <li><a href="/member/profile" className={"text-black flex justify-center px-2 lg:px-4 hover:text-gray-500 " + (pathname === "/member/profile" ? "text-gray-500" : "")}>Profile</a></li>
                <li><a href="/member/inbox" className={"text-black flex justify-center px-2 lg:px-4 hover:text-gray-500 " + (pathname === "/member/inbox" ? "text-gray-500" : "")}>Inbox</a></li>
                <li><a href="/member/orders" className={"text-black flex justify-center px-2 lg:px-4 hover:text-gray-500 " + + (pathname === "/member/orders" ? "text-gray-500" : "")}>Orders</a></li>
                <li><a href="/member/favorites" className={"text-black flex justify-center px-2 lg:px-4 hover:text-gray-500 " + + (pathname === "/member/favorites" ? "text-gray-500" : "")}>Favorites</a></li>
                <li><a href="/member/settings" className={"text-black flex justify-center px-2 lg:px-4 hover:text-gray-500 " + + (pathname === "/member/settings" ? "text-gray-500" : "")}>Settings</a></li>
            </ul>
        </div>
    );
}

export default HeaderMemberPage;