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

const gGigs = [{
        _id: "10006547",
        title: "I will create music with unlimited instruments in any style",
        imgUrls: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69Svv9n1P4SAtpSWIhlbsmfmPkofjjHGKvA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGVLcL8EH0abXdF_XVjeRM8s4qV1UWJwndQ&usqp=CAU '
        ],
        price: 90.00,
        delivery: 10,
        jobDescription: "Over 8 years experience, I can produce any style you want and every genre you request.Feel free to contact me before placing the order and I will reply any questions.",
        tags: [
            'madia',
            'music'
        ],
        seller: {
            _id: "51399391",
            fullname: "Ronit Rozen",
            imgUrl: "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg"
        },
    },
    {
        _id: "10006546",
        title: "I will design your home interior and exterior",
        imgUrls: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItJSqhHESyzSoUWKiO2Psh8Ql_hOV0CInlg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpn_UkBDJ-6p9KXrXKk5OcLTCX202gz2OfA&usqp=CAU'
        ],
        price: 120.00,
        delivery: 16,
        jobDescription: "Hello, I am Davir Ronen Structural & Design Engineer in CECB ( Central Engineering Consultancy Bureau). Under this gig i design your dream home and provide you High Quality photo realistic Interior/Exterior render images. If you need more than that, i can provide you a video flythrough of your DREAM HOME also ...",
        tags: [
            'home-design',
        ],
        seller: {
            _id: "51399391",
            fullname: "Davir Ronen",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIjt1729YRBsVKe30AwJ2rHv4nWJBrUxxsQ&usqp=CAU"
        },
    },
    {
        _id: "1000666",
        title: "I will do custom order related to graphic design work",
        imgUrls: [
            'https://www.pixelo.net/wp-content/uploads/2018/10/1934823-e1540532501723.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfbgspa1XrSRSB064jU-V0K6GOf8VyrIlcQ&usqp=CAU'
        ],
        price: 55.00,
        delivery: 3,
        jobDescription: "Message me first before ordering so we can discuss about this gig. In this gig $5 will do you basic, simple and nice editing, but for more complex editing the price will increase. We can discuss and agree about the price. The price will depend on how complex the graphic job.",
        tags: [
            'grafic'
        ],
        seller: {
            _id: "51395444",
            fullname: "yuli Potalov",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa_HSPmOuXZjwVPe3iRFse3_ev61GED0hTg&usqp=CAU"
        },
    },
    {
        _id: "1000344",
        title: "I will design and develop a modern responsive wordpress website",
        imgUrls: [
            'https://www.usnews.com/dims4/USNEWS/2cf9b0b/2147483647/crop/2000x1335%2B0%2B0/resize/300x300%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzDaybnxduCvnjXSvs34wtpfu6cb8QvXNLA&usqp=CAU'
        ],
        price: 180.00,
        delivery: 38,
        jobDescription: "Hello there, My name is Muki Levi, a Senior Web Developer in website development 24/7. Why choose me? I have experience with a large range of projects in Wordpress, including but not limited to a business website, blog, e-commerce, agency, directory listing, job portal, real estate and many more. I work with a focus on Standard, Aesthetics, and Professionalism to deliver the right product for your business.",
        tags: [
            'web-develop',
            'grafic'
        ],
        seller: {
            _id: "5139899",
            fullname: "Muki Levi",
            imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
    },
    {
        _id: "1000rree3",
        title: "I will remove noise, wind, echo, repair and clean your audio",
        imgUrls: [
            'https://i.pinimg.com/originals/56/9c/2f/569c2f5ae8b76f899c3552a146014816.png',
            'https://www.adorama.com/alc/wp-content/uploads/2018/12/shutterstock_484405837-1024x614.jpg'
        ],
        price: 87.00,
        delivery: 20,
        jobDescription: "If your audio needs special repair, please send it to me before ordering to determine if I can help. If you are looking for a professional audio editor who works with industry-best tools, then let's talk about how I can help.",
        tags: [
            'music',
            'comunication'
        ],
        seller: {
            _id: "5139445",
            fullname: "Dana lim",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V0XCkHjYbLW3uy8osbkaWDGGOEuQnfJcuw&usqp=CAU"
        },
    },
    {
        _id: "1002336",
        title: "I will be your professional video spokesperson",
        imgUrls: [
            'https://cdn.pixabay.com/photo/2019/10/04/07/41/microphone-4525034_1280.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyk6Ly4Fb7aZSnsCvef2r-A_vH6WMQ2bzm4g&usqp=CAU'
        ],
        price: 110.00,
        delivery: 5,
        jobDescription: "I'm Roni and I'm available to be your video spokesperson. I have extensive spokesperson, acting and modeling experience. Work with a pro that can effectively communicate your message.",
        tags: [
            'music',
            'media',
            'comunication'
        ],
        seller: {
            _id: "5112331",
            fullname: "Roni Ron",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TRmnlIPn36w1HuBoXo7mreaRsINRXlhFWg&usqp=CAU"
        },
    }
]

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