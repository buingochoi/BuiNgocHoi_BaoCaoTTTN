import React, { useEffect, useState } from "react";
import sliderservice from "../../../services/SLiderService";
import SliderItem from "../../../components/frontend/SliderItem";
import { Link } from "react-router-dom";





function Slider() {
  const [sliders, setProduct] = useState([]);

  useEffect(function () {
    (async function () {
      await sliderservice.getAll().then(function (result) {
        setProduct(result.data.data);
      });
    })();
  }, []);
  return (
    <section className="section-main padding-bottom">
    {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
    <div
      id="carousel1_indicator"
      className="slider-home-banner carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators carousel-controls"></ol>
      <div className="carousel-inner">
        {sliders.map((item, index) => {
          return <SliderItem location={index} item={item} />;
        })}
      </div>
      <Link
        className="carousel-control-prev carousel-controls"
        href="#carousel1_indicator"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next carousel-controls"
        href="#carousel1_indicator"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </Link>
    </div>
    {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}

    {/* row.// */}

    {/* card.// */}
  </section>
  );
}
export default Slider;
