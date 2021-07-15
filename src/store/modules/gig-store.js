import { gigService } from "../../services/gig-service.js";

export default {
    state: {
        gigs: [],
        filterBy: {},
        currGig: {}
    },
    getters: {
        gigsToShow(state) {
            let gigsToShow = state.gigs;
            return gigsToShow;
        },
<<<<<<< HEAD
        gigToShow(state) {
            return state.gig
        }
=======
>>>>>>> b043cdb5d111b4443e334ba6e0695f729598ea29
    },
    mutations: {
        removeGig(state, { gigId }) {
            const idx = state.gigs.findIndex(gig => gig._id === gigId)
            state.gigs.splice(idx, 1)
        },
        addGig(state, { gig }) {
            state.gigs.unshift(gig)
        },
        updateGig(state, { gig }) {
            const idx = state.gigs.findIndex(g => g._id === gig._id)
            state.gigs.splice(idx, 1, gig)
        },
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setCurrGig(state, { gig }) {
            console.log('~ gig', gig)
            state.currGig = gig
        }
    },
    actions: {

        async loadGigs({ commit, state }) {
            try {
                let gigs = await gigService.query(state.filterBy)
                commit({ type: 'setGigs', gigs })
                return gigs;
            } catch (err) {
                console.log('Cannot load gigs', err);
                throw err;
            }
        },
        async removeGig({ commit }, payload) {
            try {
                await gigService.remove(payload.gigId)
                commit(payload)
            } catch (err) {
                console.log('Cannot remove gig:', payload.gigId, err);
                throw err;
            }
        },
        async saveGig({ commit }, payload) {
            const type = (payload.gig._id) ? 'updateGig' : 'addGig';
            try {
                let savedGig = await gigService.save(payload.gig)
                commit({ type, gig: savedGig })
                return savedGig;
            } catch (err) {
                console.log('Cannot save gig:', payload.gig, err);
                throw err;
            }
        },
        async getGigById(context, { id }) {
            try {
<<<<<<< HEAD
                let gig = await gigService.getById(JSON.stringify(payload.id))
                console.log('~ gig', gig)
                context.commit({ type: 'setCurrGig', gig })
=======
                let gig = await gigService.getById(id)
>>>>>>> b043cdb5d111b4443e334ba6e0695f729598ea29
                return gig
            } catch (err) {
                console.log('Cannot load gig', err);
                throw err;
            }
        }
    }

}