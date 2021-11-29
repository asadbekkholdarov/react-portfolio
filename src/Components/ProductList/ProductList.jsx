import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Create & inspire. It's me</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea,
          dolore iatis sapiente.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
