import { combineReducers } from 'redux';
import auth from "./authReducer";
import hastag from './hastagReducer';
import blog from './blogReducer';
import account from './accountReducer';
import comment from './commentReducer';


const reducers = combineReducers({
    auth,
    hastag,
    blog,
    account,
    comment
});
export default reducers;