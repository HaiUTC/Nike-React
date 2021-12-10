import dynamic from 'next/dynamic'
import { useState } from "react";
const TitleProduct = dynamic(() => import("../../Atom/Product/TitleProduct"),{ ssr: false })
const SelectSize = dynamic(() => import("../../Atom/Product/SelectSize"),{ ssr: false })
const Description = dynamic(() => import("./Description"),{ ssr: false })
const ButtonAddProduct = dynamic(() => import("./ButtonAddProduct"),{ ssr: false })
const SelectColorDetailProduct = dynamic(() => import("../../Atom/Product/SelectColorDetaiProduct"),{ ssr: false })

const ProductInfo = ({data,changeIndexPoster,productId}) => {
    const [size, setSize] = useState(0);
    const [index,setIndex] = useState(0)
    const [selected, setSelected] = useState(0)
    const [isSize, setIsSize] = useState(true);
    const changeSize = (value) => {setSize(value)}
    const haveSize = (val) => {setIsSize(val)}
    return (
        <>
            <div className='hidden lg:block'><TitleProduct name={data.name} price={data.price} title={data.title} /></div>
            <SelectColorDetailProduct data={data.poster} changeIndexPoster={changeIndexPoster} setSelected={setSelected} selected={selected} setIndex={setIndex}/>
            <SelectSize data={data.size} isSize={isSize} changeSize={changeSize} haveSize={haveSize}/>
            <ButtonAddProduct urlImage={data.poster[0].url[0]} name={data.name} title={data.title} size={size} price={data.price} haveSize={haveSize} color={data.poster[index].color} productId={productId}/>
            <Description color={data.poster[index].color} description={data.description} />
        </>
    )
}
export default ProductInfo