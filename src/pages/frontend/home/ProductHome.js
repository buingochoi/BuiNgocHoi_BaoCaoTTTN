import productservice from "../../../services/ProductService";
import { useEffect, useState } from "react";
import ProductItems from "../../../components/frontend/ProductItems";

function ProductHome(props) {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice
        .getProductHome(10, props.brand.id)
        .then(function (result) {
          setProducts(result.data.products);
        });
    })();
  }, []);
  return (
    <section className="padding-bottom-sm">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">{props.brand.name}</h4>
      </header>
      <div className="row row-sm">
      <div className="row">
                {products.map(function (product, index) {
                  return <ProductItems product={product} key={index} />;
                })}
              </div>
      </div>
      
    </section>
  );
}

export default ProductHome;