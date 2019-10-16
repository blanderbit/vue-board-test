import {BoredApi} from "../../api/boards-api";


export const actions = {

    GET_BORED_WITH_SERVER({commit}, payload) {
        BoredApi.createBored(payload)
            .then(res => {
                let data = res.body;
                if(data.error) {
                    commit('SET_TOAST',
                       {type: 'error', text: data.error, active: true}
                    );
                    return;
                }
                data.type = data.type[0].toUpperCase() +  data.type.substring(1);
                commit('GET_COURSE_WITH_SERVER',data)
            })
    },

    SET_SAVE_BORED_TO_LIST ({commit}, payload) {
        commit('SET_SAVE_BORED_TO_LIST', payload)
    },

    CHANGE_BORED_LIST ({commit}, payload) {
        commit('CHANGE_BORED_LIST', payload)
    }
    
};

