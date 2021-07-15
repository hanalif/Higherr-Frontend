// import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
import { storageService } from '../services/async-storage-service.js'
// const SCORE_FOR_REVIEW = 10
const USER_KEY = 'user_db'

const gUsers =
    [
        {
            _id: "u101",
            fullname: "Orly Amdadi",
            username: "orly@amdadi.com",
            password: "1234",
            imgUrl: "http://some-img",
            reviews: [
                {
                    id: "dfe33",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]
        },
        {
            _id: "u102",
            fullname: "Daniel Sharon",
            username: "daniel@sharon.com",
            password: "1234",
            imgUrl: "http://some-img",
            reviews: [
                {
                    id: "dAA33",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]
        },

        {

            _id: "51399391",
            username: "ronit",
            password: "1234",
            fullname: "Ronit Rozen",
            imgUrl: "https://x.com/pic.jpg",
            reviews: [
                {
                    id: "aaw13",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]

        },
        {
            _id: "51399391",
            username: "david",
            password: "1234",
            fullname: "David Pok",
            imgUrl: "https://x.com/pic.jpg",
            reviews: [
                {
                    id: "dfFDW",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]
        },

        {
            _id: "51395444",
            username: "matan",
            password: "1234",
            fullname: "Matan Pok",
            imgUrl: "https://x.com/pic.jpg",
            reviews: [
                {
                    id: "ZX2e3",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]
        },
        {
            _id: "5139899",
            userName: "bob",
            password: "1234",
            fullname: "Bob Pok",
            imgUrl: "https://x.com/pic.jpg",
            reviews: [
                {
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

        {
            _id: "5139445",
            userName: "puki",
            password: "1234",
            fullname: "Puki Pok",
            imgUrl: "https://x.com/pic.jpg",
            reviews: [
                {
                    id: "A11qw",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]
        },

        {
            _id: "5112331",
            userName: "dana",
            password: "1234",
            fullname: "Dana Pok",
            imgUrl: "https://x.com/pic.jpg",
            reviews: [
                {
                    id: "vfr44",
                    txt: "Very helpful hosts. Cooked traditional...",
                    rate: 4,
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "/img/img2.jpg"
                    }

                }
            ]
        }

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

function getUsers() {
    // return storageService.query('user')
    // return httpService.get(`user`)
    var users = storageService.query(USER_KEY)
    if (!users || !users.length) users = gUsers
    localStorage.setItem(USER_KEY, JSON.stringify(users))
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
async function signup(userCred) {

    const user = await storageService.post(USER_KEY, userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
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


