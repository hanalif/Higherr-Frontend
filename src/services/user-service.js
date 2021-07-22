// import { storageService } from './async-storage.service'
import { httpService } from '../services/http.service.js'
import { storageService } from '../services/async-storage-service.js'
// const SCORE_FOR_REVIEW = 10
const USER_KEY = 'user'



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

async function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
    // var users = await storageService.query(USER_KEY);
    // if (!users || !users.length) users = gUsers;
    // localStorage.setItem(USER_KEY, JSON.stringify(users));
    // return users
}

function getById(userId) {
    // return storageService.get('user', userId)
    return httpService.get(`user/${userId}`)
    // return storageService.get(USER_KEY, userId)
}

function remove(userId) {
    // return storageService.remove(USER_KEY, userId)
        return httpService.delete(`user/${userId}`)
}


function save(user) {
    if (user._id) {
        return httpService.put(`user/${user._id}`, user)
    } 
    // else {
    //     return httpService.post(`user/${user._id}`, user)
    // }
}

async function signup(userCred) {
    // const user = await storageService.post(USER_KEY, userCred)
        const user = await httpService.post('auth/signup', userCred)
        
    return _saveLocalUser(user)
}

// async function increaseScore(by = SCORE_FOR_REVIEW) {
//     const user = getLoggedinUser()
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

async function login(userCred) {
    // const users = await storageService.query(USER_KEY)
    // const user = users.find(user => user.username === userCred.username)
    // return _saveLocalUser(user)

    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
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