import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';


function Footer(props){
    const [windowAppYn,setWindowAppYn] =  useState(false);
    const location = useLocation();


    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        if(params.get('windowapp')){
            setWindowAppYn(true);
        }
    },[location])
    return(
        <div className={'footer '+(windowAppYn?'window_app':'')}>
            <div className={'ft_menu'}>
                <div className={'ftm_item'}>이용약관</div>
                <div className={'ftm_item'}>개인정보취급방침</div>
                <div className={'ftm_item'}>제휴협력문의</div>
            </div>
            <div className={'ft_company'}>
                U2 | 대표 고지연 | 서울특별시 중구 통일로 10 세브란스빌딩 18층 | 사업자등록번호 : 457-81-00277 | 통신판매업신고 : 2019-서울중구-0087 | U2는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매업과 통신판매중개업을 영위하고 있습니다. U2는 통신판매중개자로서 중개하는 통신판매에 관하여서는 통신판매의 당사자가 아니므로 어떠한 책임도 부담하지 아니합니다.
            </div>
            <div className={'ft_copyright'}>
                Copyright@U2 co., Ltd. All rights reserved
            </div>
        </div>
    )


}
export default Footer
