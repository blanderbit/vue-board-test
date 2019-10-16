/* eslint-disable */

import {StorageData} from "../localStorage/saveStepData";

export const mutations = {
    SET_SAVE_BORED_TO_LIST(state, data){
        state.list.push(data)
        StorageData.setStorageData(state.list)
    },
    GET_COURSE_WITH_SERVER(state, data){
        state.activity = data
    },
    CHANGE_BORED_LIST(state, data){
        state.list = data;
        StorageData.setStorageData(state.list)
    },
    SET_TOAST(state, data){
        console.log(data)
        state.toast = data
    },
};
