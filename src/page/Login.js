import {useState,useEffect} from 'react';
import useBus from 'use-bus'
import axios from "axios";
import {useLocation} from "react-router-dom";
import qs from "qs";
import useHistoryState from "use-history-state";

window.fbAsyncInit = function() {
    window.FB.init({
        appId      : '463225464912276',
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
    });
    window.FB.AppEvents.logPageView();
};
function Login(props){

    const [mobileYn,setMobileYn] =  useState(false);
    const location = useLocation();
    let params;

    useEffect(()=>{
        params = new URLSearchParams(location.search);
        if(window.innerWidth<900){
            setMobileYn(true);
        }
        console.log(params.get('code')); //카카오로그인 토큰
        //console.log(location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]); //구글로그인 토큰


    },[]);

    const snsLoginClick=(sns)=>{
        switch (sns){
            case 'fb':{
                window.FB.login(function(response) {
                    if (response.status === 'connected') {
                        window.FB.api('/me', 'get', {fields: 'name,email'}, function(result) {
                            console.log(result);
                        })
                    } else if (response.status === 'not_authorized') {
                        // 사람은 Facebook에 로그인했지만 앱에는 로그인하지 않았습니다.
                        alert('앱에 로그인해야 이용가능한 기능입니다.');
                    } else {
                        // 그 사람은 Facebook에 로그인하지 않았으므로이 앱에 로그인했는지 여부는 확실하지 않습니다.
                        alert('페이스북에 로그인해야 이용가능한 기능입니다.');
                    }
                }, {scope: 'public_profile,email'});
                break;
            }
            case 'google':{

                    const CLIENT_ID = '298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com';
                    const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

                    const queryStr = qs.stringify({
                        client_id:CLIENT_ID,
                        redirect_uri: 'http://localhost:3000/login',
                        response_type: "token",
                        scope:'profile email'
                    });

                    const loginUrl = AUTHORIZE_URI + "?" + queryStr;

                    window.open(loginUrl);

                break;
            }
            case 'kakao':{
                window.open('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3004a61b1c2a6c50a35c37134635331a&redirect_uri=http://localhost:3000/login');
                break;
            }

        }
    }



    return(
        <div className={'contents_wrap'}>
          <div className={'login_section'}>
             <div className={'login_container'}>
                 <div className={'logo_section'}><img src={'/img/logo_g.svg'}/></div>
                 <div className={'section_title'}>로그인/회원가입</div>
                 <div className={'sns_items'}>
                     <button className={'default_bt sns_login_bt'} onClick={()=>snsLoginClick('fb')}><img src={'/img/ic_facebook2.svg'}/>페이스북계정으로 계속하기</button>
                     <button className={'default_bt sns_login_bt'} onClick={()=>snsLoginClick('google')}><img src={'/img/ic_google.svg'}/>구글계정으로 계속하기</button>
                     <button className={'default_bt sns_login_bt'} onClick={()=>snsLoginClick('kakao')}><img src={'/img/ic_kakao2.svg'}/>카카오계정으로 계속하기</button>
                 </div>
                 <div className={'login_bottom_info'}>
                     로그인을 하지않고 서비스를 계속하려면, <span className={'back_bt'} onClick={()=>{window.history.back();}}>뒤로가기</span>를 눌러주세요.
                 </div>
             </div>
          </div>

        </div>
    )


}
export default Login
