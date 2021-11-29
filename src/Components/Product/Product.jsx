import "./Product.css";
import Hover from "../../img/service.jpg";
const Product = () => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      Web service
      <img src={Hover} alt="" />
    </div>
  );
};

export default Product;
