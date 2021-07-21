


import { httpService } from './http.service'


export const orderService = {
    query,
    getById,
    remove,
    save,
    getEmptyOrder,
}


function query(filterBy) {
    // return axios.get('http://localhost:3030/api/toy', { params: filterBy }).then(res => res.data);
    return httpService.get(`order`, filterBy )
}



function getById(id) {
    // return axios.get(`http://localhost:3030/api/toy/${id}`).then(res => res.data)
    return httpService.get(`order/${id}`)
}

function remove(id) {
    // return axios.delete(`http://localhost:3030/api/toy/${id}`).then(res => res.data)
    return httpService.delete(`order/${id}`)
}

function save(order) {
    if (order._id) {
        return httpService.put(`order`, order)
    } else {
        return httpService.post(`order`, order)
    }
}

function getEmptyOrder() {
    return {
        _id: '',
        title: '',
        price:'',
        status: '',
        buyer: '',
        createdAt: new Date(),
        seller: true
    }
}





