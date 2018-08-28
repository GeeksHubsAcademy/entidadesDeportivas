import axios from 'axios';
import TYPES from './types';

export const fetchUser=()=>{

    async dispatch=>{
        const res = await axios.get('/registrado')

        dispatch({type: TYPES.FETCH_USHER, payload:res.data})
    }

}