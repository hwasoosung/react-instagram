import React from 'react';

import instagramTypo from '../images/instagram_logo.png';
import appleStore from '../images/apple_store.png';
import googlePlay from '../images/google_play.png';

import './SignIn.css';
import SignInUpButton from './SignInUpButton';
import UserList from './UserList';
import UserForm from './UserForm';
import UserFormContainer from '../containers/UserFormContainer';
import UserListContainer from '../containers/UserListContainer';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: ""};
    this.handleNewUserInfo = this.handleNewUserInfo.bind(this);
  }

  handleNewUserInfo(userInfo) {
    this.setState({
      userInfo: userInfo
    });
  }

  render() {
    return (
      <main>
        <div className="login_white_box">
          {/* instagram logo */}
          <div>
            <img id="insta_logo" src={instagramTypo} alt="instagram" />
          </div>
          
          {/* Sign up */}
          <div id="suggest_for_sign_up">
            <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
          </div>
  
          {/* sign up with facebook button */}
          <SignInUpButton 
            name="signInWithFacebook" 
            text="Facebook으로 로그인"
          />
          
          {/* or */}
          <div id="part_or">
            <div className="or_gray_line" />
            <p id="or">또는</p>
            <div className="or_gray_line" />
          </div>

          {/* User Input Form */}
          <UserFormContainer />
          {/* <UserForm onUserInfoCreate={this.handleNewUserInfo}/> */}

          {/* agree with some rules */}
          <div id="agree_with_rule">
            <p>
              가입하면 Instagram의
              <a className="agree_with_rule_bold" href="https://bit.ly/1FVji0P"> 약관 </a>
                및
              <a className="agree_with_rule_bold" href="https://bit.ly/1EC6ieg"> 개인정보처리방침</a>
              에 동의하게 됩니다.
            </p>
          </div>
        </div>

        <div className="user_list_white_box">
          <UserListContainer userInfo={this.state.userInfo} />
        </div>

        <div className="login_white_box">
          <p className="have_account_q">
            계정이 있으신가요?
            <a id="sign_in" href="https://google.com"> 로그인</a>
          </p>
        </div>
  
        <div>
          <p className="have_account_q">앱을 다운로드하세요.</p>
        </div>
  
        <div id="app_download_buttons">
          <a href="https://apple.co/1VBY4tx"><img className="app_download_button" src={appleStore} alt="Link to apple store" /></a>
          <a href="http://bit.do/edhZE"><img className="app_download_button" src={googlePlay} alt="Link to google play" /></a>
        </div>
      </main>
    );
  }
}

export default SignIn;
