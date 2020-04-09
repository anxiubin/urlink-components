import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import './EmailPassword.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '420px',
    },
  },
}));

export default function EmailNickname({placeholder}) {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.root}>
        <OutlinedInput 
            type="text" 
            variant="outlined" 
            color="primary" 
            placeholder={placeholder}
            className="input-email" />
    </FormControl>
  );
}

//에러날 경우 컴포넌트에 error & helperText="올바르지 않은 이메일 양식입니다." 두가지 prop 추가하기
//잘 입력할 경우 helperText="올바른 이메일 양식입니다."