import Vuex from 'vuex';


function createStore() {
    return new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            increment(state) {
                state.count++;
            }
        }
    });
}

export default createStore;