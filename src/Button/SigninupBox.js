import React from 'react';
import Button from '@material-ui/core/Button';
import './SigninupAgree.scss';

export default function SigninupBox({text}) {

  return (
      <Button variant="contained" color="primary" className="btn-SigninupBox">
        {text}
      </Button>
  );
}