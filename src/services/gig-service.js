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
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGVLcL8EH0abXdF_XVjeRM8s4qV1UWJwndQ&usqp=CAU',
            'https://musiccritic.com/wp/wp-content/uploads/2017/04/best-daw-recording-software.jpg'
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
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpn_UkBDJ-6p9KXrXKk5OcLTCX202gz2OfA&usqp=CAU',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bispingen_verr%C3%BCcktes_Haus_auf_dem_Kopf.jpg/1200px-Bispingen_verr%C3%BCcktes_Haus_auf_dem_Kopf.jpg'
        ],
        price: 120.00,
        delivery: 16,
        jobDescription: "Hello, I am Davir Ronen Structural & Design Engineer in CECB ( Central Engineering Consultancy Bureau). Under this gig i design your dream home and provide you High Quality photo realistic Interior/Exterior render images. If you need more than that, i can provide you a video flythrough of your DREAM HOME also ...",
        tags: [
            'home-design',
        ],
        seller: {
            _id: "51399392",
            fullname: "Davir Ronen",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIjt1729YRBsVKe30AwJ2rHv4nWJBrUxxsQ&usqp=CAU"
        },
    },
    {
        _id: "1000666",
        title: "I will do custom order related to graphic design work",
        imgUrls: [
            'https://www.pixelo.net/wp-content/uploads/2018/10/1934823-e1540532501723.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfbgspa1XrSRSB064jU-V0K6GOf8VyrIlcQ&usqp=CAU',
            'https://elearningindustry.com/wp-content/uploads/2019/09/elearning-graphic-design-best-practices.jpg'
        ],
        price: 55.00,
        delivery: 3,
        jobDescription: "Message me first before ordering so we can discuss about this gig. In this gig $5 will do you basic, simple and nice editing, but for more complex editing the price will increase. We can discuss and agree about the price. The price will depend on how complex the graphic job.",
        tags: [
            'grafic'
        ],
        seller: {
            _id: "51395444",
            fullname: "Yuli Potalov",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa_HSPmOuXZjwVPe3iRFse3_ev61GED0hTg&usqp=CAU"
        },
    },
    {
        _id: "1000344",
        title: "I will design and develop a modern responsive wordpress website",
        imgUrls: [
            'https://www.usnews.com/dims4/USNEWS/2cf9b0b/2147483647/crop/2000x1335%2B0%2B0/resize/300x300%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzDaybnxduCvnjXSvs34wtpfu6cb8QvXNLA&usqp=CAU',
            'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg'
        ],
        price: 180.00,
        delivery: 38,
        jobDescription: "Hello there, My name is Muki Levi, a Senior Web Developer in website development 24/7. Why choose me? I have experience with a large range of projects in Wordpress, including but not limited to a business website, blog, e-commerce, agency, directory listing, job portal, real estate and many more. I work with a focus on Standard, Aesthetics, and Professionalism to deliver the right product for your business.",
        tags: [
            'web-develop',
        ],
        seller: {
            _id: "5139899",
            fullname: "Muki Levi",
            imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
    },
    {
        _id: "1000rree3",
        title: "I will remove noise, wind, echo, repair and clean your audio",
        imgUrls: [
            'https://i.pinimg.com/originals/56/9c/2f/569c2f5ae8b76f899c3552a146014816.png',
            'https://www.adorama.com/alc/wp-content/uploads/2018/12/shutterstock_484405837-1024x614.jpg',
            'https://buffer.com/library/content/images/library/wp-content/uploads/2017/09/13-Places-to-Find-Background-Music-for-Video-Cover-Image-2.jpg'
        ],
        price: 87.00,
        delivery: 20,
        jobDescription: "If your audio needs special repair, please send it to me before ordering to determine if I can help. If you are looking for a professional audio editor who works with industry-best tools, then let's talk about how I can help.",
        tags: [
            'music',
            'comunication'
        ],
        seller: {
            _id: "755443",
            fullname: "Dana Lim",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V0XCkHjYbLW3uy8osbkaWDGGOEuQnfJcuw&usqp=CAU"
        },
    },
    {
        _id: "1002336",
        title: "I will be your professional video spokesperson",
        imgUrls: [
            'https://cdn.pixabay.com/photo/2019/10/04/07/41/microphone-4525034_1280.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyk6Ly4Fb7aZSnsCvef2r-A_vH6WMQ2bzm4g&usqp=CAU',
            'https://cdn.arstechnica.net/wp-content/uploads/2020/09/robot-music.jpg'
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
    },
    {
        _id: "100246543",
        title: "I will design 3 modern minimalist logo design",
        imgUrls: [
            'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/23197467/original/7fe4f022a60d8c54335a09d1ed3ad86b86df63f6/design-an-impressive-logo.jpg',
            'https://www.logodesign.net/images/illustration-logo.png',
            'https://us.123rf.com/450wm/twindesigner/twindesigner1709/twindesigner170900091/86042541-a-brush-stroke-letter-logo-design-black-paint-logo-leters-icon-with-elegant-circle-vector-design-.jpg?ver=6'
        ],
        price: 38.00,
        delivery: 2,
        jobDescription: "This Gig is of one of many design kinds we offer. Flat design concepts are one of our fortes. For the logo to be timeless it doesn’t need to be with complex structures or patterns. It just needs to be simple, memorable and which gives a distinctive essence to your business",
        tags: [
            'logo-design',
            'media'
        ],
        seller: {
            _id: "511344234",
            fullname: "Clode Deli",
            imgUrl: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
        },
    },
    {
        _id: "43235246",
        title: "I will do creative unique minimalist business logo design",
        imgUrls: [
            'https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg',
            'https://cdn.shopify.com/s/files/1/1095/6418/files/3d_logo_sample_1024x1024.png?v=1588066397',
            'https://www.designfreelogoonline.com/wp-content/uploads/2018/09/3D-Logo-online-logos.jpg'
        ],
        price: 65.00,
        delivery: 5,
        jobDescription: "I am a professional and Unique, creative logo design service provider, offering 100% original and conceptual layout solutions for businesses of varying sizes. The creativity of your work will be the true representative of your business and natch its nature and standard.",
        tags: [
            'logo-design',
            'media'
        ],
        seller: {
            _id: "76487326",
            fullname: "Mike Din",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-gsRmxFQGy_0ciXHr-rwvWjvrV1EeBGmgQ&usqp=CAU"
        },
    },
    {
        _id: "43223525",
        title: "Our Studio will design unique company logo and business card",
        imgUrls: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNrkajecqwyp_UIi0n7_nCdBUm-O3-wS5cg&usqp=CAU',
            'https://d3re0f381bckq9.cloudfront.net/31789585_1483432297-55590-1-1_536x335.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9dhjHvMBDSS64A47P_GJoVI2Vmtf9SlNuw&usqp=CAU'
        ],
        price: 89.00,
        delivery: 4,
        jobDescription: "we are a professional design team having more than 5 years of experience. So are creating modern and minimal logos with Business card And Stationery with this gig. ",
        tags: [
            'logo-design',
            'media'
        ],
        seller: {
            _id: "76564763",
            fullname: "Jack Kob",
            imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
    },
    {
        _id: "37672098",
        title: "I will design and render the home that you want,interior or exterior, 3d visualization",
        imgUrls: [
            'https://mccoymart.com/post/wp-content/uploads/2020/03/Home-Design-and-Plans-According-to-Vastu-Shastra.jpg',
            'https://www.buildingplanner.in/images/ready-plans/34N1001.jpg',
            'https://www.decoraid.com/wp-content/uploads/2018/07/Luxurious-interior-design-living-room-and-fireplace-in-a-beautiful-house-scaled.jpeg'
        ],
        price: 270.00,
        delivery: 15,
        jobDescription: "PLEASE CONTACT BEFORE PLACE AN ORDER, so we can discuss more about the time frame and price. Dear Client, I am experienced architecture and interior 3D designer. I can do the design, 2d plans and elevations for the building you want.I make photo-realistic renders using 3ds Max,Corona, Vray and Photoshop. I will determine your goals and requirements of the project, make interior spaces functional, and beautiful by solving space requirements and selecting decorative items, such as colors, materials, lighting, furniture, wall finishes and flooring. I use my sense of style, to develop designs that look great and are aesthetically pleasing. I can strongly assure you that I will be able to provide you according to your desire, taking care of all of the details for you.",
        tags: [
            'home-design',
        ],
        seller: {
            _id: "31243565",
            fullname: "Rita Costa",
            imgUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg"
        },
    },
    {
        _id: "2179487",
        title: "I will provide custom home design package",
        imgUrls: [
            'https://cdn.vox-cdn.com/thumbor/qgQrZikp7XSdns41hyhNTXypgDA=/0x0:4560x3300/1200x800/filters:focal(1916x1286:2644x2014)/cdn.vox-cdn.com/uploads/chorus_image/image/60077225/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.0.jpg',
            'https://res.cloudinary.com/markalexanderdesigncloudinary/auto-cloud/2019/02/MA-Home-Artistry-01-tablet.jpg',
            'https://d1cfnnhb7hbym9.cloudfront.net/dist/images/big-plan-3D.fc5936b7aba050e0e541463743495aa0.png'
        ],
        price: 230.00,
        delivery: 21,
        jobDescription: "I am a skilled, Architect with +12 years of experience in residential building projects and 3D BIM Models. I am also a Revit Certified Professional and a Black belted 3D Design Coordinator. I have delivered numerous mega projects within various countries including USA, Canada, Middle East and Gulf. I firmly believe my key-skill is that I pay attention to details and always prioritize quality.",
        tags: [
            'home-design',
        ],
        seller: {
            _id: "083497",
            fullname: "Koby Daniel",
            imgUrl: "https://cdn.visioncenter.org/wp-content/uploads/2020/09/round-face-shape-wayfarers-1024x1024.jpg"
        },
    },
    {
        _id: "9038244",
        title: "I will design flyer, poster, postcard or any other graphics",
        imgUrls: [
            'https://gripdesign.com/wp-content/uploads/2020/04/IMG_4022-copy.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQNrObIvEddkkrpJV1n8xndWg-jFzkUe4ew&usqp=CAU',
            'https://media.istockphoto.com/vectors/graphic-designer-creating-his-artwork-vector-flat-isometric-vector-id1243522179?k=6&m=1243522179&s=612x612&w=0&h=I2ulLN6LQets2ZVLi4zxLgWYZgrGdweiPo9TwHPnw2A=',
        ],
        price: 119.00,
        delivery: 6,
        jobDescription: "Hi, I’m Sol, professionally trained graphic designer talent. I’ve already completed thousands of orders here on Fiverr with 5-star reviews. That’s because I produce  high quality graphics that are ready for you to use and provide excellent customer service. Looking for a professionally designed Flyer to promote your product, business or anything you want ?",
        tags: [
            'grafic',
        ],
        seller: {
            _id: "90327489",
            fullname: "Sol Tick",
            imgUrl: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2019/04/16-medium-hairstyle-with-blonde-ombre-and-bangs-9RumfSs4PX.jpg?resize=1010%2C1010&ssl=1"
        },
    },
    {
        _id: "084723",
        title: "I will be your killer graphic designer and photo manipulation",
        imgUrls: [
            'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/100616304/original/dadefa1a2630f939d771ab114da5381dd9b6eb22/create-any-kind-of-graphic-design-with-idea.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEO9TrsL6xp0UeCfKqjCwg3ACOuLYSj9aYuA&usqp=CAU',
            'https://www.designindaba.com/sites/default/files/node/news/25070/thulasizwe-mamba-interview-201900021012still008.jpg',
        ],
        price: 189.00,
        delivery: 17,
        jobDescription: "Perfect Place for your any graphic design Needs! I'll do any graphic design or photoshop work in 24 hours for you! Low on budget? but want High Quality work? then this GIG is just for you! Flyers, Google Ads, Website images, Portrait, vector designs, business cards, social media graphics,Product Photos: for Amazon, eBay (& for any other platform you need)",
        tags: [
            'grafic',
        ],
        seller: {
            _id: "90378425",
            fullname: "Yacky Rock",
            imgUrl: "https://i.pinimg.com/originals/00/a5/9c/00a59c194e16fbb7b48fce55a51f9872.jpg"
        },
    },
    {
        _id: "990775326",
        title: "I will develop desktop applications, bots, web scrapers with python",
        imgUrls: [
            'https://www.motocms.com/blog/wp-content/uploads/2019/11/how-to-become-a-web-developer.jpg',
            'https://media.licdn.cn/dms/image/C561BAQGpxRlo9gp3cQ/company-background_10000/0/1548686474966?e=2159024400&v=beta&t=kc7MUYbXutHt2pvcb6ljpEcvhyp7jMLZf_OlSEnuh0M',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtd7FkQ4DUKEHWDKiJehD8zN2r-Zdu-r0O-g&usqp=CAU',
        ],
        price: 289.00,
        delivery: 31,
        jobDescription: "Hi I am a Computer Science Engineering degree holder with more than 4 years of experience in python. I have completed a huge number of python related projects using various python libraries.",
        tags: [
            'web-develop',
        ],
        seller: {
            _id: "64493278",
            fullname: "Roi Siko",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlg13K7pmpCud99-WnIFi-5GoiFcjp4i3yQr98MPmG984ACibH8KKKjoE1Y6uYiJqArA&usqp=CAU"
        },
    },
    {
        _id: "2973347",
        title: "I will do custom web design and webflow development",
        imgUrls: [
            'https://axiomq.com/wp-content/uploads/2020/05/developer-3.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwz9oHAJQmy48cNDzrRPQA_RFCCXYCZsqvjw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WK3SgDNPcffVrnIXiAxnVBNvKTkesmXBJA&usqp=CAU',
        ],
        price: 350.00,
        delivery: 22,
        jobDescription: "I design and build only custom websites with attention to your customers' needs. I strive for minimal aesthetics and modern visuals but make it easy to use. I don't use templates and don't do fast design.",
        tags: [
            'web-develop',
        ],
        seller: {
            _id: "6483790",
            fullname: "Homer Lager",
            imgUrl: "https://i.pinimg.com/originals/d7/c1/de/d7c1dedd54b2db6b9eda7b5f0d0a1faa.jpg"
        },
    },
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


function query() {
    // return axios.get('http://localhost:3030/api/toy', { params: filterBy }).then(res => res.data);
    // return httpService.get(`gig`, filterBy )
    var gigs = storageService.query(GIG_KEY)
        .then(gigs => {
            if (!gigs || !gigs.length) gigs = gGigs
            localStorage.setItem(GIG_KEY, JSON.stringify(gigs))
            return gigs
        })
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