import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';


function Footer(props){
    const [windowAppYn,setWindowAppYn] =  useState(false);
    const [footerYn,setFooterYn] =  useState(true);
    const location = useLocation();


    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        if(params.get('windowapp')){
            setWindowAppYn(true);
        }
        if(location.pathname.indexOf('/login')>=0){
            setFooterYn(false);
        }else{
            setFooterYn(true);
        }
    },[location])
    return(
        <div className={'footer '+(windowAppYn?'window_app':'')+(footerYn?'':'not_display')}>
            <div className={'ft_menu'}>
                <div className={'ftm_item'}>이용약관</div>
                <div className={'ftm_item'}>개인정보취급방침</div>
                <div className={'ftm_item'}>제휴협력문의</div>
            </div>
            <div className={'ft_company'}>
                ㈜엘지유플러스 | 주소: 서울특별시 용산구 한강대로 32 | 대표이사 황현식 | 사업자등록번호 220-81-39938 | 통신판매신고 제 2015-서울용산-00481호<br/>
                본 서비스는 상용서비스가 아닌 고객사용성 확인을 위한 베타서비스로써 어떠한 책임도 부담하지 아니합니다.
            </div>
            <div className={'ft_copyright'}>
                Copyright@U2 co., Ltd. All rights reserved
            </div>
        </div>
    )


}
export default Footer
