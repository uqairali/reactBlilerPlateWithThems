const localStorage = global.window.localStorage;

const LocalStorageIO = {
    getRestaurant() {
        try {

            return JSON.parse(localStorage.restaurant);
        } catch (e) {
            console.log(e);
            return '';
        }
    },
    getUser() {
        return JSON.parse(localStorage.user||null);
    },
    getToken() {
        try {

            return localStorage.token;
        } catch (e) {
            return ''
        }

    }
}

export default LocalStorageIO;