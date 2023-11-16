import httpAxios from '../httpAxios'

function getProductAll(limit,page=1) {
    return httpAxios.get(`product_all/${limit}/${page}`);
}

function getProductBySlug(slug) {
    return httpAxios.get(`product_detail/${slug}`);
}
function getProductHome(limit, id) {
    return httpAxios.get(`product_home/${limit}/${id}`);
}

function getAll(){
    return httpAxios.get('product/index');

}
function getAllByLimit($limit){
    return httpAxios.get('product/index_all/'+$limit);

}
function getByCatSlug(slug, limit, page=1){
    return httpAxios.get(`productByCatSlug/${slug}/${limit}/${page}`);
}

function getById(id){
    return httpAxios.get(`product/show/${id}`);

}

function create(product){
    return httpAxios.post("product/store", product)
}

function update(product,id){
    return httpAxios.post(`product/update/${id}`,product);
}

function remove(id) {
    return httpAxios.delete(`product/destroy/${id}`);
}
const productservice = {
    getAllByLimit:getAllByLimit,
    getProductHome:getProductHome,
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getByCatSlug:getByCatSlug,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;