import React from 'react';
import GoogleLogin from 'react-google-login';
import './GoogleLogin.scss'
import LogoGoogle from '../Img/logo-google.png';
import Button from '@material-ui/core/Button';

const responseGoogle = response => {
    console.log(response);
}

export default function({text}) {
    return (
        <GoogleLogin 
            clientId=''
            buttonText={text}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <Button onClick={renderProps.onClick} className="btn-GoogleLogin" >
                    <img className="logo-google" alt="URLink" src={LogoGoogle} />
                    {text}
                </Button>
              )} />            
    )
}