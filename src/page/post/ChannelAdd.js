import {useState,useEffect} from 'react';
import qs from "qs";
import axios from "axios";
function ChannelAdd(props){
    const { access_token } = qs.parse(window.location.hash.substr(1));

    useEffect(() => {
        const YOUTUBE_URI = "https://www.googleapis.com/youtube/v3/channels";
        console.log(access_token);

        const queryStr = qs.stringify({
            part:'id,snippet',
            mine:true,
        });

        axios.get(YOUTUBE_URI+'?'+queryStr, {
            headers: { Authorization: "Bearer " + access_token },

        })
            .then(data => {
                console.log(data)
            });
    }, [access_token]);
    const channel_add= ()=>{
        window.location.href='/post/post?access_token='+access_token;
    }
    return(
        <div className={'contents_wrap'}>
            <div className={'video_post vp_channel_add'}>
                <div className={'section_title'}>Youtube 채널 등록</div>
                <div className={'vp_input_items'}>
                    <div className={'input_item disable_item'}>
                        <div className={'item_title'}>이름</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={'엄태성'}/>
                        </div>
                    </div>
                    <div className={'input_item disable_item'}>
                        <div className={'item_title'}>이메일</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={'um3156@naver.com'}/>
                        </div>
                    </div>
                    <div className={'input_item disable_item'}>
                        <div className={'item_title'}>채널 명</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={'Make U2 2nd'}/>
                        </div>
                    </div>
                    <div className={'input_item '}>
                        <div className={'item_title'}>채널 닉네임</div>
                        <div className={'item_contents'}>
                            <input type={'text'} placeholder={'닉네임을 입력해주세요(최대 8자)'}/>
                            <div className={'item_desc'}>닉네임은 채널등록 후 메인페이지 아이콘 이름으로 사용됩니다
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'vp_bt_section'}>
                    <button className={'default_bt sns_submit_bt'} onClick={channel_add}>
                        유튜브 채널 등록하기
                    </button>
                </div>
            </div>
        </div>
    )


}
export default ChannelAdd
