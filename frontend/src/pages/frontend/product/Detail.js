import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import urlImage from "../../../Config";
import ProductItems from "../../../components/frontend/ProductItems";
import {IoReturnUpBackOutline} from "react-icons/io5";

function Detail() {
  const {slug} = useParams();
    const [product, setProduct] = useState([]);
    const [product_orther, setProductOrther] = useState([]);

    useEffect(function () {
      (async function () {
        await productservice.getProductBySlug(slug).then(function (result) {
            if(result.data.success==true)
            {
                setProduct(result.data.product);
                setProductOrther(result.data.product_other);
            }
        });
      })();
    }, [slug]);
  return ( 
    <>
    <section className="py-3 bg-light">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/"><IoReturnUpBackOutline/> Trang chủ</a>
          </li> 
        </ol>
      </div>
    </section>
    {/* ========================= SECTION CONTENT ========================= */}
    <section className="section-content bg-white padding-y">
      <div className="container">
        {/* ============================ ITEM DETAIL ======================== */}
        <div className="row">
          <aside className="col-md-6">
            <div className="card">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                    {" "}
                    <a href="#">
                    <img src={urlImage+"product/"+product.image} alt="hinh" className="img-fluid w-100"/>
                    </a>
                  </div>
                </div>{" "}
                {/* slider-product.// */}
                
                {/* slider-nav.// */}
              </article>{" "}
              {/* gallery-wrap .end// */}
            </div>{" "}
            {/* card.// */}
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 className="title mt-3"><h1>{product.name}</h1> </h2>
              
              {/* rating-wrap.// */}
              <div className="mb-3">
                <var className="price h4">{product.price_sale}</var>
                <span className="text-muted">{product.price} </span>
              </div>{" "}
              {/* price-detail-wrap .// */}
              <div className="row">
                <div className="col-md-12">
                  {product.detail}
                </div>
              </div>
              <dl className="row">
                <dt className="col-sm-3">Manufacturer</dt>
                <dd className="col-sm-9">
                  <a href="#">Great textile Ltd.</a>
                </dd>
                <dt className="col-sm-3">Guarantee</dt>
                <dd className="col-sm-9">2 year</dd>
                <dt className="col-sm-3">Delivery time</dt>
                <dd className="col-sm-9">3-4 days</dd>
                <dt className="col-sm-3">Availabilty</dt>
                <dd className="col-sm-9">in Stock</dd>
              </dl>
              <div className="form-row  mt-4">
                <div className="form-group col-md flex-grow-0">
                  <div className="input-group mb-3 input-spinner">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-plus"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-minus"
                      >
                        {" "}
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="form-group col-md">
                  <a href="#" className="btn  btn-primary">
                    <i className="fas fa-shopping-cart" />{" "}
                    <span className="text">Add to cart</span>
                  </a>
                  
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </article>{" "}
            {/* product-info-aside .// */}
          </main>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
        {/* ================ ITEM DETAIL END .// ================= */}
      </div>{" "}
      {/* container .//  */}
    </section>
    {/* ========================= SECTION CONTENT END// ========================= */}
    {/* ========================= SECTION  ========================= */}
    <section className="section-name padding-y bg">
      <div className="container">
        <div className="row">
            <h5 className="title-description"><h2>Sản phẩm cùng loại</h2></h5>
            <div className="row">
                    {product_orther.map(function(product,index){
                        return <ProductItems key={index} product={product}/>
                    })}
                </div>
            
            
          
        </div>{" "}
        {/* row.// */}
      </div>{" "}
      {/* container .//  */}
    </section>
  </>

   );
}

export default Detail;

