
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {HiLogin, HiPhone, HiShoppingCart} from "react-icons/hi";
import {AiOutlineUserAdd} from "react-icons/ai";
import categoryservice from "../../services/CategoryService";


function Header() {
  const [categorys, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategory(result.data.data);
      });
    })();
  }, []);
  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <Link to="/" className="brand-wrap">
                <img className="logo" src={require("../../assets/images/icons/images.png" )}/>
              </Link>
              {/* brand-wrap.// */}
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6">
              <form action="#" className="search-header">
                <div className="input-group w-100">
                  <select
                    className="custom-select border-right"
                    name="category_name"
                  > 
            
                  {categorys.map((item, index)=>{
                     
                    return (
                    <option value>
                      <Link key={index} to={`/tat-ca-san-pham/${item.slug}/1`}>{item.name}</Link>
                    </option>);
                  })}
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bạn tìm gì"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search" /> Search
                    </button>
                  </div>
                </div>
              </form>
              {/* search-wrap .end// */}
            </div>
            {/* col.// */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right">
              
                <div className="widget-header mr-3">
                  <Link to="/lien-he" className="widget-view">
                    <div className="icon-area">
                      <HiPhone/>
                    </div>
                    <small className="text"> Liên hệ  </small>
                  </Link>
                </div>
                <div className="widget-header mr-3">
                  <Link to="/cart" className="widget-view">
                    <div className="icon-area">
                      <HiShoppingCart/>
                    </div>
                    <small className="text"> Giỏ hàng </small>
                  </Link>
                </div>

                <div className="widget-header mr-3">
                  <Link to="/dang-nhap" className="widget-view">
                    <div className="icon-area">
                      <HiLogin/>
                    </div>
                    <small className="text"> Đăng nhập   </small>
                  </Link>
                </div>

                <div className="widget-header mr-3">
                  <Link to="/dang-ky" className="widget-view">
                    <div className="icon-area">
                      <AiOutlineUserAdd />
                    </div>
                    <small className="text"> Đăng ký  </small>
                  </Link>
                </div>
              </div>
              {/* widgets-wrap.// */}
            </div>
            {/* col.// */}
          </div>
          {/* row.// */}
        </div>
        {/* container.// */}
      </section>
      {/* header-main .// */}
      <nav className="navbar navbar-main navbar-expand-lg border-bottom">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main_nav"
                aria-controls="main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      to="#"
                    >
                      
                      <i className="fa fa-bars text-muted mr-2" /> Demo pages
                    </Link>
                    <div className="dropdown-menu dropdown-large">
                      <nav className="row">
                        <div className="col-6">
                          <Link to="/">Home page 1</Link>
                          <Link to="/page-index-2">Home page 2</Link>
                          <Link to="/page-category">All category</Link>
                          <Link to="/page-listing-list">Listing list</Link>
                          <Link to="/page-listing-grid">Listing grid</Link>
                          <Link to="/page-shopping-cart">Shopping cart</Link>
                          <Link to="/product-detail/1">Product detail</Link>
                          <Link to="/page-content">Page content</Link>
                          <Link to="/page-user-login">Page login</Link>
                          <Link to="/page-user-register">Page register</Link>
                        </div>
                        <div className="col-6">
                          <Link to="/page-profile-main">Profile main</Link>
                          <Link to="/page-profile-orders">Profile orders</Link>
                          <Link to="/page-profile-seller">Profile seller</Link>
                          <Link to="/page-profile-wishlist">
                            Profile wishlist
                          </Link>
                          <Link to="/page-profile-setting">Profile setting</Link>
                          <Link to="/page-profile-address">Profile address</Link>
                          <Link to="rtl-page-index-1">RTL home page</Link>
                          <Link to="/page-components" target="_blank">
                            More components
                          </Link>
                        </div>
                      </nav>
                      {/*  row end .// */}
                    </div>
                    {/*  dropdown-menu dropdown-large end.// */}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Tablet
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Apple watch
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Phụ kiện
                    </Link>
                  </li>
                  
                </ul>
                
              </div>
              {/* collapse .// */}
            </div>
            {/* container .// */}
          </nav>
    </header>
  );

}

export default Header;
