// import axios from 'axios'
import { storageService } from '../services/async-storage-service.js'
// import { httpService } from './http.service'
// const KEY = 'toyDB';
// const SERVER_PATH = 'http://localhost:3030'
const GIG_KEY = 'gig_db'
let filterBy = {
    txt: '',
    tags: 'all',
    delivery: null,
    price: {
        min: 0,
        max: Infinity
    }
}

export const gigService = {
    query,
    getById,
    remove,
    save,
    getEmptyGig,
    setFilter,
    getFilterdGigs
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
        .then(gig => gig)
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

function setFilter(filter) {
    filterBy = filter
}

function getFilterdGigs() {
    return storageService.query(GIG_KEY)
        .then(gigs => {
            if (filterBy.txt === '' && filterBy.tags === 'all' &&
                !filterBy.delivery && filterBy.price.min <= 0 && filterBy.price.max === Infinity) return gigs;
            const searchStr = filterBy.txt.toLowerCase();
            let filtered = gigs.filter(gig => {
                if (searchStr === '') return gig
                return gig.title.toLowerCase().includes(searchStr)
            })
            filtered = filtered.filter(gig => {
                var tagsStr = gig.tags.join(' ')
                if (filterBy.tags === 'all') return gig
                return tagsStr.includes(filterBy.tags)
            })
            filtered = filtered.filter(gig => {
                if (filterBy.delivery === '1') return gig.delivery <= 1
                else if (filterBy.delivery === '3') return gig.delivery <= 3
                else if (filterBy.delivery === '7') return gig.delivery <= 7
                else return gig.delivery > 0
            })
            filtered = filtered.filter(gig => {
                return gig.price >= filterBy.price.min && gig.price <= filterBy.price.max
            })
            console.log(filtered);
        });
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
        _id: "10006547",
        title: "I will create music with unlimited instruments in any style",
        imgUls: [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        prce: 80.00,
        delivry: 30,
        jobDescripton: "Fantastic duplex apartment with three bedrooms, located in...",
        tags: [
            'madia',
            'comunucation'
        ],
        seller: {
            _id: "51399391",
            fullame: "Ronit Rozen",
            imUrl: "https://x.com/pic.jpg"
        },
    },
    {
        _id: "10006546",
        title: "Home Design",
        imgUrls: [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        price: 120.00,
        delivery: 1,
        jobDescription: "Fantastic duplex apartment with three bedrooms, located in...",
        tags: [
            'madia',
            'comunucation'
        ],
        seller: {
            _id: "51399391",
            fullname: "Davit Pok",
            imgUrl: "https://x.com/pic.jpg"
        },
    },
    {
        _id: "1000666",
        title: "Puki Design",
        imgUrls: [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        price: 20.00,
        delivery: 3,
        jobDescription: "Fantastic duplex apartment with three bedrooms, located in...",
        tags: [
            'web-develop',
            'grafic'
        ],
        seller: {
            _id: "51395444",
            fullname: "Davit Pok",
            imgUrl: "https://x.com/pic.jpg"
        },
    },
    {
        _id: "1000344",
        title: "Kitchen Design",
        imgUrls: [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        price: 150.00,
        delivery: 7,
        jobDescription: "Fantastic duplex apartment with three bedrooms, located in...",
        tags: [
            'web-develop',
            'grafic'
        ],
        seller: {
            _id: "5139899",
            fullname: "Davit Pok",
            imgUrl: "https://x.com/pic.jpg"
        },
    },
    {
        _id: "1000rree3",
        title: "Garden Design",
        imgUrls: [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        price: 80.00,
        delivery: 30,
        jobDescription: "Fantastic duplex apartment with three bedrooms, located in...",
        tags: [
            'web-develop',
            'grafic'
        ],
        seller: {
            _id: "5139445",
            fullname: "Davit Pok",
            imgUrl: "https://x.com/pic.jpg"
        },
    },
    {
        _id: "1002336",
        title: "Garden Design",
        imgUrls: [
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
        ],
        price: 80.00,
        delivery: 30,
        jobDescription: "Fantastic duplex apartment with three bedrooms, located in...",
        tags: [
            'web-develop',
            'grafic'
        ],
        seller: {
            _id: "5112331",
            fullname: "Davit Pok",
            imgUrl: "https://x.com/pic.jpg"
        },
    }
]