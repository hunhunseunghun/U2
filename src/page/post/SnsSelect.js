import {useState,useEffect} from 'react';
import qs from "qs";

function SnsSelect(props){
    let auth2;

    useEffect(()=>{


        const googleUser = {};
        let auth2;
        //loadYoutubeApi();
        //googleSDK();




    },[]);


    const loadYoutubeApi=()=>{
        const CLIENT_ID = '298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com';
        const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

        const queryStr = qs.stringify({
            client_id:CLIENT_ID,
            redirect_uri: 'http://localhost:3000/post/post',
            response_type: "token",
            scope: 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.upload'
        });

        const loginUrl = AUTHORIZE_URI + "?" + queryStr;

        window.open(loginUrl);
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
                    <div className={'sns_select_item'} onClick={loadYoutubeApi}>
                            <div className={'sns_img'}><img src={'/img/ic_youtube.svg'}/></div>
                            <div className={'sns_title'}>Youtube</div>
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
