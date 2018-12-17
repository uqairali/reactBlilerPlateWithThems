// import {browserHistory} from 'react-router-dom'
import axrequest from './axiosrequest';
import axios from 'axios';
import fikifooApi from './fikifooApi';
import LocalStorageIO from './LocalStorageIO';
import { enumReviewStatus } from '../utils/constants'
const localStorage = global.window.localStorage;

//get request
export const getRequest={
//  getAllRestaurant(params){
//         return axrequest.get(fikifooApi.getAllRestaurant(params))
//     },

}

//post request
export const postRequest={
//  postFoodImage(postData, config){
//         return axrequest.post(fikifooApi.postFoodImage(), postData, config)
//     },

}

//put request
export const updateRequest={
    // updateRestaurantFood(data,id){
    //     return axrequest.put(fikifooApi.updateRestaurantFood(id),data)
    // },
   
}




export const auth = {

    login(email, password) {

        if (auth.loggedIn()) {
            return Promise.resolve(true);
        }

        return axrequest.post(fikifooApi.login, {
            email,
            password
        })
            .then((response) => { //store user details in local storage
                localStorage.token = response.data.firebaseUid;
                axios.defaults.headers.common['Authorization'] = LocalStorageIO.getToken();
                localStorage.restaurant = JSON.stringify(response.data.role.item.restaurant);
                localStorage.user = JSON.stringify(response.data);
                return Promise.resolve(true);
            })
    },

    loggedIn() {
        return !!localStorage.token;
    },

    logout(history) {

        localStorage.clear();
        history.push('/login');

    },

};





