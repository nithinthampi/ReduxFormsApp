export const FETCH_POSTS='FETCH_POSTS';
export const CREATE_POST='CREATE_POST';
export const FETCH_POST ='FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
import axios from 'axios';

const API_KEY = 'nithinthampi1234';
const API_ROOT_URL = `http://reduxblog.herokuapp.com/api`;
export function fetchPosts(){
    const request = axios.get(`${API_ROOT_URL}/posts?key=${API_KEY}`);
    return ({
        type : FETCH_POSTS,
        payload:request
    });
}

export function createPost(values,callback){
    const request = axios.post(`${API_ROOT_URL}/posts?key=${API_KEY}`,values).then(
        () => callback()
    );
    return ({
        type: CREATE_POST,
        payload:request
    })
} 

export function fetchPost(id){
    const request  = axios.get(`${API_ROOT_URL}/posts/${id}?key=${API_KEY}`);
    return {
        type : FETCH_POST,
        payload:request
    }
}

export function deletePost(id,callback){
    const request = axios.delete(`${API_ROOT_URL}/posts/${id}?key=${API_KEY}`).then(
        () => callback()
    );
    return {
        type : DELETE_POST,
        payload :id
    }
}