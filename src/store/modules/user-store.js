import { userService } from '../../services/user-service.js'
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'

// var localLoggedinUser = null;
// if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user || null);

export default {
    state: {
        loggedinUser: userService.getLoggedinUser(),
        users: [],
        watchedUser: null
    },
    getters: {
        users({ users }) { return users },
        loggedinUser({ loggedinUser }) { return loggedinUser },
        watchedUser({ watchedUser }) { return watchedUser },
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.loggedinUser = user;
        },
        addUser(state, { user }) {
            state.users = [
                ...state.users,
                user
            ];
        },
        setWatchedUser(state, { user }) {
            state.watchedUser = user;
        },
        setUsers(state, { users }) {
            state.users = users;
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
        sortReviews(state, { sortBy, sellerId }) {
            console.log(state.users);
            if (sortBy === 'high') {
                state.users.find(user => user._id = sellerId).reviews.sort((a, b) => {
                   return b.rate - a.rate
                })
            }
            else if (sortBy === 'low') {
                state.users.find(user => user._id = sellerId).reviews.sort((a, b) => {
                    return a.rate - b.rate
                })
            }
            else if (sortBy = 'recent') {
                state.users.find(user => user._id = sellerId).reviews.sort((a, b) => {
                   return a.createdAt - b.createdAt
               })
            }
        }
    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred);
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            try {
                const users = await userService.getUsers();
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async removeUser({ commit }, { userId }) {
            try {
                await userService.remove(userId);
                commit({ type: 'removeUser', userId })
            } catch (err) {
                console.log('userStore: Error in removeUser', err)
                throw err
            }
        },
        async updateUser({ commit }, { user }) {
            try {
                user = await userService.save(user);
                commit({ type: 'setUsers', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }

        },
        async getUserById(context, { id }) {
            try {
                let user = await userService.getById(id)
                return user
            } catch (err) {
                console.log('Cannot load user', err);
                throw err;
            }
        }
    }
}