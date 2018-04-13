import React from 'react';

import SignInUpButton from './SignInUpButton'
import styles from './UserForm.css';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      phoneNumberOrEmail: "",
      name: "",
      nickName: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.initialLizeInputForm = this.initialLizeInputForm.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserInfoCreate(this.state);
    this.initialLizeInputForm();
  }

  initialLizeInputForm() {
    this.setState({
      phoneNumberOrEmail: "",
      name: "",
      nickName: "",
      password: ""
    });
  }

  render() {
    return (
      <form name="user_info" method="post" onSubmit={this.handleSubmit}>
          <fieldset id="fieldset">
            {/* cp or email */}
            <input 
              className="input" 
              type="text" 
              required="true" 
              name="phoneNumberOrEmail" 
              onChange={this.handleChange} 
              placeholder="휴대폰 번호 또는 이메일 주소" 
              value={this.state.phoneNumberOrEmail}
            />
            {/* name */}
            <input 
              className="input" 
              type="text" 
              required="true" 
              name="name" 
              onChange={this.handleChange} 
              placeholder="성명"
              value={this.state.name} 
            />
            {/* nick name */}
            <input 
              className="input" 
              type="text" 
              required="true" 
              name="nickName" 
              onChange={this.handleChange} 
              placeholder="사용자 이름"
              value={this.state.nickName} 
            />
            {/* password */}
            <input 
              className="input" 
              type="password" 
              required="true"
              name="password" 
              onChange={this.handleChange} 
              placeholder="비밀번호" 
              value={this.state.password}
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