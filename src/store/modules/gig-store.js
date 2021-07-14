import { gigService } from "../../services/gig-service.js";

export const gigsStore = {
    state: {
        gigs: [],
        filterBy: {},
    },
    getters: {
        gigsToShow(state) {
            let gigsToShow = state.gigs;
            return gigsToShow;
        }
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
        }
    },
    actions: {
        
        async loadGigs({ commit, state }) {
            try{
                let gigs = await gigService.query(state.filterBy)
                commit({ type: 'setGigs', gigs })
                    return gigs;
            }catch (err){
                console.log('Cannot load gigs', err);
                    throw err;
            }
        },
        async removeGig({ commit }, payload) {
            try{
                await gigService.remove(payload.gigId)
                commit(payload)
            }catch(err){
                console.log('Cannot remove gig:', payload.gigId, err);
                    throw err;
            }
        },
        async saveGig({ commit }, payload) {
            const type = (payload.gig._id) ? 'updateGig' : 'addGig';
            try{
                let savedGig = await gigService.save(payload.gig)
                commit({ type, gig: savedGig })
                    return savedGig;
            } catch(err) {
                    console.log('Cannot save gig:', payload.gig, err);
                    throw err;
                }
        },
        getGigById(context, payload) {
            try{
                let gig = await gigService.getById(payload.gigId) 
                return gig
            }catch(err){
                    console.log('Cannot load gig', err);
                    throw err;
                }
        
        }

    }

}