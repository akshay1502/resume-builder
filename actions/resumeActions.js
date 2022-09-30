export const UPDATE_PERSONALINFO = 'UPDATE_PERSONALINFO';
export const VALIDATE_PERSONALINFO = 'VALIDATE_PERSONALINFO';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const STORE_TO_LOCALSTORAGE = 'STORE_TO_LOCALSTORAGE';
export const GET_DATA_FROM_LOCALSTORAGE = 'GET_DATA_FROM_LOCALSTORAGE';

export const updatePersonalInfo = (obj) => ({
  type: UPDATE_PERSONALINFO,
  payload: obj
})

export const validatePersonalInfo = (obj) => ({
  type: VALIDATE_PERSONALINFO,
  payload: obj
})

export const updateEducation = (obj) => ({
  type: UPDATE_EDUCATION,
  payload: obj
})

export const storeToLocalStorage = () => ({
  type: STORE_TO_LOCALSTORAGE
})

export const getDataFromLocalStorage = () => ({
  type: GET_DATA_FROM_LOCALSTORAGE
})
