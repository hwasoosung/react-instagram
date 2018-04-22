import React from 'react';

import SignInUpButton from './SignInUpButton'
import styles from './UserForm.css';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    
    // this.state = {
    //   phoneNumberOrEmail: "",
    //   name: "",
    //   nickName: "",
    //   password: ""
    // }

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.initialLizeInputForm = this.initialLizeInputForm.bind(this);
  }

  // handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
    
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.onUserInfoCreate(this.state);
  //   this.initialLizeInputForm();
  // }

  // initialLizeInputForm() {
  //   this.setState({
  //     phoneNumberOrEmail: "",
  //     name: "",
  //     nickName: "",
  //     password: ""
  //   });
  // }

  render() {
    const {
      onChangePhoneOrEmailInput,
      onChangeNameInput,
      onChangeNickNameInput,
      onChangePassword,
      onInsert,

      phoneNumberOrEmailInput,
      nameInput,
      nickNameInput,
      passwordInput
    } = this.props;

    return (
      <form name="user_info" method="post" onSubmit={onInsert}>
          <fieldset id="fieldset">
            {/* cp or email */}
            <input 
              className="input" 
              type="text" 
              required="true" 
              name="phoneNumberOrEmail" 
              onChange={onChangePhoneOrEmailInput} 
              placeholder="휴대폰 번호 또는 이메일 주소" 
              value={phoneNumberOrEmailInput}
            />
            {/* name */}
            <input 
              className="input" 
              type="text" 
              required="true" 
              name="name" 
              onChange={onChangeNameInput} 
              placeholder="성명"
              value={nameInput} 
            />
            {/* nick name */}
            <input 
              className="input" 
              type="text" 
              required="true" 
              name="nickName" 
              onChange={onChangeNickNameInput} 
              placeholder="사용자 이름"
              value={nickNameInput} 
            />
            {/* password */}
            <input 
              className="input" 
              type="password" 
              required="true"
              name="password" 
              onChange={onChangePassword} 
              placeholder="비밀번호" 
              value={passwordInput}
            />
          </fieldset>

          {/* sign up button */}
          <SignInUpButton 
            name="signUp" 
            text="가입"
          />  
      </form>
    );
  }
}

export default UserForm;