import HeaderAction from "../../Molec/Header/HeaderAction";
import HeaderList from "../../Molec/Header/HeaderList";
import HeaderLogo from "../../Molec/Header/HeaderLogo";

const HeaderSelect = () => {
    return (
        <div className="flex justify-between px-8">
          <HeaderLogo />
          <HeaderList />
          <HeaderAction/>
        </div>
    );
}
export default HeaderSelect