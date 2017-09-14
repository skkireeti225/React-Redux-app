import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import ActivePage from './reducer_active_page';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  posts: PostsReducer,
  activePage: ActivePage,
  form: formReducer
});

export default rootReducer;
