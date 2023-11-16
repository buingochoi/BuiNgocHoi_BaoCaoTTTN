import { Link } from "react-router-dom";

function CategoryItem() {
    return ( 
         <option value>
            <Link to={"/san-pham/"+props.category.slug}>
                <h3>{props.category.name}</h3>
            </Link>
        </option>

     );
}

export default CategoryItem;