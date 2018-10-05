import types from '../actions/types';
const DEFAULT_STATE = {
    all: [],
    single: {}
}

export default function(state = DEFAULT_STATE, action){
    switch (action.type){
        case types.GET_SINGLE_ITEM:
            // console.log(action.payload)
            return {...state, single: action.payload.data.todo};
        case types.GET_LIST_DATA:
            return {...state, all: action.payload.data.todos};
        default:
            return state;
    }
}
