
import { orderService } from "../../services/order-service.js"
import { socketService, SOCKET_EVENT_ORDER_ADDED } from "../../services/socket.service.js"


export default {
    state: {
        orders: [],
        filterBy: { type: 'all', title: '', fromPrice: 0, toPrice: null, status: 'all' },
        numOfNewOrders: 0

    },
    getters: {
        numOfNewOrders({ numOfNewOrders }) { return numOfNewOrders },
    },
    mutations: {
        removeOrders(state, { orderId }) {
            const idx = state.orders.findIndex(order => order._id === orderId)
            state.orders.splice(idx, 1)
        },
        addOrder(state, { order }) {
            if (!state.orders.some(o => o._id === order._id)) {
                state.orders.unshift(order)
            }
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex(t => t._id === order._id)
            state.orders.splice(idx, 1, order)
        },
        setOrders(state, { orders }) {
            state.orders = orders
        },
        setLoggedinUserOrders(state, { loggedinUserOrders }) {
            state.loggedInUserOrders = loggedinUserOrders
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        incrementNumOfNewOrders(state, { newOrder }) {
            state.numOfNewOrders++;
        },
        resetNumOfNewOrders(state) {
            state.numOfNewOrders = 0;
        },
        acceptOrder(state, { id }) {
            const order = state.orders.find(order => order._id === id)
            order.status = "Accepted"
        }
    },
    actions: {
        loadOrders({ commit, state }) {
            return orderService.query(state.filterBy)
                .then(orders => {
                    commit({ type: 'setOrders', orders })
                    return orders;
                })
                .catch(err => {
                    console.log('Cannot load orders', err);
                    throw err;
                })
        },
        removeOrders({ commit }, payload) {
            return orderService.remove(payload.orderId)
                .then(() => {
                    commit(payload)
                })
                .catch(err => {
                    console.log('Cannot remove order:', payload.orderId, err);
                    throw err;
                })
        },
        saveOrder({ commit }, payload) {
            const type = (payload.order._id) ? 'updateOrder' : 'addOrder';
            return orderService.save(payload.order)
                .then((savedorder) => {
                    commit({ type, order: savedorder })
                    return savedorder;
                })
                .catch(err => {
                    console.log('Cannot save order:', payload.order, err);
                    throw err;
                })
        },
        getOrderById(context, payload) {
            return orderService.getById(payload.orderId)
                .then(order => {
                    return order;
                })
                .catch(err => {
                    console.log('Cannot load order', err);
                    throw err;
                })
        }

    }

}