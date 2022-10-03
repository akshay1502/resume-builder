import * as actions from '../actions/resumeActions';
export const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    github: '',
    linkedIn: ''
  },
  personalInfoValidation: {
    firstNameErrMsg: '',
    lastNameErrMsg: '',
    emailErrMsg: '',
    phoneNoErrMsg: '',
    githubErrMsg: '',
    linkedInErrMsg: ''
  },
  experienceDetails: [
    // format for experience
    // {
    //   companyName: '',
    //   designation: '',
    //   duration: '',
    //   summary: ''
    // }
  ],
  educationDetails: [
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
      return { ...state, personalInfo: { ...state.personalInfo, [name]: value}};
    }
    case actions.VALIDATE_PERSONALINFO: {
      const {name, value} = action.payload.target;
      let errMsg;
      switch(name) {
        case 'firstName':
        case 'lastName': {
          const result = /^[a-zA-z]+$/.test(value.trim());
          errMsg = result ? '' : 'error';
          break;
        }
        case 'email': {
          const result = /\S+@\S+\.\S+/.test(value.trim());
          errMsg = result ? '' : 'error';
          break;
        }
        case 'phoneNo': {
          const result = /^[1-9]\d{9}$/.test(value.trim());
          errMsg = result ? '' : 'error';
          break;
        }
        case 'github': {
          const result = /^(https:\/\/github\.com\/)\w+/.test(value.trim());
          errMsg = result ? '' : 'error';
          break;
        }
        case 'linkedIn': {
          const result = /^(https:\/\/www\.linkedin\.com\/in\/)(\w+|-+)+/.test(value.trim());
          errMsg = result ? '' : 'error';
          break;
        }
      }
      return {
        ...state, 
        personalInfoValidation: { 
          ...state.personalInfoValidation,
          [name]: errMsg
        }};
    }
    case actions.UPDATE_EDUCATION: {  
      return {
        ...state,
        educationDetails: state.educationDetails.concat({...action.payload, id: Math.random})
      }
    }
    case actions.STORE_TO_LOCALSTORAGE: {
      window.localStorage.setItem('initialState', JSON.stringify(state));
      return state;
    }
    case actions.GET_DATA_FROM_LOCALSTORAGE: {
      const getData = window.localStorage.getItem('initialState');
      if (getData) {
        const jsonData = JSON.parse(getData);
        if (Object.keys(jsonData).length) {
          return {
            ...state,
            ...jsonData
          }
        }
      }
      return state;
    }
    case actions.UPDATE_EXPERIENCE: {
      return {
        ...state,
        experienceDetails: state.experienceDetails.concat({...action.payload, id: Math.random})
      }
    }
    default:
      return state;
  }
}