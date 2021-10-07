import HeaderAction from "../../Molec/Header/HeaderAction";
import HeaderList from "../../Molec/Header/HeaderList";
import HeaderLogo from "../../Molec/Header/HeaderLogo";

const HeaderSelect = () => {
    return (
        <div className="flex justify-between px-8 py-2">
          <HeaderLogo />
          <HeaderList />
          <HeaderAction/>
        </div>
    );
}
export default HeaderSelect