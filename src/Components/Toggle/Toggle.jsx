import "./Toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} className="t-icon" alt="" />
      <img src={Moon} className="t-icon" alt="" />
      <div
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
        className="t-button"
      ></div>
    </div>
  );
};

export default Toggle;
