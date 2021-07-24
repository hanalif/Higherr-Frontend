
import { httpService } from '../services/http.service.js'
import { socketService } from './socket.service.js'


const USER_KEY = 'user'



export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    save,
    getLoggedinUser,
}

async function getUsers() {
    return httpService.get(`user`)
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
        return httpService.delete(`user/${userId}`)
}


function save(user) {
    if (user._id) {
        return httpService.put(`user/${user._id}`, user)
    } 
}

async function signup(userCred) {
        const user = await httpService.post('auth/signup', userCred)
        socketService.emit('set-user-socket', user._id);

    return _saveLocalUser(user)
}


async function login(userCred) {
 
    const user = await httpService.post('auth/login', userCred);
    socketService.emit('set-user-socket', user._id);
    if (user) return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    socketService.emit('unset-user-socket')
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}