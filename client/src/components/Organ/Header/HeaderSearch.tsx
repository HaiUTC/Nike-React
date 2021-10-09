import Image from "next/image";
import Link from 'next/link'
const HeaderSearch = () => {
    return (
        <div className="h-full hidden relative bg-white">
				<div className="flex justify-between w-full px-8">
					<div className="pr-1/6">
                        <Link href="/"><a className="flex px-4"><Image src='/static/icons/logo.svg' width="60px" height="60px"/></a></Link>
                    </div>
                    <div className="m-auto w-full px-4 py-2 relative flex bg-gray-light rounded-md">
                        <button className="bg-transparent border-0" style={{outline : 'none'}}><Image src='/static/icons/search.svg' width="30px" height="30px"/></button>
                        <input className="w-full bg-transparent border-0 text-lg text-gray-500 text-md pl-10" style={{outline : 'none'}} type="text" placeholder="Search"/>
                    </div>
                    <div className="px-4 m-auto">
                        <Link href="/"><a className="flex justify-center items-center rounded-full p-4" ><Image src='/static/icons/exit.svg' width="30px" height="30px"/></a></Link>   
                    </div>
				</div>
				<div className="left-0 py-8">
					<h2 className="text-grayNormal text-semibold text-lg pb-4">Popular Search Term</h2>
					<ul style={{listStyle : 'none'}}>
						<li><Link href="/"><a className="w-full text-black flex text-lg">Air Force 1</a></Link></li>
						<li><Link href="/"><a className="w-full text-black flex text-lg">Jordan</a></Link></li>
						<li><Link href="/"><a className="w-full text-black flex text-lg">Air Max</a></Link></li>
						<li><Link  href="/"><a className="w-full text-black flex text-lg">Blazer</a></Link></li>
					</ul>
				</div>
			</div>
    );
}
export default HeaderSearch