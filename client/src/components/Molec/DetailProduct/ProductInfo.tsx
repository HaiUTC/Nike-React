import { useState } from "react";
import TitleProduct from "../../Atom/TitleProduct";
import SelectSize from "../../Atom/SelectSize";
import Description from "./Description";
import ButtonAddProduct from "./ButtonAddProduct";
import SelectColorDetailProduct from "../../Atom/SelectColorDetaiProduct";

const ProductInfo = ({data,changeIndexPoster}) => {
    const [size, setSize] = useState(0);
    const [index,setIndex] = useState(0)
    const [selected, setSelected] = useState(0)
    const [isSize, setIsSize] = useState(true);
    const changeSize = (value) => {setSize(value)}
    const haveSize = (val) => {setIsSize(val)}
    return (
        <>
            <TitleProduct name={data.name} price={data.price} title={data.title} />
            <SelectColorDetailProduct data={data.poster} changeIndexPoster={changeIndexPoster} setSelected={setSelected} selected={selected} setIndex={setIndex}/>
            <SelectSize data={data.size} haveSize={isSize} changeSize={changeSize} />
            <ButtonAddProduct />
            <Description color={data.poster[index].color} description={data.description} />
        </>
    )
}
export default ProductInfo