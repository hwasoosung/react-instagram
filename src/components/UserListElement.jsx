import React from 'react';
import './UserListElement.css'

function UserListElement(props) {
  console.log('props.userInfo');
  console.log(props.userInfo);
  const { phoneNumberOrEmail, name, nickName, password } = props.userInfo;
    // const phoneNumberOrEmail = props.userInfo.phoneNumberOrEmail;
    // const name = props.userInfo.name;
    // const nickName = props.userInfo.nickName;
    // const password = props.userInfo.password;
    
  return (
    <div className="user_list_element">
      <hr />
      <p>{"phoneNumberOrEmail: " + phoneNumberOrEmail}</p>
      <p>{"name: " + name}</p>
      <p>{"nickName: " + nickName}</p>
      <p>{"password: " + password}</p>
    </div>
  );
}

export default UserListElement;