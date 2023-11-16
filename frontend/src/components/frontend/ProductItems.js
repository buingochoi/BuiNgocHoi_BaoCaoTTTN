import { NumericFormat } from "react-number-format";
import urlImage from "../../Config";
import { Link } from "react-router-dom";
function ProductItems(props) {
  return (
    <div className="col-sm-3 mb-3">
      <div className="product-item border">
        <div className="product-image">
          <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
            <img
              src={urlImage + "product/" + props.product.image}
              className="img-fluid"
              alt="san pham"
            />
          </Link>
        </div>
        <div className="product-name p-2">
          <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
            <h5 className="text-center product-name" >{props.product.name}</h5>
          </Link>
        </div>
        <div className="product-pice p-2 fs-4 ">
          {(() => {
            if (props.product.price_sale !== 0)
              return (
                <div className="row">
                  <div className="col-6">
                    <h5>
                    <strong className="text-danger">
                      <NumericFormat
                  value={props.product.price_sale}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={0}
                  suffix={"đ"}
                />
                      <sup></sup>
                    </strong>
                    </h5>
                  </div>
                  <div className="col-6 text-end">
                  <h5>
                    <del className="text "><NumericFormat
                  value={props.product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={0}
                  suffix={"đ"}
                /></del>
                    <sup></sup>
                    </h5>
                  </div>
                </div>
              );
            else
              return (
                <div className="row">
                  <div className="col-6">
                    <strong className="text-danger fs-5">
                    <NumericFormat
                  value={props.product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={0}
                  suffix={"đ"}
                />
                      <sup></sup>
                    </strong>
                  </div>
                </div>
              );
          })()}
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
