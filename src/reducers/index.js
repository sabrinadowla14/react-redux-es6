import {combineReducers} from 'redux';
import projects from './projectReducer';
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';



const rootReducer = combineReducers({
   projects,
   users,
   ajaxCallsInProgress
});

export default rootReducer;
