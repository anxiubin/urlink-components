import React from 'react';
import './LoginSignup.scss';
import GoogleLogin from '../Button/GoogleLogin';
import URLinkLogo from '../Img/logo-urlink-full.png'
import EmailNickname from '../Input/EmailNickname';
import Password from '../Input/Password';
import SigninupBox from '../Button/SigninupBox';
import SigninupText from '../Button/SigninupText';
import EmailAgree from '../Button/EmailAgree';
import Terms from '../Modal/Terms';

function Signup() {
  return (
    <div className="container container-layout">
        <section className="login-box login-layout">
            <img className="logo-URLink" alt="URLink" src={URLinkLogo} />
            <div className="title-login">회원가입</div>

            <form method="POST">
                <GoogleLogin text="구글 이메일로 회원가입" />
                <div className="line"><span>OR</span></div>
                <div className="subtitle">닉네임</div>
                <EmailNickname placeholder="최대 8자" />
                <div className="subtitle">이메일</div>
                <EmailNickname placeholder="user@exmaple.com" />
                <div className="subtitle">비밀번호</div>
                <Password placeholder="영문 + 숫자 조합 6자리 이상" />
                <Password placeholder="비밀번호 확인" />

                <div className="agree-group">
                  <EmailAgree />
                  <Terms />
                </div>

                <div className="btn-group">
                  <SigninupBox text="회원가입" />
                  <SigninupText text="< 로그인"/>
                    
                </div>
            </form>
            
        </section>

        <section className="image-box-signup image-layout">
        </section>
    </div>
  );
}
export default Signup;

