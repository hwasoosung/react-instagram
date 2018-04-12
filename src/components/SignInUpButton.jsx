import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignInUpButton.css'

class SignInUpButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    
    let target = event.currentTarget;
    
    let background = target.background;
    target.style.background = background !== "red" ? "red" : "#3897f0";
    
  }

  render() {
    if(this.props.name==="signUp") {
      return (
        <Link 
          to={"/temporary"} 
          className={styles.facebook_sign_in_button} 
          onClick={this.handleClick} 
          name={this.props.name}
          color={this.props.backgroundColor} 
        >
          <p className={styles.facebook_sign_in_button_text} color={this.props.textColor} >{this.props.text}</p>
        </Link>
      );
    }
    return (
      <Link 
        to={"/"} 
        className={styles.facebook_sign_in_button} 
        onClick={this.handleClick} 
        name={this.props.name} 
        color={this.props.backgroundColor} 
      >
        <p className={styles.facebook_sign_in_button_text} color={this.props.textColor}>{this.props.text}</p>
      </Link>
    );
  }
}

export default SignInUpButton;