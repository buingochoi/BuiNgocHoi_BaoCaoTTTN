import Slider from "../Slider/Slider";
import ProductHome from "./ProductHome";
import { useEffect, useState } from "react";
import Sale from "../product/Sale";
import brandservice from "../../../services/BrandService";
import Post from "../post/Post";
function Home() {
  const [brands, setBrands] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getAll().then(function (result) {
        setBrands(result.data.data);
      });
    })();
  }, []);
  return ( 

    <section className="maincontent">
      <div className="container">
      <Slider/>
      <Sale/>
      {brands.map((brand, index)=>{
        return <ProductHome brand={brand} key={index}/>
      })}
      <Post/>
      </div>
    </section>
 

   );
}

export default Home; 
