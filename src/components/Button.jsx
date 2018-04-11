import React from 'react';

function Button(props) {
  return (
    <div id="facebook_sign_in" color={props.backgroundColor} className="facebook_sign_in_button">
          <p color={props.textColor} className="facebook_sign_in_button_text">{props.name}</p>
    </div>
  );
}