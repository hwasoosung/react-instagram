import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserFormActions from '../store/modules/userForm';
import UserForm from '../components/UserForm';

class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeNameInput = this.handleChangeNameInput.bind(this);
    this.handleChangeNickNameInput = this.handleChangeNickNameInput.bind(this);
    this.handleChangePasswordInputChange = this.handleChangePasswordInputChange.bind(this);
    this.handleChangePhoneOrEmailInput = this.handleChangePhoneOrEmailInput.bind(this);
    this.handleInsert = this.handleInsert.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChangePhoneOrEmailInput(event) {
    const value = event.target.value;
    this.props.UserFormActions.phoneOrEmailInputChange(value);
  }
  handleChangeNameInput(event) {
    const value = event.target.value;
    this.props.UserFormActions.nameInputChange(value);
  }
  handleChangeNickNameInput(event) {
    const value = event.target.value;
    this.props.UserFormActions.nickNameInputChange(value);
  }
  handleChangePasswordInputChange(event) {
    const value = event.target.value;
    this.props.UserFormActions.passwordInputChange(value);
  }
  handleInsert(event) {
    event.preventDefault();
    this.props.UserFormActions.insert();
  }
  // 얘는 여기 필요 없을 것같은데 일단 해둠
  handleRemove(id) {
    this.props.UserFormActions.remove(id);
  }

  render() {
    const { 
      handleChangePhoneOrEmailInput,
      handleChangeNameInput,
      handleChangeNickNameInput,
      handleChangePasswordInputChange,
      handleInsert
    } = this;

    const {
      phoneNumberOrEmailInput,
      nameInput,
      nickNameInput,
      passwordInput
    } = this.props;

    return (
      <UserForm 
        onChangePhoneOrEmailInput={handleChangePhoneOrEmailInput}
        onChangeNameInput={handleChangeNameInput}
        onChangeNickNameInput={handleChangeNickNameInput}
        onChangePassword={handleChangePasswordInputChange}
        onInsert={handleInsert}

        phoneNumberOrEmailInput={phoneNumberOrEmailInput}
        nameInput={nameInput}
        nickNameInput={nickNameInput}
        passwordInput={passwordInput}
      />
    );
    
  }
}

export default connect(
  (state) => {
    return {
      phoneNumberOrEmailInput: state.userForm.get('phoneNumberOrEmailInput'),
      nameInput: state.userForm.get('nameInput'),
      nickNameInput: state.userForm.get('nickNameInput'),
      passwordInput: state.userForm.get('passwordInput'),
      userList: state.userForm.get('userList').toJS() //////////////////
    }
  },
  (dispatch) => {
    return {
      UserFormActions: bindActionCreators(UserFormActions, dispatch)
    };
  }
)(UserFormContainer);