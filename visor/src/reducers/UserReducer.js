import TYPES from '../actions/types';

export default function(state=null, action){
    console.log(action);

    switch (action.type) {
        case TYPES.FETCH_USER:
            return action.payload||false;
    
        default:
            return state;
    }
    
}