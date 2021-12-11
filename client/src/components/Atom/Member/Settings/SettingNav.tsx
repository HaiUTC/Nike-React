import router, { useRouter } from "next/router";


const SettingNav = ({data,changeEleActive}) => {
    const dataNav = [
        {
            icons : "/static/icons/userSetting.svg",
            name : 'account-detail',
            text : "Account Details"
        },
        {
            icons : "/static/icons/payment.svg",
            name : "payment-methods",
            text : "Payment Methods"
        },
        {
            icons : "/static/icons/delivery.svg",
            name : "delivery-addresses",
            text : "Delivery Addresses"
        },
        {
            icons : "/static/icons/preferences.svg",
            name : "shop-preferences",
            text : "Shop Preferences"
        },
        {
            icons : "/static/icons/comunication.svg",
            name : "communication-preferences",
            text : "Communication Preferences"
        },
        {
            icons : "/static/icons/privacy.svg",
            name : "privacy",
            text : "Privacy"
        },
        {
            icons : "/static/icons/profileVisi.svg",
            name : "profile-visibility",
            text : "Profile Visibility"
        },
        {
            icons : "/static/icons/LinkedAcc.svg",
            name : "linked-accounts",
            text : "Linked Accounts"
        },
    ]
    const showContent = (value) => {
        changeEleActive(value)
    }
    return (
        <div>
            <ul>
                {dataNav.map((item,index) => 
                    <li className='py-2' key={index}>
                        <div className='flex cursor-pointer border-b-2 pb-4 border-gray-100 lg:pb-0 lg:border-0' onClick={() => showContent(item.name)}>
                            <img className='w-7' src={item.icons}/>
                            <span id={(data===item.name) ? "underline" : null} className='text-base hover:text-gray-500 text-gray-800 ml-4'>{item.text}</span>
                        </div>
                    </li>
                )}
            </ul>  
        </div>
    );
}

export default SettingNav;