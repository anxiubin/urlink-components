import React from 'react';
import Button from '@material-ui/core/Button';
import './SigninupAgree.scss';

export default function SigninupText({text}) {

  return (
      <Button variant="text" color="primary" className="btn-SigninupText">
        {text}
      </Button>
  );
}