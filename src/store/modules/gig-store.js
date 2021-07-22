import { gigService } from "../../services/gig-service.js";

const PAGE_SIZE = 12

export default {
    state: {
        gigs: [],
        pageIndex: 0,
        filterBy: {
            txt: '',
            tags: 'all',
            delivery: null,
            price: {
                min: 0,
                max: Infinity
            }
        },
        currGig: {},
        sortBy: 'all',
        gigsToShow: []
    },
    getters: {
        gigsToShow(state) {
            var startIdx = state.pageIndex * PAGE_SIZE
            return state.gigsToShow.slice(startIdx, startIdx + PAGE_SIZE)
        },
        getGigs(state) {
            return state.gigs
        },
        topGigs(state) {
            // add sort by highest rate or review amount
            return state.gigs.slice(5, 9)
        },
        paggingSize(state) {
            let pages = Math.floor(state.gigsToShow.length / PAGE_SIZE)
            return pages
        },
        getPageIdx(state) {
            return state.pageIndex
        },
        getCurrGig(state) {
            return state.currGig
        },
        getFilter(state) {
            return state.filterBy
        }
    },
    mutations: {
        removeGig(state, { gigId }) {
            const idx = state.gigs.findIndex(gig => gig._id === gigId)
            state.gigs.splice(idx, 1)
        },
        addGig(state, { gig }) {
            state.gigs.push(gig)
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
            var gigs = state.gigs
            if (filterBy.txt === '' && filterBy.tags === 'all' &&
                !filterBy.delivery && filterBy.price.min <= 0 && filterBy.price.max === Infinity) return gigs
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
                else if (filterBy.delivery === '15') return gig.delivery <= 15
                else if (filterBy.delivery === '30') return gig.delivery <= 30
                else return gig.delivery > 0
            })
            filtered = filtered.filter(gig => {
                return gig.price >= filterBy.price.min && gig.price <= filterBy.price.max
            })
            state.gigsToShow = filtered.sort((a, b) => {
                if (state.sortBy === 'all') return state.gigsToShow
                else if (state.sortBy === 'high-to-low') return b.price - a.price
                else if (state.sortBy === 'low-to-high') return a.price - b.price
            });
        },
        setCurrGig(state, { gig }) {
            state.currGig = gig
        },
        setSort(state, { sortBy }) {
            state.sortBy = sortBy
        },
        movePage(state, { diff }) {
            state.pageIndex += diff
            const maxPageNum = Math.ceil(state.gigs.length / PAGE_SIZE)
            if (state.pageIndex >= maxPageNum) state.pageIndex = 0
            if (state.pageIndex < 0) state.pageIndex = maxPageNum - 1
        },
        jumpToPage(state, { num }) {
            state.pageIndex = num - 1
        }
    },
    actions: {
        async loadGigs({ commit, state }) {
            try {
                let gigs = await gigService.query()
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
                let gig = await gigService.getById(id)
                return gig
            } catch (err) {
                console.log('Cannot load gig', err);
                throw err;
            }
        },
        async getGigsByUserId(context, { id }) {
            return context.state.gigs.filter(gig => {
                gig.seller._id === id
            })
        }
        // gigsToShow(state) {
        //     var startIdx = state.pageIndex * PAGE_SIZE
        //     var gigs = state.gigs
        //     var filterBy = state.filterBy
        //     if (filterBy.txt === '' && filterBy.tags === 'all' &&
        //         !filterBy.delivery && filterBy.price.min <= 0 && filterBy.price.max === Infinity) return gigs.slice(startIdx, startIdx + PAGE_SIZE);
        //     const searchStr = filterBy.txt.toLowerCase();
        //     let filtered = gigs.filter(gig => {
        //         if (searchStr === '') return gig
        //         return gig.title.toLowerCase().includes(searchStr)
        //     })
        //     filtered = filtered.filter(gig => {
        //         var tagsStr = gig.tags.join(' ')
        //         if (filterBy.tags === 'all') return gig
        //         return tagsStr.includes(filterBy.tags)
        //     })
        //     filtered = filtered.filter(gig => {
        //         if (filterBy.delivery === '1') return gig.delivery <= 1
        //         else if (filterBy.delivery === '3') return gig.delivery <= 3
        //         else if (filterBy.delivery === '7') return gig.delivery <= 7
        //         else if (filterBy.delivery === '15') return gig.delivery <= 15
        //         else if (filterBy.delivery === '30') return gig.delivery <= 30
        //         else return gig.delivery > 0
        //     })
        //     filtered = filtered.filter(gig => {
        //         return gig.price >= filterBy.price.min && gig.price <= filterBy.price.max
        //     })
        //     return filtered.slice(startIdx, startIdx + PAGE_SIZE).sort((a, b) => {
        //         if (state.sortBy === 'high-to-low') return b.price - a.price
        //         else if (state.sortBy === 'low-to-high') return a.price - b.price
        //     });
        // },
    }

}