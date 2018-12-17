import { fromJS } from 'immutable';
import * as actionType from '../constants/index';

export const initialState = fromJS({
test:'my test success',
setNotification:{
notificationMessage: false,
notificationType: 'error'
}
    
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        //catch error
        case actionType.SET_NOTIFICATION:
          return state
        .setIn(['setNotification', 'notificationMessage'], action.errorMessage)
        .setIn(['setNotification', 'notificationType'], action.errorType);
         

        case actionType.CLEAR_NOTIFICATION:
            return state
        .setIn(['setNotification', 'notificationMessage'],false)




        default:
            return state;
    }
}

export default reducer;