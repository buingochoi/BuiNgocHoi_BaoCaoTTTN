import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('brand/index');

}

function getById(id){
    return httpAxios.get(`brand/show/${id}`);

}

function create(brand){
    return httpAxios.post("brand/store", brand)
}

function update(brand,id){
    return httpAxios.post(`brand/update/${id}`,brand);
}
function getByPosition(position){
    return httpAxios.get(`brand_list/${position}`);
}
function getBySlug(slug){
    return httpAxios.get(`brand/getBySlug/${slug}`);

}
function remove(id) {
    return httpAxios.delete(`brand/destroy/${id}`);
}
const brandservice = {
    getByPosition:getByPosition,
    getBySlug:getBySlug,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default brandservice;