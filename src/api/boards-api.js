import Vue from 'vue';


export class BoredApi{

    static createBored(data){
        const type = data && data.type ? data.type.toLowerCase() : '';
        const participants = data && data.participants ? data.participants : ''
        const price = data && data.price ? data.price : '';
        // debugger
        return Vue.http.get(`activity?type=${type}&participants=${participants}&price=${price}`)//
    }
    
}
