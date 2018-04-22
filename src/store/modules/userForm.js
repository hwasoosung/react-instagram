import { createAction, handleActions} from 'redux-actions'; 
import { Map, List } from 'immutable';

// actions 
export const PHONE_OR_EMAIL_INPUT_CHANGE = 'userForm/PHONE_OR_EMAIL_INPUT_CHANGE';
export const NAME_INPUT_CHANGE = 'userForm/NAME_INPUT_CHANGE';
export const NICKNAME_INPUT_CHANGE = 'userForm/NICKNAME_INPUT_CHANGE';
export const PASSWORD_INPUT_CHANGE = 'userForm/PASSWORD_INPUT_CHANGE';
export const INSERT = 'userForm/INSERT';
export const REMOVE = 'userForm/REMOVE';

// action creators 
export const phoneOrEmailInputChange = createAction(PHONE_OR_EMAIL_INPUT_CHANGE, value => value);
export const nameInputChange = createAction(NAME_INPUT_CHANGE, value => value);
export const nickNameInputChange = createAction(NICKNAME_INPUT_CHANGE, value => value);
export const passwordInputChange = createAction(PASSWORD_INPUT_CHANGE, value => value);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE, id => id);

// initial state 
let id = 0;

let initialState = Map({
  phoneNumberOrEmailInput: '',
  nameInput: '',
  nickNameInput: '',
  passwordInput: '',

  userList: List()
});

// reducer
export default handleActions({
  [PHONE_OR_EMAIL_INPUT_CHANGE] : (state, action) => { return state.set('phoneNumberOrEmailInput', action.payload) },
  [NAME_INPUT_CHANGE] : (state, action) => { return state.set('nameInput', action.payload) },
  [NICKNAME_INPUT_CHANGE] : (state, action) => { return state.set('nickNameInput', action.payload) },
  [PASSWORD_INPUT_CHANGE] : (state, action) => { return state.set('passwordInput', action.payload) },

  [INSERT] : (state, action) => {
    const newItem = Map({
      id: id++,
      phoneNumberOrEmail: state.get('phoneNumberOrEmailInput'),
      name: state.get('nameInput'),
      nickName: state.get('nickNameInput'),
      password: state.get('passwordInput')
    })
    console.log(newItem);
    return state.update('userList', userList => userList.push(newItem))
                .set('phoneNumberOrEmailInput','')
                .set('nameInput','')
                .set('nickNameInput','')
                .set('passwordInput','') ;
  },
  [REMOVE] : (state, action) => {
    let id = action.payload;
    let index = state.get('userList').findIndex(item => item.get('id') === id);
    
    return state.deleteIn(['userList', index]);
  }
}, initialState);