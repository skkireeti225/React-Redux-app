import { FETCH_POSTS, FETCH_POST, BUDGET_STAKE } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, share: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload };
  case FETCH_POSTS:
    return { ...state, all: action.payload };
  case BUDGET_STAKE:
    return { ...state, share: action.payload };
  default:
    return state;
  }
}
