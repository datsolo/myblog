import auth from "./authReducer";
import { combineReducers } from 'redux';


const reducers = combineReducers({
    auth,
});
export default reducers;