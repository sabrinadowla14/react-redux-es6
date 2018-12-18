import {combineReducers} from 'redux';
import projects from './projectReducer';
import users from './userReducer';



const rootReducer = combineReducers({
   projects,
   users
});

export default rootReducer;
