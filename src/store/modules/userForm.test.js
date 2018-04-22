import userFormReducer, * as UserForm from './userForm';
import { Map, List } from 'immutable';

describe('actions', () => {
  it('should create an action to insert', () => {
    const expectedAction = {
      type: UserForm.INSERT
    }
    expect(UserForm.insert()).toEqual(expectedAction);
  });

  it('should create an action to name input', () => {
    const expectedAction = {
      type: UserForm.NAME_INPUT_CHANGE,
      payload: 0
    }
    expect(UserForm.nameInputChange(0)).toEqual(expectedAction);
  })
});

describe('user form reducer', () => {
  const initialState = Map({
    phoneNumberOrEmailInput: '',
    nameInput: '',
    nickNameInput: '',
    passwordInput: '',

    userList: List()
  })
  it('should return the initial state', () => {

    expect(userFormReducer(undefined, {})).toEqual(initialState);
  });
  it('should return right state with name', () => {
    
    const name = 'user';

    expect(userFormReducer(initialState, UserForm.nameInputChange(name)).toJS())
    .toHaveProperty('nameInput', 'user');
  })
  it('should return list pushed', () => {
    const stateAfterInputFormsCompleted = Map({
      phoneNumberOrEmailInput: '010',
      nameInput: 'name',
      nickNameInput: '99999',
      passwordInput: 'pw',
      userList: List()
    })

    const resultState = Map({
      phoneNumberOrEmailInput: '',
      nameInput: '',
      nickNameInput: '',
      passwordInput: '',
      userList: List([Map({
        id: 0,
        phoneNumberOrEmail: '010',
        name: 'name',
        nickName: '99999',
        password: 'pw'
      })])
    })
    expect(userFormReducer(stateAfterInputFormsCompleted, UserForm.insert()))
    .toEqual(resultState);
  })
});