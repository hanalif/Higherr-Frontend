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
        about: " I have done graduation in Mass Communication with excellent GPA. I have experience of over 7 years in writing, editing.",
        reviews: [{
            id: "dfe33",
            createdAt: 1626541187128,
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
        _id: "6483790",
        fullname: "Homer Lager",
        username: "Homer",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i.pinimg.com/originals/d7/c1/de/d7c1dedd54b2db6b9eda7b5f0d0a1faa.jpg",
        about: "Our team will make a highly professional logo for you with unlimited revisions..",
        reviews: [{
            id: "cr3372",
            createdAt: 1626541147128,
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
        _id: "64493278",
        fullname: "Roi Siko",
        username: "Roi",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlg13K7pmpCud99-WnIFi-5GoiFcjp4i3yQr98MPmG984ACibH8KKKjoE1Y6uYiJqArA&usqp=CAU",
        about: "Our entire team devotes its utmost attention in order to make you say WOW! Our team members have experience of years in this niche and have made tremendous amount of logos for our international clients..",
        reviews: [{
            id: "mk43m5",
            createdAt: 1626541147128,
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
        _id: "90378425",
        fullname: "Yacky Rock",
        username: "Yacky",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i.pinimg.com/originals/00/a5/9c/00a59c194e16fbb7b48fce55a51f9872.jpg",
        about: "My packages are designed to suit your needs in terms of messaging, commenting and posting.",
        reviews: [{
            id: "kl3n24k2n",
            createdAt: 1626541147128,
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
        _id: "90327489",
        fullname: "Sol Tick",
        username: "Sol",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2019/04/16-medium-hairstyle-with-blonde-ombre-and-bangs-9RumfSs4PX.jpg?resize=1010%2C1010&ssl=1",
        about: "My name is Anthony Gomes. I am a graduate from TBS Toulouse Business School (Top 5 Business Schools in France) with a major in Digital Media & Strategy.",
        reviews: [{
            id: "m23m52",
            createdAt: 1626541147128,
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
        _id: "90327489",
        fullname: "Sol Tick",
        username: "Sol",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2019/04/16-medium-hairstyle-with-blonde-ombre-and-bangs-9RumfSs4PX.jpg?resize=1010%2C1010&ssl=1",
        about: "I will illustrate a music cover for singles, albums or EPs. I have years of experience designing covers for hundreds of bands globally.",
        reviews: [{
            id: "m23m52",
            createdAt: 1626541147128,
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
        _id: "083497",
        fullname: "Koby Daniel",
        username: "Koby",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://cdn.visioncenter.org/wp-content/uploads/2020/09/round-face-shape-wayfarers-1024x1024.jpg",
        about: "I work mainly with psychedelic, rock and electronic genres, and love working in a variety of styles. All designs will be produced digitally and delivered with a PNG, JPG and PSD file.",
        reviews: [{
            id: "nk32kl4",
            createdAt: 1626541147128,
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
        about: "My name is issam i have 19 years old i am Graphic designer with over 2 years of experience , I'm Specialized in Mixtape Cover Album Cover And Poster Design...",
        reviews: [{
            id: "dAA33",
            createdAt: 1626541147128,
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
        about: "Hi, its Apliko here. I'm a Graphic Designer with professional graphics skills and many years of working experience in this field. I ensure you that my designs would be Unique, Attractive and Affordable. I can make all types of logos",
        reviews: [{
            id: "aaw13",
            createdAt: 1626541157128,
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
        about: "I'm a Greek graphic designer, illustrator, architect and photographer with over 10 years of experience. After a decade of studying and working in London, I moved to Berlin where my multi-faceted approach to design has allowed me to work in a variety of design fields, often combining my skills for a single project,.",
        reviews: [{
            id: "dfFDW",
            createdAt: 1626541187008,
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
        about: "Hello! I started my career as an illustrator and artist in 2014. With my passion, skill, and my experiences, I'm here to make a high quality artwork for any purpose!.",
        reviews: [{
            id: "ZX2e3",
            createdAt: 1626540887128,
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
        _id: "511344234",
        fullname: "Clode Deli",
        username: "Clode",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
        about: "Hi, Kevin Sagoo (Gurkaran Singh Sagoo), A Graphic designer and Illustration artist from Canada. I am expert in Adobe Illustrator software. I can do Branding, Rebranding, Logos, Illustrations, Cartoon character mascots for you. Thankyou :)",
        reviews: [{
            id: "hgh321",
            createdAt: 1626540887128,
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
        _id: "76487326",
        fullname: "Mike Din",
        username: "Mike",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-gsRmxFQGy_0ciXHr-rwvWjvrV1EeBGmgQ&usqp=CAU",
        about: "I am a Professional graphics designer. I have 5 years experience in creative design. I design and create brand identities, suitable to my clients brand's mission and goals, as my designs stand in prime to enhance your value.",
        reviews: [{
            id: "kj45n3",
            createdAt: 1626540887128,
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
        _id: "76564763",
        fullname: "Jack Kob",
        username: "Jack",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        about: " I have a perfect knowledge of contemporary design, minimalism and design ethics. Check out my gigs and you could also message me about your Podcast Cover Artwork, Book Cover design, and Social media design. Thank You! Damilare.",
        reviews: [{
            id: "b2b24",
            createdAt: 1626540887128,
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
        _id: "31243565",
        fullname: "Rita Costa",
        username: "Rita",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg",
        about: "Hey, I'm a certified graphic designer with a number of years experience within this creative industry. I am highly skilled in designing original designs & artwork for all my clients. My designs are all unique and tailored to each individual's requirements.",
        reviews: [{
            id: "nk4j32n4",
            createdAt: 1626538187128,
            txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "Puki Ben-David",
                imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
            }
        }]
    },
    {
        _id: "5112331",
        fullname: "Roni Ron",
        username: "Roni",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TRmnlIPn36w1HuBoXo7mreaRsINRXlhFWg&usqp=CAU",
        about: " I can create eye catching designs for everything from Business Cards to all your Business Branding I especially love to create covers for Albums, Podcasts, or Books! I'm happy to communicate with and to discuss all ideas with my clients ..so please feel free to get in touch!",
        reviews: [{
                id: "ALs12",
                createdAt: 1626538187128,
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
                createdAt: 1626541100128,
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 5,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "Klaa3",
                createdAt: 1626541120128,
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
                createdAt: 1626541156128,
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 5,
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