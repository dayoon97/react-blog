import React, { useState, useEffect } from 'react';
import '../resources/CSS/Login.css';
import axios from 'axios';

    const Login = () => {
        //객체를 업데이트하기위해 useState안에 객체를 사용
        const [inputs, setInputs] = useState({  
            email: '',
            password: '',
        })
        //값을 가져오기 위해 inputs에 name으로 가져왔다
        const { email, password } = inputs   

        const onChange = (e) => {
        //input에 name을 가진 요소의 value에 이벤트를 걸었다
        const { name, value } = e.target   

        // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
        const nextInputs = {            
        //스프레드 문법으로 기존의 객체를 복사한다.
                ...inputs,  
                [name]: value,
            }
        //만든 변수를 seInput으로 변경해준다.
            setInputs(nextInputs)       
        }

        const onLogin = () => {
        axios.post('/authenticate', inputs).then(response => {
            const { accessToken } = response.data;

            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

            // accessToken을 localStorage, cookie 등에 저장하지 않는다!

            }).catch(error => {
                // ... 에러 처리
                console.log("에러");
            })
        }

        //안의 값을 초기화하는 객체를 변수에 넣었다
        const onReset = () => {
            const resetInputs = {       
                email: '',
                password: '',
            }
        //초기화 객체값을 넣은 변수로 변경하도록 셋인풋 실행
            setInputs(resetInputs)      
        }

    return (
        <div className="cont-area">
            <div className="login-area">
                <div className="title-area">로그인</div>
                <div className="input-area">
                    <div className="input-id">
                        이메일<br/>
                        <input type="text" name="email" placeholder="이메일을 입력하세요" onChange={onChange} value={ email }></input>
                    </div>
                    <div className="input-pwd">
                        비밀번호<br/>
                        <input type="password" name="password" placeholder="비밀번호를 입력하세요" onChange={onChange} value={ password }></input>
                    </div>
                    <div className="submit-area">
                        <button className="login-btn" onClick={onLogin}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;