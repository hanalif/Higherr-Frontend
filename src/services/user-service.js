// import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
import { storageService } from '../services/async-storage-service.js'
// const SCORE_FOR_REVIEW = 10
const USER_KEY = 'user_db'

const gUsers = [{
        _id: "51399391",
        fullname: "Ronit Rozen",
        username: "Ronit@rozen.com",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg",
        about: "Over 8 years experience, I can produce any style you want and every genre you request.Feel free to contact me before placing the order and I will reply any questions.",
        reviews: [{
            id: "dfe33",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }

        }]
    },
    {
        _id: "51399392",
        fullname: "Davir Ronen",
        username: "Davir@ronen.com",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIjt1729YRBsVKe30AwJ2rHv4nWJBrUxxsQ&usqp=CAU",
        about: "Hello, I am Davir Ronen Structural & Design Engineer in CECB ( Central Engineering Consultancy Bureau). Under this gig i design your dream home and provide you High Quality photo realistic Interior/Exterior render images. If you need more than that, i can provide you a video flythrough of your DREAM HOME also ...",
        reviews: [{
            id: "dAA33",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "51395444",
        fullname: "Yuli Potalov",
        username: "Yuli",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa_HSPmOuXZjwVPe3iRFse3_ev61GED0hTg&usqp=CAU",
        about: "Message me first before ordering so we can discuss about this gig. In this gig $5 will do you basic, simple and nice editing, but for more complex editing the price will increase. We can discuss and agree about the price. The price will depend on how complex the graphic job.",
        reviews: [{
            id: "aaw13",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "5139899",
        fullname: "Muki Levi",
        username: "Muki",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        about: "Hello there, My name is Muki Levi, a Senior Web Developer in website development 24/7. Why choose me? I have experience with a large range of projects in Wordpress, including but not limited to a business website, blog, e-commerce, agency, directory listing, job portal, real estate and many more. I work with a focus on Standard, Aesthetics, and Professionalism to deliver the right product for your business.",
        reviews: [{
            id: "dfFDW",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "755443",
        fullname: "Dana Lim",
        username: "Dana",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V0XCkHjYbLW3uy8osbkaWDGGOEuQnfJcuw&usqp=CAU",
        about: "If your audio needs special repair, please send it to me before ordering to determine if I can help. If you are looking for a professional audio editor who works with industry-best tools, then let's talk about how I can help.",
        reviews: [{
            id: "ZX2e3",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }

        }]
    },
    {
        _id: "5112331",
        fullname: "Roni Ron",
        userName: "Roni",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TRmnlIPn36w1HuBoXo7mreaRsINRXlhFWg&usqp=CAU",
        about: "I'm Roni and I'm available to be your video spokesperson. I have extensive spokesperson, acting and modeling experience. Work with a pro that can effectively communicate your message.",
        reviews: [{
                id: "ALk87",
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "11Ppo",
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "Klaa3",
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "KH566",
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }
            }
        ]
    },
]


export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    // update,
    save,
    getLoggedinUser,
    // increaseScore
}

// window.userService = userService
getUsers()

async function getUsers() {
    // return storageService.query('user')
    // return httpService.get(`user`)
    var users = await storageService.query(USER_KEY);
    if (!users || !users.length) users = gUsers;
    localStorage.setItem(USER_KEY, JSON.stringify(users));
    return users
}

function getById(userId) {
    // return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
    return storageService.get(USER_KEY, userId)
}

function remove(userId) {
    return storageService.remove(USER_KEY, userId)
        // return httpService.delete(`user/${userId}`)
}


function save(user) {
    if (user._id) {
        return storageService.put(USER_KEY, user)
    } else {
        return storageService.post(USER_KEY, user)
    }
}

async function signup(userCred) {
    const user = await storageService.post(USER_KEY, userCred)
        // const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}

// async function increaseScore(by = SCORE_FOR_REVIEW) {
//     const user = getLoggedinUser()
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

async function login(userCred) {
    const users = await storageService.query(USER_KEY)
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)

    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
}

function logout() {
    sessionStorage.clear()
        // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}