import {useState,useEffect} from 'react';
import {useLocation,Link} from 'react-router-dom';

function Header(props){
    const [whiteFix,setWhiteFix] = useState(false);
    const [headerFix,setHeaderFix] = useState(false);
    const [mobileMenuActive,setMobileMenuActive] = useState(false);
    const [windowAppYn,setWindowAppYn] =  useState(false);
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname.indexOf('/tutorial/detail/'))
        if(location.pathname.indexOf('/tutorial/detail/')>=0){
            setWhiteFix(true);
            //console.log(whiteFix);
        }else{
            setWhiteFix(false);
        }
        const params = new URLSearchParams(location.search);
        if(params.get('windowapp')){
            setWindowAppYn(true);
        }


        let scTop;
        document.addEventListener('scroll', function() {
            scTop = document.documentElement.scrollTop;
            if(scTop>500){
                setHeaderFix(true);
                setWhiteFix(false);
            }else{
                setHeaderFix(false);
                if(location.pathname.indexOf('/tutorial/detail/')>=0){
                    setWhiteFix(true);
                }else{
                    setWhiteFix(false);
                }
            }
        });

        window.scrollTo(0, 0);

    },[location])
    return(
        <div className={'header '+(whiteFix?'white ':'')+(headerFix?'fixed ':'')+(windowAppYn?'window_app':'')+(mobileMenuActive?'active':'')}>
         <div className={'header_tl'}>
             <Link to={'/'}><div className={'logo_section'}><img src={'/img/logo'+(whiteFix?'_w':'')+'.svg'}/></div></Link>
             <div className={'search_section'}>
                 <input type={'text'} placeholder={'필요한 영상제작팁을 검색하세요'}/>
                 <img src={'/img/ic_search'+(whiteFix?'_w':'')+'.svg'}/>
             </div>
             <div className={'mobile_menu mobile_view '+(mobileMenuActive?'active':'')} onClick={(e)=>{e.stopPropagation();setMobileMenuActive(!mobileMenuActive);}}>
                 <div className={'mm_ic_container '}>
                     <div className={'mm_ic mm1'}></div>
                     <div className={'mm_ic mm2'}></div>
                     <div className={'mm_ic mm3'}></div>
                 </div>
             </div>

         </div>
          <div className={'main_menu'}>
              <ul>
                  <li>메인으로</li>
                  <li className={'active'}><Link to={'/'}>영상제작팁</Link></li>
                  <li>요금제</li>
                  <li>로그인/회원가입</li>
              </ul>
          </div>

            <div className={'mobile_menu_section'}>
                <div className={'main_menu'}>
                    <ul>
                        <li><span className={'mm_t'}>메인으로</span></li>
                        <li className={'active'}><span className={'mm_t'}>영상제작팁</span></li>
                        <li><span className={'mm_t'}>요금제</span></li>
                        <li><span className={'mm_t'}>로그인/회원가입</span></li>
                    </ul>
                </div>
                <div className={'sub_menu'}>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보취급방침</li>
                        <li>제휴협력문의</li>
                    </ul>
                </div>
            </div>

        </div>
    )


}
export default Header
