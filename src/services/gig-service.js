// import axios from 'axios'
import { storageService } from '../services/async-storage-service.js'
// import { httpService } from './http.service'
// const KEY = 'toyDB';
// const SERVER_PATH = 'http://localhost:3030'
const GIG_KEY = 'gig_db'

export const gigService = {
    query,
    getById,
    remove,
    save,
    getEmptyGig,
}


function query(filterBy) {
    // return axios.get('http://localhost:3030/api/toy', { params: filterBy }).then(res => res.data);
    // return httpService.get(`gig`, filterBy )

    var gigs = storageService.query(GIG_KEY)
    if (!gigs || !gigs.length) gigs = gGigs
    localStorage.setItem(GIG_KEY, JSON.stringify(gigs))
    return gigs
}

function getById(id) {
    // return axios.get(`http://localhost:3030/api/gig/${id}`).then(res => res.data)
    // return httpService.get(`gig/${id}`)
    storageService.get(GIG_KEY, id).then(gig => console.log(gig))
    return storageService.get(GIG_KEY, id)
}

function remove(id) {
    // return axios.delete(`http://localhost:3030/api/gig/${id}`).then(res => res.data)
    // return httpService.delete(`gig/${id}`)
    return storageService.remove(GIG_KEY, id)
}

function save(gig) {
    if (gig._id) {
        // return httpService.put(`gig`, gig)
        return storageService.put(GIG_KEY, gig)
    } else {
        // return httpService.post(`gig`, gig)
        return storageService.post(GIG_KEY, gig)
    }
}



function getEmptyGig() {
    return {
        _id: '',
        title: '',
        imgUrls: [],
        price: 0,
        delivery: '',
        jobDescription: '',
        tags: '',
        reviews: [],
        seller: {}
    }
}

const gGigs = [{
        "_id": "10006547",
        "title": "I will create music with unlimited instruments in any style",
        "imgUrls": [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        "price": 80.00,
        "delivery": 30,
        "jobDescription": "Fantastic duplex apartment with three bedrooms, located in...",
        "tags": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Cooking basics"
        ],
        "seller": {
            "_id": "51399391",
            "fullname": "Ronit Rozen",
            "imgUrl": "https://x.com/pic.jpg"
        },
    },
    {
        "_id": "10006546",
        "title": "Garden Design",
        "imgUrls": [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        "price": 80.00,
        "delivery": 30,
        "jobDescription": "Fantastic duplex apartment with three bedrooms, located in...",
        "tags": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Cooking basics"
        ],
        "seller": {
            "_id": "51399391",
            "fullname": "Davit Pok",
            "imgUrl": "https://x.com/pic.jpg"
        },
    },
    {
        "_id": "1000666",
        "title": "Garden Design",
        "imgUrls": [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        "price": 80.00,
        "delivery": 30,
        "jobDescription": "Fantastic duplex apartment with three bedrooms, located in...",
        "tags": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Cooking basics"
        ],
        "seller": {
            "_id": "51395444",
            "fullname": "Davit Pok",
            "imgUrl": "https://x.com/pic.jpg"
        },
    },
    {
        "_id": "1000344",
        "title": "Garden Design",
        "imgUrls": [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        "price": 80.00,
        "delivery": 30,
        "jobDescription": "Fantastic duplex apartment with three bedrooms, located in...",
        "tags": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Cooking basics"
        ],
        "seller": {
            "_id": "5139899",
            "fullname": "Davit Pok",
            "imgUrl": "https://x.com/pic.jpg"
        },
    },
    {
        "_id": "1000rree3",
        "title": "Garden Design",
        "imgUrls": [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        "price": 80.00,
        "delivery": 30,
        "jobDescription": "Fantastic duplex apartment with three bedrooms, located in...",
        "tags": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Cooking basics"
        ],
        "seller": {
            "_id": "5139445",
            "fullname": "Davit Pok",
            "imgUrl": "https://x.com/pic.jpg"
        },
    },
    {
        "_id": "1002336",
        "title": "Garden Design",
        "imgUrls": [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        "price": 80.00,
        "delivery": 30,
        "jobDescription": "Fantastic duplex apartment with three bedrooms, located in...",
        "tags": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
            "Cooking basics"
        ],
        "seller": {
            "_id": "5112331",
            "fullname": "Davit Pok",
            "imgUrl": "https://x.com/pic.jpg"
        },
    }

]