import Cart from "../pages/frontend/cart/Cart";
import home from "../pages/frontend/home";
import Contact from "../pages/frontend/contact/Contact";
import Detail from "../pages/frontend/product/Detail";
import Login from "../pages/frontend/user/Login";
import Register from "../pages/frontend/user/Register";
import Post from "../pages/frontend/post/Post";
import AllProduct from "../pages/frontend/product/AllProduct";

const RouterPublic=[
    {path:'/',component:home},
    {path:'/san-pham/:slug/:page',component:home},
    {path:'/chi-tiet-san-pham/:slug',component:Detail},
    {path:'/tat-ca-san-pham/:slug/:page',component:AllProduct},
    {path:'/lien-he',component:Contact},
    {path:'/cart',component:Cart},
    {path:'/dang-nhap',component:Login},
    {path:'/dang-ky',component:Register},
    {path:'/bai-viet',component:Post},

];

export default RouterPublic;