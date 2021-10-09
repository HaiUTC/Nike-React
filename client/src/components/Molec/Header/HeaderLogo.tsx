import Image from 'next/image'
const HeaderLogo = () => {
    return (
        <div className="hd-s-nike"><a href="/"><Image src='/static/icons/logo.svg' width="60px" height="60px"/></a></div>
    );
}
export default HeaderLogo