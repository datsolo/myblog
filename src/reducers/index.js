import { combineReducers } from 'redux';
import auth from "./authReducer";
import hastag from './hastagReducer';
import blog from './blogReducer';
import account from './accountReducer';


const reducers = combineReducers({
    auth,
    hastag,
    blog,
    account
});
export default reducers;