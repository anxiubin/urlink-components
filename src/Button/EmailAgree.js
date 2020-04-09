import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './SigninupAgree.scss';

export default function EmailAgree() {
    const [bool, setBool] = React.useState(false);

    const changeBool = () => {
        setBool(prevBool => !prevBool);
    };

  return (
    <FormControlLabel 
        value="이메일 수신 동의" 
        label="이메일 수신 동의" 
        className="text-agree"
        control={<Radio color="primary" checked={bool} onClick={changeBool} />}
        />
  );
}