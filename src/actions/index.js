import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=originalkeyname';

export function getListData(){  //async and await unnecessary with redux-promise. it is handled
    const resp = axios.get(`${BASE_URL}/todos${API_KEY}`);
    return {
        type: types.GET_LIST_DATA,
        payload: resp
    }
}
