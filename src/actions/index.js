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

export function addListItem(item){
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    return {
        type: types.ADD_LIST_ITEM,
        payload: resp
    }
}

export function getSingleItem(itemId){
    const resp = axios.get(`${BASE_URL}/todos/${itemId + API_KEY}`);
    return {
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}

export function toggleCompleted(itemId){
    const resp = axios.put(`${BASE_URL}/todos/${itemId + API_KEY}`);
    return {
        type: types.TOGGLE_COMPLETED,
        payload: resp
    }
}
