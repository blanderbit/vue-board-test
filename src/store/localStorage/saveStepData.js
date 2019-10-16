

export class StorageData{

    static setStorageData(data){
        return localStorage.setItem('data', JSON.stringify(data));
    }

    static getStorageData(){
        try {
            return  JSON.parse(localStorage.getItem('data'));
        } catch (e) {
            return []
        }
    }

    static clearStorageData(){
        return localStorage.clear();
    }
}
