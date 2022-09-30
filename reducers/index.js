import { combineReducers } from 'redux';
import resumeReducer from './resumeReducer';

const rootReducer = combineReducers({
  resume: resumeReducer
})

export default rootReducer;