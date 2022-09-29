import { combinereducers } from 'redux';

import resumeReducer from './resumeReducer';
const rootReducer = combinereducers({
  resume: resumeReducer
})

export default rootReducer;