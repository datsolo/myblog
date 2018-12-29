import { combineReducers } from 'redux';
import auth from "./authReducer";
import hastag from './hastagReducer';
import blog from './blogReducer';


const reducers = combineReducers({
    auth,
    hastag,
    blog
});
export default reducers;