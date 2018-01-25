import { SEARCH_REQUEST, SEARCH_RECEIVED } from '../actions/actions'
import { combineReducers } from 'redux';

export function search(
    state = {
        businesses: [],
        loading: false
    },
    action
) {
    switch(action.type) {
        case SEARCH_REQUEST:
        return Object.assign({}, state, {
            businesses: [],
            loading: true
        });
        case SEARCH_RECEIVED:
        return Object.assign({}, state, {
            businesses: action.businesses,
            loading: false
        });
        default:
        return state;
        }
    }

const rootReducer = search

export default rootReducer