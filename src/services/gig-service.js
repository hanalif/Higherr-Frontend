import axios from 'axios'
import { storageService } from '../services/async-storage-service.js'
import { httpService } from '../services/http.service.js'
const KEY = 'highrDB';
const SERVER_PATH = 'http://localhost:3030'
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


function query() {
    return axios.get('http://localhost:3030/api/gig').then(res => res.data);
    // return httpService.get(`gig`, filterBy )
    // var gigs = storageService.query(GIG_KEY)
    //     .then(gigs => {
    //         if (!gigs || !gigs.length) gigs = gGigs
    //         localStorage.setItem(GIG_KEY, JSON.stringify(gigs))
    //         return gigs
    //     })
    // return gigs
}

function getById(id) {
    return axios.get(`http://localhost:3030/api/gig/${id}`).then(res => res.data)
    // return httpService.get(`gig/${id}`)
    // return storageService.get(GIG_KEY, id)
    //     .then(gig => gig)
}

function remove(id) {
    return axios.delete(`http://localhost:3030/api/gig/${id}`).then(res => res.data)
    // // return httpService.delete(`gig/${id}`)
    // return storageService.remove(GIG_KEY, id)
}

function save(gig) {
    if (gig._id) {
        return httpService.put(`gig`, gig)
        // return storageService.put(GIG_KEY, gig)
    } else {
        return httpService.post(`gig`, gig)
        // return storageService.post(GIG_KEY, gig)
    }
}

function setFilter(filter) {
    filterBy = filter
}

function getFilterdGigs() {
    return axios.get('http://localhost:3030/api/gig').then(res => {
        let gigs = res.data
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
    
    })
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