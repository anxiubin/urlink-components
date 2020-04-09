import React from 'react';
import './LoginSignup.scss';
import GoogleLogin from '../Button/GoogleLogin';
import URLinkLogo from '../Img/logo-urlink-full.png'
import EmailNickname from '../Input/EmailNickname';
import Password from '../Input/Password';
import SigninupBox from '../Button/SigninupBox';
import SigninupText from '../Button/SigninupText';

function Login() {
  return (
    <div className="container container-layout">
        <section className="login-box login-layout">
            <img className="logo-URLink" alt="URLink" src={URLinkLogo} />
            <div className="title-login">로그인</div>

            <form method="POST">
                <GoogleLogin text="구글 이메일로 로그인" />
                <div class="line"><span>OR</span></div>
                <div className="subtitle">이메일</div>
                <EmailNickname placeholder="user@exmaple.com" />
                <div className="subtitle">비밀번호</div>
                <Password placeholder="password" />
                <div className="btn-group">
                    <SigninupBox text="로그인" />
                    <SigninupText  text="회원가입"/>
                </div>
            </form>

        </section>

        <section className="image-box-login image-layout">
        </section>
    </div>
  );
}
export default Login;

