import {FETCH_POSTS,FETCH_POST,DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action){
    switch(action.type){
            case FETCH_POSTS:
               return (_.mapKeys(action.payload.data,'id'));
            case FETCH_POST:
                const post = action.payload.data;
                console.log(action.payload);
                const newState = {...state,[post.id]:post}
                return newState;
            case DELETE_POST:
                _.omit(state,action.payload);     
            default:
                return state;
    }
}