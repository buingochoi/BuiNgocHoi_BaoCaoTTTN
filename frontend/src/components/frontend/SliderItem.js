import urlImage from "../../Config";

function SliderItem(props) {
  return ( <div
    className={`carousel-item ${props.location === 0 ? "active" : ""}`}
    key={props.index}
  >
    <img
      src={`${urlImage}slider/${props.item.image}`}
      alt={props.item.name}
      className="slider-image"
    />
    
  </div> );
}

export default SliderItem;