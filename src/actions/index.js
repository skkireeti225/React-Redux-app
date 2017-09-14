import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const BUDGET_STAKE = 'BUDGET_STAKE';

// const ROOT_URL = 'http://localhost:8888';

const ROOT_URL = 'http://127.0.0.1:8888';


// const API_KEY = '?key=lkajdsfapipwietpw';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/api/projectsList`);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_POSTS, payload: data})
    });
  };
}

export function budgetStake() {
  const request = axios.get(`${ROOT_URL}/api/budgetPercentage`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: BUDGET_STAKE, payload: data})
    });
  };
}




export function createPost(props) {
  const request = axios.post(``, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}


export function activePage(page) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'ACTIVE_PAGE',
    payload: page
  };
}
