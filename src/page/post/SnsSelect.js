import {useState,useEffect} from 'react';

function SnsSelect(props){
    let auth2;
    useEffect(()=>{
        const googleUser = {};
        let auth2;
       // loadYoutubeApi();
        googleSDK();




    },[]);

    const loadYoutubeApi=()=> {

         // const script = document.createElement("script");
         // script.src = "https://apis.google.com/js/client.js";
         // document.body.append(script);
         // script.onload = () => {
         //     console.log("tl");
         //     loadClientWhenGapiReady(script);

            window['gapi'].load('auth2', ()=> {
                console.log("로드");
                auth2 = window['gapi'].auth2.init({
                    client_id: '298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com'
                });
            });

        //         //attachSignin(document.getElementById('btnGoogle'));
        //     });
        //     // gapi.load('client', () => { gapi.client.setApiKey(API_KEY);
        //     // gapi.client.load('youtube', 'v3', () => { this.setState({ gapiReady: true }); }); });
        //  };
    }
    const googleSDK = () => {
        // #3 platform.js 스크립트 로드 후 gapi.auth2.init 함수 호출 및 로그인 버튼 기능 활성화
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                // https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams
                // https://developers.google.com/identity/sign-in/web/reference#gapiauth2clientconfig
                // auth2 = window['gapi'].auth2.init({
                //     client_id: 'GCP_OAUTH2_CLIENT_ID',
                //     cookiepolicy: 'single_host_origin',
                //     scope: 'profile email',
                // });
                // auth2 = window['gapi'].auth2.init({
                //     client_id: '298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com'
                // });
            });
        }

        // #2 <script id="google-jssdk" src="https://.../platform.js?onload=googleSDKLoaded"></script> 태그를 문서에 추가
        //    스크립트 코드가 로드되면 googleSDKLoaded 호출
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    const loadClientWhenGapiReady = (script) => {
        // let googleapiLoaded= false;
        // console.log('Trying To Load Client!');
        // console.log(script);
        // if(script.getAttribute('gapi_processed')){
        //     console.log('Client is ready! Now you can access gapi. :)');
        //     window.gapi.load('auth2', function () {
        //         console.log("완료");
        //         auth2 = window.gapi.auth2.init({
        //             client_id: '298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com',
        //             cookiepolicy: 'single_host_origin',
        //         });
        //     });
        // } else{ console.log('Client wasn\'t ready, trying again in 100ms');
        //     setTimeout(() => {loadClientWhenGapiReady(script)}, 100); }
        //     }
    }

    const attachSignin=(element)=>{

        console.log(element.id);

        // auth2.attachClickHandler(element, {},
        //     function (googleUser) {
        //         console.log(googleUser.getBasicProfile());
        //         // $("#hidLoginType").val("G");
        //         // $("#hidSNSEmail").val(googleUser.getBasicProfile().getEmail());
        //         // $("#hidSNSName").val(googleUser.getBasicProfile().getName());
        //         // $("#hidSNSImgURL").val(googleUser.getBasicProfile().getImageUrl());
        //         // $("#snsLoginForm").submit();
        //
        //     }, function (error) {
        //         // alert(JSON.stringify(error, undefined, 2));
        //     });
    }

    return(
        <div className={'contents_wrap'}>
            <div className={'video_post vp_sns_select'}>
                <div className={'section_title'}>SNS채널 추가</div>
                <div className={'section_desc'}>영상 게시하기에 추가하려는 채널을 선택해주세요</div>
                <div className={'sns_select_items'}>
                    <div className={'sns_select_item'}>
                        <a href={'https://accounts.google.com/o/oauth2/v2/auth?'+
                        'scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&' +
                        'access_type=offline&' +
                        'include_granted_scopes=true&' +
                        'response_type=code&'+
                        'redirect_uri=http://localhost:3000/post/select&' +
                        'client_id=298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com'} target={'_blank'}>
                            <div className={'sns_img'}><img src={'/img/ic_youtube.svg'}/></div>
                            <div className={'sns_title'}>Youtube</div>
                        </a>
                    </div>
                    <div className={'sns_select_item'}>
                        <div className={'sns_img'}><img src={'/img/ic_tiktok.svg'}/></div>
                        <div className={'sns_title'}>tiktok</div>
                    </div>
                    <div className={'sns_select_item'}>
                        <div className={'sns_img'}><img src={'/img/ic_vimeo.svg'}/></div>
                        <div className={'sns_title'}>vimeo</div>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default SnsSelect
