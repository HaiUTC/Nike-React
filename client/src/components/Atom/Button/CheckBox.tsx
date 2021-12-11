import { useState } from "react";

const CheckBox = ({title}) => {
  const [checked, setChecked] = useState(true)
  const changeChecked = () => setChecked(!checked)
  return (
    <>
      <input className="inp-cbx" id={title} type="checkbox" defaultChecked={checked} onChange={changeChecked}/>
      <label className="cbx" htmlFor={title}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check"></use>
          </svg>
        </span>
        <span>{title}</span>
      </label>
      <svg className="inline-svg">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </>
  );
};

export default CheckBox;
