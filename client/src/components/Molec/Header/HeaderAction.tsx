import { useAppSelector } from "../../../redux/hook";
import Cart from "../../Atom/Header/Cart";
import Favorite from "../../Atom/Header/Favorite";
import Search from "../../Atom/Header/Search";

const HeaderAction = () => {
    const numCart = useAppSelector((state) => state.countNumber.numCart);
    return (
        <div className="flex justify-between">
            <Search />
            <Favorite />
            <Cart numberCart={numCart}/>
          </div>
    );
}
export default HeaderAction
