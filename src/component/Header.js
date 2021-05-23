import {useState,useEffect} from 'react';
import {useLocation,Link} from 'react-router-dom';
import {IMG_URL} from "../const/URL";

function Header(props){
    const [mobileYn,setMobileYn] =  useState(false);
    const [whiteFix,setWhiteFix] = useState(false);
    const [headerFix,setHeaderFix] = useState(false);
    const [mobileMenuActive,setMobileMenuActive] = useState(false);
    const [windowAppYn,setWindowAppYn] =  useState(false);
    const [headerYn,setHeaderYn] =  useState(true);
    const location = useLocation();
    useEffect(()=>{
        setMobileMenuActive(false);
        if(location.pathname.indexOf('/tutorial/detail/')>=0||location.pathname==='/'){
            setWhiteFix(true);
            //console.log(whiteFix);
        }else{
            setWhiteFix(false);
        }
        const params = new URLSearchParams(location.search);
        if(params.get('windowapp')){
            setWindowAppYn(true);
        }
        if(location.pathname.indexOf('/login')>=0){
            setHeaderYn(false);
        }else{
            setHeaderYn(true);
        }


        let scTop;
        document.addEventListener('scroll', function() {
            scTop = document.documentElement.scrollTop;
            if(scTop>500){
                setHeaderFix(true);
                setWhiteFix(false);
            }else{
                setHeaderFix(false);
                if(location.pathname.indexOf('/tutorial/detail/')>=0||location.pathname==='/'){
                    setWhiteFix(true);
                }else{
                    setWhiteFix(false);
                }
            }
        });
        window.addEventListener('resize',()=>{
            // if(window.innerWidth<900&&!mobileYn){
            //     setMobileYn(true);
            //     window.location.reload();
            // }else if(window.innerWidth>=900&&mobileYn){
            //     setMobileYn(false);
            //     window.location.reload();
            // }
        })

        window.scrollTo(0, 0);

    },[location]);


    return(
        <div className={'header '+(whiteFix?'white ':'')+(headerFix?'fixed ':'')+(windowAppYn?'window_app':'')+(mobileMenuActive?'active':'')+(headerYn?'':'not_display')}>
         <div className={'header_tl'}>
             <Link to={'/'}><div className={'logo_section'}><img src={'/img/logo'+(whiteFix?'_w':'')+'.svg'}/></div></Link>
             {location.pathname!=='/'&&<div className={'search_section'}>
                 <input type={'text'} placeholder={'필요한 영상제작팁을 검색하세요'}/>
                 <img src={'/img/ic_search'+(whiteFix?'_w':'')+'.svg'}/>
             </div>}
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
                  <li className={location.pathname==='/'?'active':''}><Link to={'/'}>메인으로</Link></li>
                  <li className={location.pathname.indexOf('/tutorial')>=0?'active':''}><Link to={'/tutorial'}>영상제작팁</Link></li>
                  <li className={location.pathname.indexOf('/price')>=0?'active':''}><Link to={'/price'}>요금제</Link></li>
                  <li><Link to={'/login'}>로그인/회원가입</Link></li>
                  {/*<li>*/}
                  {/*    <div className={'profile_img'} style={{backgroundImage:'url(/img/temp_profile.png)'}}></div>*/}
                  {/*    <div className={'pop_sub profile_pop'}>*/}
                  {/*        <ul>*/}
                  {/*            <li>로그아웃</li>*/}
                  {/*        </ul>*/}
                  {/*    </div>*/}
                  {/*</li>*/}
              </ul>
          </div>

            <div className={'mobile_menu_section'}>
                <div className={'main_menu'}>
                    <ul>
                        <li className={location.pathname==='/'?'active':''}><Link to={'/'} className={'mm_t'}>메인으로</Link></li>
                        <li className={location.pathname.indexOf('/tutorial')>=0?'active':''}><Link to={'/tutorial'} className={'mm_t'}>영상제작팁</Link></li>
                        <li className={location.pathname.indexOf('/price')>=0?'active':''}><Link to={'/price'} className={'mm_t'}>요금제</Link></li>
                        <li><Link to={'/login'} className={'mm_t'}>로그인/회원가입</Link></li>
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
