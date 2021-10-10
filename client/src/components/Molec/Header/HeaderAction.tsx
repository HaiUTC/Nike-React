import Cart from "../../Atom/Header/Cart";
import Favorite from "../../Atom/Header/Favorite";
import Search from "../../Atom/Header/Search";

const HeaderAction = () => {
    return (
        <div className="flex justify-between">
            <Search />
            <Favorite />
            <Cart numberCart={10}/>
          </div>
    );
}
export default HeaderAction
