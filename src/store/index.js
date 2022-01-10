import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.headers.common['X-FIB-API-LANGUAGE'] = 'en_GB';
axios.defaults.headers.common['X-FIB-API-AUTH-TYPE'] = 'exam';
axios.defaults.headers.common['X-FIB-API-AUTH-TOKEN'] = 'F6HCAFVHPEg3"Sw#';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        guests: []
    },
    getters: {
        getLoading: (state) => state.loading,
        getGuests: (state) => state.guests
    },
    mutations: {
        setLoading: (oldState, value) => {
            oldState.loading = value;
        },
        setGuests: (oldState, value) => {
            oldState.guests = value;
        },
        addOrderToGuest: (oldState, value) => {
            const guestId = value[0].guest_id;
            oldState.guests.filter((guest) => guest.id === guestId)[0].order = value;
        }
    },
    actions: {
        fetchGuests({ commit, dispatch }, { dateRange }) {
            return new Promise((resolve, reject) => {
                commit('setLoading', true);
                

                const query = {
                    since: new Date(dateRange[0]).toISOString(),
                    until: dateRange.length === 1 ? new Date(dateRange[0]).toISOString() : new Date(dateRange[1]).toISOString(),
                    limit: 1000
                };

                axios
                    .get('https://tst-api.feeditback.com/exam.guests', { params: query })
                    .then((response) => {
                        const guests = response.data.items;
                        guests.forEach((guest) => {
                            dispatch('fetchOrdersForGuest', { guestId: guest.id});
                        });
                        commit('setGuests', response.data.items);
                        resolve();
                    })
                    .catch((error) => {
                        console.error(error);
                        reject(error);
                    })
                    .finally(() => {
                        commit('setLoading', false);
                    });
            });
        },
        fetchOrdersForGuest({ commit }, { guestId }) {
            return new Promise((resolve, reject) => {
                commit('setLoading', true);
                const query = {
                    guest_id: guestId,
                    limit: 1000
                };

                axios
                    .get('https://tst-api.feeditback.com/exam.guests.orders', { params: query })
                    .then((response) => {
                        commit('addOrderToGuest', response.data.items);
                        resolve();
                    })
                    .catch((error) => {
                        console.error(error);
                        reject(error);
                    });
            });
        }
    }
});
