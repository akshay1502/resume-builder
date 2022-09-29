import * as actions from '../actions/resumeActions';
export const initialState = {
  personalInfo: {
    fullName: '',
    email: '',
    phoneNo: '',
    github: '',
    linkedIn: ''
  },
  education: [
    // format for educational details
    // {
    //   collegeInstituteName: '',
    //   degree: '',
    //   percentage: ''
    // }
  ]
}

export default function resumeReducer(state = initialState, action) {
  switch(action.type) {
    case actions.UPDATE_PERSONALINFO: {
      const {name, value} = action.payload.target;
      return { ...state, personalInfo: { ...state.personalInfo, [name]: [value]}};
    } 
    default:
      return state;
  }
}